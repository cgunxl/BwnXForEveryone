// Navigation Module
class Navigation {
    constructor() {
        this.hamburger = document.getElementById('hamburgerMenu');
        this.sidebar = document.getElementById('sidebar');
        this.overlay = document.getElementById('overlay');
        this.sidebarClose = document.getElementById('sidebarClose');
        this.navbar = document.querySelector('.navbar');
        this.backToTop = document.getElementById('backToTop');
        this.themeToggle = document.getElementById('themeToggle');
        this.searchInput = document.getElementById('searchInput');
        this.startButton = document.getElementById('startButton');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupThemeToggle();
        this.animateStats();
        this.setupSearch();
    }
    
    setupEventListeners() {
        // Hamburger menu
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleSidebar());
        }
        
        // Sidebar close
        if (this.sidebarClose) {
            this.sidebarClose.addEventListener('click', () => this.closeSidebar());
        }
        
        // Overlay click
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeSidebar());
        }
        
        // Back to top
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Start button
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                const currentLang = localStorage.getItem('selectedLanguage') || 'th';
                window.location.href = `/${currentLang}/main`;
            });
        }
        
        // Escape key to close sidebar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.sidebar.classList.contains('active')) {
                this.closeSidebar();
            }
        });
    }
    
    toggleSidebar() {
        this.sidebar.classList.toggle('active');
        this.overlay.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        document.body.style.overflow = this.sidebar.classList.contains('active') ? 'hidden' : '';
    }
    
    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.overlay.classList.remove('active');
        this.hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    setupScrollEffects() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Navbar scroll effect
            if (currentScroll > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Back to top button
            if (currentScroll > 300) {
                this.backToTop.classList.add('show');
            } else {
                this.backToTop.classList.remove('show');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    setupThemeToggle() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.applyTheme(savedTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    }
    
    applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            if (this.themeToggle) {
                this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        } else {
            document.body.classList.remove('light-theme');
            if (this.themeToggle) {
                this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
    }
    
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current).toLocaleString();
                    }, 16);
                    
                    observer.unobserve(stat);
                }
            });
        }, observerOptions);
        
        stats.forEach(stat => observer.observe(stat));
    }
    
    setupSearch() {
        if (this.searchInput) {
            // Search functionality
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const searchTerm = this.searchInput.value.trim();
                    if (searchTerm) {
                        this.performSearch(searchTerm);
                    }
                }
            });
            
            // Search button
            const searchButton = document.querySelector('.search-button');
            if (searchButton) {
                searchButton.addEventListener('click', () => {
                    const searchTerm = this.searchInput.value.trim();
                    if (searchTerm) {
                        this.performSearch(searchTerm);
                    }
                });
            }
        }
    }
    
    performSearch(term) {
        // Track search event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                search_term: term
            });
        }
        
        // Implement search logic here
        console.log('Searching for:', term);
        // You can redirect to a search results page or filter content
        // window.location.href = `/search?q=${encodeURIComponent(term)}`;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});