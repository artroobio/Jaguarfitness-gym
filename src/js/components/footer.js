import '../../css/footer.css';

export function loadFooter() {
    const footerHTML = `
    <div id="jaguar-footer">
        <div class="j-footer-container">

            <div class="j-footer-grid">

                <div class="j-footer-col">
                    <h4>Products</h4>
                    <ul class="j-footer-list">
                        <li><a href="#" class="j-footer-link">Treadmills</a></li>
                        <li><a href="#" class="j-footer-link">Bikes</a></li>
                        <li><a href="#" class="j-footer-link">Ellipticals</a></li>
                        <li><a href="#" class="j-footer-link">Strength</a></li>
                    </ul>
                </div>

                <div class="j-footer-col">
                    <h4>Support</h4>
                    <ul class="j-footer-list">
                        <li><a href="contact.html" class="j-footer-link">Contact Us</a></li>
                        <li><a href="#" class="j-footer-link">Customer Support</a></li>
                        <li><a href="#" class="j-footer-link">Service Request</a></li>
                    </ul>
                </div>

                <div class="j-footer-col">
                    <h4>Company</h4>
                    <ul class="j-footer-list">
                        <li><a href="about_us.html" class="j-footer-link">About Wellness</a></li>
                        <li><a href="#" class="j-footer-link">Design</a></li>
                        <li><a href="#" class="j-footer-link">Sustainability</a></li>
                    </ul>
                </div>

                <div class="j-footer-col">
                    <div class="j-newsletter-box">
                        <h4>Join the community</h4>
                        <p class="j-news-desc">Get the latest news and events to stay inspired and reach your goals
                            faster.</p>
                        <button class="j-sub-btn">Subscribe Now</button>
                    </div>
                </div>

            </div>

            <div class="j-footer-bottom">
                <div>
                    <p style="margin-bottom: 8px;">Products and services supplied in <b style="color:white;">India</b>
                    </p>
                    <p>Jaguar Fitness Global Headquarters | Premium Wellness Solutions</p>
                </div>

                <div style="text-align: right;">
                    <div class="j-legal-links" style="margin-bottom: 16px; justify-content: flex-end;">
                        <a href="privacy_policy.html">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="terms_conditions.html">Terms of Use</a>
                    </div>
                    <div class="j-secure" style="justify-content: flex-end;">
                        <span>© 2026 Jaguar Fitness India</span>
                        <span class="j-dot"></span>
                        <span>Secure Site</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <button id="j-support-btn" title="Customer Support">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M3 12a9 9 0 0 1 18 0v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2 7 7 0 1 0-14 0v3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2zm16 1v1a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1zm-14 0a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-1z" />
        </svg>
    </button>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Smooth Scroll to Top when Support Button is clicked
    // We need to wait for the element to exist, but since it's synchronous insert, it's fine.
    const btn = document.getElementById('j-support-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
