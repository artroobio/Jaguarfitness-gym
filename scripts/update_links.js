import fs from 'fs';
import path from 'path';

const filesToUpdate = [
    'index.html',
    'landing.html',
    'franchisee.html',
    'contact.html',
    'about_us.html',
    'ellipticals.html',
    'treadmill.html',
    'bikes.html',
    'stair_climber.html',
    'terms_conditions.html',
    'privacy_policy.html'
];

console.log("--- Updating Links (page2index.html -> franchisee.html) ---");

filesToUpdate.forEach(file => {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace all instances of page2index.html with franchisee.html
    const regex = /page2index\.html/g;

    if (regex.test(content)) {
        console.log(`Updating links in ${file}...`);
        content = content.replace(regex, 'franchisee.html');
        fs.writeFileSync(filePath, content);
        console.log("Done.");
    } else {
        console.log(`No links found in ${file}.`);
    }
});
