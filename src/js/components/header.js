import '../../css/header.css';

export function loadHeader() {
    const headerHTML = `
    <header id="pill-header">
        <a href="index.html" class="pill-logo">
            <div class="pill-logo-circle">J</div>
            <span class="pill-logo-text">Jaguar Fitness</span>
        </a>

        <!-- DESKTOP NAV -->
        <nav class="pill-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="#">Equipments</a>
                    <ul class="dropdown-menu">
                        <li class="has-submenu">
                            <a href="#">Cardio</a>
                            <ul class="submenu">
                                <li><a href="treadmill.html">Treadmills</a></li>
                                <li><a href="bikes.html">Bikes</a></li>
                                <li><a href="ellipticals.html">Ellipticals</a></li>
                                <li><a href="stair_climber.html">Stair Climbers</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Strength</a></li>
                        <li><a href="#">Functional</a></li>
                        <li><a href="#">Free Weights</a></li>
                    </ul>
                </li>
                <li><a href="franchisee.html">Franchisee</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Membership</a></li>
                <li class="dropdown">
                    <a href="about_us.html">About Us</a>
                    <ul class="dropdown-menu">
                        <li><a href="terms_conditions.html">Terms and Conditions</a></li>
                        <li><a href="privacy_policy.html">Privacy Policy</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li class="nav-separator">|</li>
                <li><a href="#">Business</a></li>
            </ul>
        </nav>

        <div class="pill-icons">
             <!-- MOBILE TOGGLE (Visible < 1100px) -->
            <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <a href="#" class="icon-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </a>
            <a href="#" class="icon-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </a>
            <a href="#" class="icon-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <div class="cart-dot"></div>
            </a>
        </div>
    </header>

    <!-- MOBILE MENU OVERLAY -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-content">
            <a href="index.html" class="mobile-link">Home</a>
            <a href="#" class="mobile-link">Equipments</a>
            <a href="franchisee.html" class="mobile-link">Franchisee</a>
            <a href="about_us.html" class="mobile-link">About Us</a>
            <a href="contact.html" class="mobile-link">Contact</a>
            <a href="terms_conditions.html" class="mobile-link small">Terms</a>
            <a href="privacy_policy.html" class="mobile-link small">Privacy</a>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // --- LOGIC ---

    // 1. Scroll Effect
    window.addEventListener("scroll", function () {
        var header = document.getElementById("pill-header");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // 2. Mobile Toggle Logic
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (toggleBtn && overlay) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}
