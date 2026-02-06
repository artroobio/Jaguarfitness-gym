import '../css/main.css';
import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
