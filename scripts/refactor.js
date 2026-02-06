import fs from 'fs';
import path from 'path';

const file = process.argv[2];
if (!file) {
    console.error("Please provide a file path");
    process.exit(1);
}

const filePath = path.resolve(file);
if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

console.log(`Processing ${filePath}...`);
let content = fs.readFileSync(filePath, 'utf8');

// Helper to safely remove blocks
function removeBlock(text, tag, checkFn, replacement = '') {
    // Regex to match <tag ...>...</tag> or <tag>...</tag>
    // We use a non-greedy match for the content.
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
    return text.replace(regex, (match, innerContent) => {
        if (checkFn(innerContent)) {
            console.log(`Removing <${tag}> block.`);
            return replacement;
        }
        return match;
    });
}

// 1. Remove Header CSS & Footer CSS (Iterate <style> tags)
content = removeBlock(content, 'style', (inner) => {
    return inner.includes('PILL HEADER STYLES') || inner.includes('#jaguar-footer');
}, '');

// 2. Remove Header Script (Iterate <script> tags)
content = removeBlock(content, 'script', (inner) => {
    return inner.includes('window.addEventListener("scroll"') && inner.includes('header.classList.add("scrolled")');
}, '');

// 3. Remove Footer Script (Iterate <script> tags)
content = removeBlock(content, 'script', (inner) => {
    return inner.includes("j-support-btn") && inner.includes("window.scrollTo");
}, '');


// 4. Remove Header HTML (Safe to use specific ID match as it is unique and not nested in itself)
const headerHtmlRegex = /<header id="pill-header">[\s\S]*?<\/header>/i;
if (headerHtmlRegex.test(content)) {
    content = content.replace(headerHtmlRegex, '<!-- Header injected by main.js -->');
    console.log("Removed Header HTML");
}

// 5. Remove Footer HTML (Safe to match until support button)
// We match <div id="jaguar-footer"> ... up to the support button
const footerHtmlRegex = /<div id="jaguar-footer">[\s\S]*?(?=<button id="j-support-btn")/i;
if (footerHtmlRegex.test(content)) {
    content = content.replace(footerHtmlRegex, '<!-- Footer injected by main.js -->\n');
    console.log("Removed Footer HTML");
}

// 6. Remove Support Button (Button tag is generally safe if ID is specific)
// <button id="j-support-btn" ... > ... </button>
const supportBtnRegex = /<button id="j-support-btn"[\s\S]*?<\/button>/i;
if (supportBtnRegex.test(content)) {
    content = content.replace(supportBtnRegex, '');
    console.log("Removed Support Button");
}

// 7. Inject Main Script
if (!content.includes('src="/src/js/main.js"')) {
    // Look for GSAP ScrollTrigger to place after
    const triggerScript = 'ScrollTrigger.min.js"></script>';
    if (content.includes(triggerScript)) {
        content = content.replace(triggerScript, triggerScript + '\n    <script type="module" src="/src/js/main.js"></script>');
    } else {
        // Fallback to head end
        content = content.replace('</head>', '    <script type="module" src="/src/js/main.js"></script>\n</head>');
    }
    console.log("Injected main.js");
}

fs.writeFileSync(filePath, content);
console.log(`Done.`);
