// Enhanced Language Switcher Module with Animations
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = {};
        this.availableLanguages = {
            'th': { 
                name: 'ไทย', 
                flag: 'https://flagcdn.com/w20/th.png',
                nativeName: 'ภาษาไทย',
                dir: 'ltr'
            },
            'en': { 
                name: 'English', 
                flag: 'https://flagcdn.com/w20/gb.png',
                nativeName: 'English',
                dir: 'ltr'
            },
            'es': { 
                name: 'Español', 
                flag: 'https://flagcdn.com/w20/es.png',
                nativeName: 'Español',
                dir: 'ltr'
            },
            'zh': { 
                name: '中文', 
                flag: 'https://flagcdn.com/w20/cn.png',
                nativeName: '简体中文',
                dir: 'ltr'
            },
            'ja': { 
                name: '日本語', 
                flag: 'https://flagcdn.com/w20/jp.png',
                nativeName: '日本語',
                dir: 'ltr'
            },
            'ko': { 
                name: '한국어', 
                flag: 'https://flagcdn.com/w20/kr.png',
                nativeName: '한국어',
                dir: 'ltr'
            },
            'pt': { 
                name: 'Português', 
                flag: 'https://flagcdn.com/w20/br.png',
                nativeName: 'Português (Brasil)',
                dir: 'ltr'
            },
            'fr': { 
                name: 'Français', 
                flag: 'https://flagcdn.com/w20/fr.png',
                nativeName: 'Français',
                dir: 'ltr'
            },
            'de': { 
                name: 'Deutsch', 
                flag: 'https://flagcdn.com/w20/de.png',
                nativeName: 'Deutsch',
                dir: 'ltr'
            },
            'ar': { 
                name: 'العربية', 
                flag: 'https://flagcdn.com/w20/sa.png',
                nativeName: 'العربية',
                dir: 'rtl'
            }
        };
        
        this.init();
    }
    
    detectLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && this.availableLanguages[savedLang]) {
            return savedLang;
        }
        
        // Check URL path
        const pathLang = window.location.pathname.split('/')[1];
        if (pathLang && this.availableLanguages[pathLang]) {
            return pathLang;
        }
        
        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.availableLanguages[browserLang]) {
            return browserLang;
        }
        
        // Default to Thai
        return 'th';
    }

    async init() {
        // Load translations
        await this.loadTranslations();
        
        // Setup language selector
        this.setupLanguageSelector();
        
        // Apply current language
        this.applyLanguage(this.currentLang);
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    async loadTranslations() {
        try {
            const response = await fetch('/translations.json');
            if (response.ok) {
                this.translations = await response.json();
            } else {
                console.warn('Translations file not found, using defaults');
                this.loadDefaultTranslations();
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            this.loadDefaultTranslations();
        }
    }
    
    loadDefaultTranslations() {
        this.translations = {
            th: {
                nav: {
                    home: 'หน้าหลัก',
                    products: 'สินค้า',
                    contact: 'ติดต่อ',
                    search: 'ค้นหา...'
                },
                hero: {
                    title: 'BwnX',
                    subtitle: 'เว็บไซต์แนะนำการใช้ชีวิตด้วยบทความการแนะนำ',
                    description: 'ค้นพบแอป สินค้า บริการ และคำแนะนำที่ดีที่สุดสำหรับชีวิตที่ดีขึ้นของคุณ',
                    rating: '4.9/5.0 จากผู้ใช้งานมากกว่า 10,000 คน',
                    startButton: 'เริ่มต้นใช้งาน'
                },
                features: {
                    finance: {
                        title: 'การเงิน & การลงทุน',
                        description: 'คำแนะนำด้านการเงิน การลงทุน หุ้น คริปโต และการวางแผนการเงิน'
                    },
                    goal: {
                        title: 'เป้าหมายชีวิต',
                        description: 'วางแผนและบรรลุเป้าหมายในชีวิต พัฒนาตนเอง และสร้างความสำเร็จ'
                    },
                    success: {
                        title: 'ความสำเร็จ',
                        description: 'เคล็ดลับสู่ความสำเร็จในชีวิตและการงาน จากผู้ที่ประสบความสำเร็จ'
                    }
                }
            },
            en: {
                nav: {
                    home: 'Home',
                    products: 'Products',
                    contact: 'Contact',
                    search: 'Search...'
                },
                hero: {
                    title: 'BwnX',
                    subtitle: 'Life Guidance Website with Recommendation Articles',
                    description: 'Discover the best apps, products, services, and advice for your better life',
                    rating: '4.9/5.0 from over 10,000 users',
                    startButton: 'Get Started'
                },
                features: {
                    finance: {
                        title: 'Finance & Investment',
                        description: 'Financial advice, investments, stocks, crypto, and financial planning'
                    },
                    goal: {
                        title: 'Life Goals',
                        description: 'Plan and achieve life goals, self-development, and create success'
                    },
                    success: {
                        title: 'Success',
                        description: 'Tips for success in life and work from successful people'
                    }
                }
            }
        };
    }

    setupLanguageSelector() {
        const languageDropdown = document.getElementById('languageDropdown');
        if (!languageDropdown) return;

        // Clear existing content
        languageDropdown.innerHTML = '';
        
        // Create language options with animations
        Object.entries(this.availableLanguages).forEach(([code, lang], index) => {
            const option = document.createElement('div');
            option.className = 'language-option';
            if (code === this.currentLang) {
                option.classList.add('active');
            }
            
            option.innerHTML = `
                <img src="${lang.flag}" alt="${code}" class="flag-icon">
                <span class="lang-name">${lang.name}</span>
                <span class="lang-native">${lang.nativeName}</span>
            `;
            
            // Add animation delay
            option.style.animationDelay = `${index * 50}ms`;
            
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeLanguage(code);
            });
            
            languageDropdown.appendChild(option);
        });
        
        // Setup dropdown toggle
        const languageSelector = document.getElementById('languageSelector');
        const currentLanguage = languageSelector?.querySelector('.current-language');
        
        if (currentLanguage) {
            // Update current language display
            this.updateCurrentLanguageDisplay();
            
            currentLanguage.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
                
                // Animate flag rotation
                const flagIcon = currentLanguage.querySelector('.flag-icon');
                if (flagIcon) {
                    flagIcon.style.transform = languageDropdown.classList.contains('show') 
                        ? 'rotateY(180deg)' 
                        : 'rotateY(0)';
                }
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector?.contains(e.target)) {
                languageDropdown.classList.remove('show');
                const flagIcon = currentLanguage?.querySelector('.flag-icon');
                if (flagIcon) {
                    flagIcon.style.transform = 'rotateY(0)';
                }
            }
        });
    }
    
    updateCurrentLanguageDisplay() {
        const currentLanguage = document.querySelector('.current-language');
        if (!currentLanguage) return;
        
        const lang = this.availableLanguages[this.currentLang];
        currentLanguage.innerHTML = `
            <img src="${lang.flag}" alt="${this.currentLang}" class="flag-icon" style="transition: transform 0.3s ease;">
            <span>${this.currentLang.toUpperCase()}</span>
            <i class="fas fa-chevron-down"></i>
        `;
    }

    changeLanguage(lang) {
        if (this.currentLang === lang) return;
        
        // Add transition effect
        document.body.style.opacity = '0.8';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            this.currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            document.documentElement.lang = lang;
            
            // Apply new language
            this.applyLanguage(lang);
            
            // Update selector display
            this.updateCurrentLanguageDisplay();
            
            // Update active state in dropdown
            document.querySelectorAll('.language-option').forEach(option => {
                const optionLang = option.querySelector('.lang-name').textContent;
                const langData = Object.entries(this.availableLanguages).find(([_, data]) => data.name === optionLang);
                
                if (langData && langData[0] === lang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Close dropdown
            document.getElementById('languageDropdown')?.classList.remove('show');
            
            // Track language change
            if (typeof gtag !== 'undefined') {
                gtag('event', 'language_change', {
                    from_language: this.currentLang,
                    to_language: lang
                });
            }
            
            // Restore opacity
            document.body.style.opacity = '1';
            
            // Redirect to localized page if needed
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                // Stay on homepage, just update content
            } else {
                // Redirect to localized version of current page
                const currentPath = window.location.pathname;
                const pathParts = currentPath.split('/');
                if (pathParts[1] && this.availableLanguages[pathParts[1]]) {
                    pathParts[1] = lang;
                    window.location.pathname = pathParts.join('/');
                }
            }
        }, 150);
    }

    applyLanguage(lang) {
        const langData = this.availableLanguages[lang];
        if (!langData) return;
        
        // Handle RTL languages
        document.body.dir = langData.dir;
        if (langData.dir === 'rtl') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
        
        // Apply translations if available
        if (!this.translations[lang]) {
            console.warn(`Translations for ${lang} not available`);
            return;
        }

        const t = this.translations[lang];

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link span');
        if (navLinks[0]) navLinks[0].textContent = t.nav.home;
        if (navLinks[1]) navLinks[1].textContent = t.nav.products;
        if (navLinks[2]) navLinks[2].textContent = t.nav.contact;
        
        const searchInput = document.querySelector('.search-input');
        if (searchInput) searchInput.placeholder = t.nav.search;

        // Update hero section
        const heroTitle = document.querySelector('.hero-title .gradient-text');
        if (heroTitle) heroTitle.textContent = t.hero.title;
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) heroDescription.textContent = t.hero.description;
        
        const ratingText = document.querySelector('.rating-text');
        if (ratingText) ratingText.textContent = t.hero.rating;
        
        const startBtn = document.querySelector('#startButton span');
        if (startBtn) startBtn.textContent = t.hero.startButton;

        // Update feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards[0] && t.features.finance) {
            featureCards[0].querySelector('.feature-title').textContent = t.features.finance.title;
            featureCards[0].querySelector('.feature-description').textContent = t.features.finance.description;
        }
        if (featureCards[1] && t.features.goal) {
            featureCards[1].querySelector('.feature-title').textContent = t.features.goal.title;
            featureCards[1].querySelector('.feature-description').textContent = t.features.goal.description;
        }
        if (featureCards[2] && t.features.success) {
            featureCards[2].querySelector('.feature-title').textContent = t.features.success.title;
            featureCards[2].querySelector('.feature-description').textContent = t.features.success.description;
        }

        // Update page title
        document.title = `BwnX - ${t.hero.subtitle}`;
        
        // Update categories if CategoriesManager is available
        if (window.categoriesManager) {
            window.categoriesManager.currentLang = lang;
            window.categoriesManager.renderMainCategories();
            window.categoriesManager.renderSidebarCategories();
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + L to open language menu
            if (e.altKey && e.key === 'l') {
                e.preventDefault();
                const dropdown = document.getElementById('languageDropdown');
                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            }
            
            // Alt + 1-9 to quick switch languages
            if (e.altKey && e.key >= '1' && e.key <= '9') {
                e.preventDefault();
                const index = parseInt(e.key) - 1;
                const langCodes = Object.keys(this.availableLanguages);
                if (langCodes[index]) {
                    this.changeLanguage(langCodes[index]);
                }
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
    
    // Make categories manager available globally for language updates
    if (typeof CategoriesManager !== 'undefined') {
        window.categoriesManager = new CategoriesManager();
    }
});