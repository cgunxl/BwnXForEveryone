// Language Switcher Module
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'th';
        this.translations = {};
        this.availableLanguages = {
            'th': { name: 'ไทย', flag: 'https://flagcdn.com/w20/th.png' },
            'en': { name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
            'es': { name: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
            'zh': { name: '中文', flag: 'https://flagcdn.com/w20/cn.png' },
            'ja': { name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
            'ko': { name: '한국어', flag: 'https://flagcdn.com/w20/kr.png' },
            'pt': { name: 'Português', flag: 'https://flagcdn.com/w20/pt.png' },
            'fr': { name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
            'de': { name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
            'ar': { name: 'العربية', flag: 'https://flagcdn.com/w20/sa.png' }
        };
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
    }

    async loadTranslations() {
        try {
            const response = await fetch('translations.json');
            this.translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    setupLanguageSelector() {
        // Create dropdown menu
        const languageSelector = document.querySelector('.language-selector');
        if (!languageSelector) return;

        // Clear existing content
        languageSelector.innerHTML = '';
        
        // Create current language display
        const currentLangDisplay = document.createElement('div');
        currentLangDisplay.className = 'current-language';
        currentLangDisplay.innerHTML = `
            <img src="${this.availableLanguages[this.currentLang].flag}" alt="${this.currentLang}" class="flag-icon">
            <span>${this.currentLang.toUpperCase()}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="white">
                <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        
        // Create dropdown menu
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'language-dropdown';
        
        // Add language options
        Object.entries(this.availableLanguages).forEach(([code, lang]) => {
            const option = document.createElement('div');
            option.className = 'language-option';
            if (code === this.currentLang) {
                option.classList.add('active');
            }
            option.innerHTML = `
                <img src="${lang.flag}" alt="${code}" class="flag-icon">
                <span>${lang.name}</span>
            `;
            option.addEventListener('click', () => {
                this.changeLanguage(code);
                dropdownMenu.classList.remove('show');
            });
            dropdownMenu.appendChild(option);
        });
        
        languageSelector.appendChild(currentLangDisplay);
        languageSelector.appendChild(dropdownMenu);
        
        // Toggle dropdown on click
        currentLangDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    }

    changeLanguage(lang) {
        if (this.currentLang === lang) return;
        
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        
        // Apply new language
        this.applyLanguage(lang);
        
        // Update selector display
        this.updateSelectorDisplay();
        
        // Update active state in dropdown
        document.querySelectorAll('.language-option').forEach((option, index) => {
            const langCode = Object.keys(this.availableLanguages)[index];
            if (langCode === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    updateSelectorDisplay() {
        const currentLangDisplay = document.querySelector('.current-language');
        if (currentLangDisplay) {
            currentLangDisplay.innerHTML = `
                <img src="${this.availableLanguages[this.currentLang].flag}" alt="${this.currentLang}" class="flag-icon">
                <span>${this.currentLang.toUpperCase()}</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="white">
                    <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        }
    }

    applyLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Translations for ${lang} not found`);
            return;
        }

        const t = this.translations[lang];

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[0]) navLinks[0].textContent = t.nav.home;
        if (navLinks[1]) navLinks[1].textContent = t.nav.products;
        if (navLinks[2]) navLinks[2].textContent = t.nav.contact;
        
        const searchInput = document.querySelector('.search-input');
        if (searchInput) searchInput.placeholder = t.nav.search;

        // Update hero section
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.textContent = t.hero.title;
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) heroDescription.textContent = t.hero.description;
        
        const ratingText = document.querySelector('.rating-text');
        if (ratingText) ratingText.textContent = t.hero.rating;
        
        const startBtn = document.querySelector('.btn-start');
        if (startBtn) startBtn.textContent = t.hero.startButton;

        // Update feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards[0]) {
            featureCards[0].querySelector('.feature-title').textContent = t.features.finance.title;
            featureCards[0].querySelector('.feature-description').textContent = t.features.finance.description;
        }
        if (featureCards[1]) {
            featureCards[1].querySelector('.feature-title').textContent = t.features.goal.title;
            featureCards[1].querySelector('.feature-description').textContent = t.features.goal.description;
        }
        if (featureCards[2]) {
            featureCards[2].querySelector('.feature-title').textContent = t.features.success.title;
            featureCards[2].querySelector('.feature-description').textContent = t.features.success.description;
        }

        // Update page title
        document.title = `BwnX - ${t.hero.subtitle}`;
        
        // Handle RTL languages (Arabic)
        if (lang === 'ar') {
            document.body.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.body.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = new LanguageSwitcher();
    languageSwitcher.init();
});