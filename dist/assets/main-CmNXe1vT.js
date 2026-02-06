(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function r(){document.body.insertAdjacentHTML("afterbegin",`
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
    `),window.addEventListener("scroll",function(){var e=document.getElementById("pill-header");e&&(window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled"))});const l=document.querySelector(".mobile-nav-toggle"),s=document.querySelector(".mobile-menu-overlay"),a=document.querySelectorAll(".mobile-link");l&&s&&(l.addEventListener("click",()=>{l.classList.toggle("active"),s.classList.toggle("active"),document.body.classList.toggle("no-scroll")}),a.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("no-scroll")})}))}function n(){document.body.insertAdjacentHTML("beforeend",`
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
    `);const l=document.getElementById("j-support-btn");l&&l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",()=>{r(),n()});
