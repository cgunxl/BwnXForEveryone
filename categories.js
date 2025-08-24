// Categories Module
class CategoriesManager {
    constructor() {
        this.categories = this.getCategoriesData();
        this.currentLang = localStorage.getItem('selectedLanguage') || 'th';
        this.init();
    }
    
    getCategoriesData() {
        return {
            apps: {
                icon: '📱',
                title: {
                    th: 'Apps & Website',
                    en: 'Apps & Website'
                },
                subcategories: [
                    {
                        icon: '✈️',
                        title: {
                            th: 'Smart Travel & Booking',
                            en: 'Smart Travel & Booking'
                        },
                        description: {
                            th: 'ท่องเที่ยว & การจองตั๋ว',
                            en: 'Travel & Ticket Booking'
                        }
                    },
                    {
                        icon: '💼',
                        title: {
                            th: 'Career & Freelance Hub',
                            en: 'Career & Freelance Hub'
                        },
                        description: {
                            th: 'แพลตฟอร์มหางาน & ฟรีแลนซ์',
                            en: 'Job & Freelance Platform'
                        }
                    },
                    {
                        icon: '🤖',
                        title: {
                            th: 'AI Tools & Finance Apps',
                            en: 'AI Tools & Finance Apps'
                        },
                        description: {
                            th: 'AI + แอปการเงิน',
                            en: 'AI + Finance Apps'
                        }
                    },
                    {
                        icon: '📱',
                        title: {
                            th: 'Social & Lifestyle Connect',
                            en: 'Social & Lifestyle Connect'
                        },
                        description: {
                            th: 'หาเพื่อน & หาคู่ & โซเชียล',
                            en: 'Friends & Dating & Social'
                        }
                    },
                    {
                        icon: '🛒',
                        title: {
                            th: 'E-commerce & Shopping Apps',
                            en: 'E-commerce & Shopping Apps'
                        },
                        description: {
                            th: 'แอปสั่งของออนไลน์',
                            en: 'Online Shopping Apps'
                        }
                    },
                    {
                        icon: '🔒',
                        title: {
                            th: 'Safe Web & VPN Solutions',
                            en: 'Safe Web & VPN Solutions'
                        },
                        description: {
                            th: 'VPN & อินเทอร์เน็ตปลอดภัย',
                            en: 'VPN & Safe Internet'
                        }
                    },
                    {
                        icon: '💵',
                        title: {
                            th: 'Affiliate & Money-Making Apps',
                            en: 'Affiliate & Money-Making Apps'
                        },
                        description: {
                            th: 'แอปหาเงิน & แอฟฟิลิเอต',
                            en: 'Money Making & Affiliate Apps'
                        }
                    }
                ]
            },
            channel: {
                icon: '🎥',
                title: {
                    th: 'Channel',
                    en: 'Channel'
                },
                subcategories: [
                    {
                        icon: '📊',
                        title: {
                            th: 'Investment & Trading Channels',
                            en: 'Investment & Trading Channels'
                        },
                        description: {
                            th: 'ช่องการลงทุน & เทรด',
                            en: 'Investment & Trading Channels'
                        }
                    },
                    {
                        icon: '📚',
                        title: {
                            th: 'Knowledge & Deep-Dive Learning',
                            en: 'Knowledge & Deep-Dive Learning'
                        },
                        description: {
                            th: 'ช่องหาความรู้ & เจาะลึกบุคคล',
                            en: 'Knowledge & Deep Learning'
                        }
                    },
                    {
                        icon: '🎙️',
                        title: {
                            th: 'Podcasts & Expert Talks',
                            en: 'Podcasts & Expert Talks'
                        },
                        description: {
                            th: 'พอดแคสต์ & บทสัมภาษณ์',
                            en: 'Podcasts & Interviews'
                        }
                    },
                    {
                        icon: '🎬',
                        title: {
                            th: 'Entertainment & Lifestyle Media',
                            en: 'Entertainment & Lifestyle Media'
                        },
                        description: {
                            th: 'ความบันเทิง & สุขภาพ',
                            en: 'Entertainment & Health'
                        }
                    },
                    {
                        icon: '🛍️',
                        title: {
                            th: 'E-commerce & Product Review',
                            en: 'E-commerce & Product Review'
                        },
                        description: {
                            th: 'รีวิวสินค้า & ร้านค้าออนไลน์',
                            en: 'Product Reviews & Online Stores'
                        }
                    },
                    {
                        icon: '🎮',
                        title: {
                            th: 'Gaming Deals & Tutorials',
                            en: 'Gaming Deals & Tutorials'
                        },
                        description: {
                            th: 'ดีลเกม & สอนเกม',
                            en: 'Game Deals & Tutorials'
                        }
                    },
                    {
                        icon: '🔗',
                        title: {
                            th: 'Affiliate & Passive Income Channels',
                            en: 'Affiliate & Passive Income Channels'
                        },
                        description: {
                            th: 'ช่องสอนหาเงินออนไลน์ & Affiliate',
                            en: 'Online Income & Affiliate Channels'
                        }
                    }
                ]
            },
            fanpage: {
                icon: '📘',
                title: {
                    th: 'Fanpage',
                    en: 'Fanpage'
                },
                subcategories: [
                    {
                        icon: '🎮',
                        title: {
                            th: 'Best Game Top-up Deals',
                            en: 'Best Game Top-up Deals'
                        },
                        description: {
                            th: 'เพจเติมเกมราคาถูก & คุ้มค่า',
                            en: 'Cheap & Value Game Top-up'
                        }
                    },
                    {
                        icon: '💎',
                        title: {
                            th: 'Robux & Game Currency Guides',
                            en: 'Robux & Game Currency Guides'
                        },
                        description: {
                            th: 'แหล่งโรบัค + สอนวิธีซื้อ/ฝากซื้อ',
                            en: 'Robux Source + Buying Guides'
                        }
                    },
                    {
                        icon: '🛍️',
                        title: {
                            th: 'Product Recommendation Pages',
                            en: 'Product Recommendation Pages'
                        },
                        description: {
                            th: 'เพจแนะนำสินค้า & ดีล',
                            en: 'Product Recommendations & Deals'
                        }
                    },
                    {
                        icon: '💵',
                        title: {
                            th: 'Affiliate & Earning Fanpages',
                            en: 'Affiliate & Earning Fanpages'
                        },
                        description: {
                            th: 'เพจหาเงินจาก Affiliate & ออนไลน์',
                            en: 'Affiliate & Online Earning Pages'
                        }
                    }
                ]
            },
            product: {
                icon: '🛍️',
                title: {
                    th: 'Product',
                    en: 'Product'
                },
                subcategories: [
                    {
                        icon: '💄',
                        title: {
                            th: 'Influencer Picks & Beauty',
                            en: 'Influencer Picks & Beauty'
                        },
                        description: {
                            th: 'สินค้าคนดัง & ครีมบำรุง',
                            en: 'Celebrity Products & Skincare'
                        }
                    },
                    {
                        icon: '🍀',
                        title: {
                            th: 'Health & Wellness Products',
                            en: 'Health & Wellness Products'
                        },
                        description: {
                            th: 'สุขภาพ & อาหารเสริม',
                            en: 'Health & Supplements'
                        }
                    },
                    {
                        icon: '⚡',
                        title: {
                            th: 'Smart Living & Gadgets',
                            en: 'Smart Living & Gadgets'
                        },
                        description: {
                            th: 'ของใช้ทั่วไป & เครื่องอำนวยความสะดวก',
                            en: 'Daily Items & Convenience Gadgets'
                        }
                    },
                    {
                        icon: '👕',
                        title: {
                            th: 'Fashion & Outfit Ideas',
                            en: 'Fashion & Outfit Ideas'
                        },
                        description: {
                            th: 'เสื้อผ้า & Outfit',
                            en: 'Clothing & Outfits'
                        }
                    },
                    {
                        icon: '💍',
                        title: {
                            th: 'Jewelry & Luxury Items',
                            en: 'Jewelry & Luxury Items'
                        },
                        description: {
                            th: 'สร้อยคอ & เครื่องประดับ',
                            en: 'Necklaces & Jewelry'
                        }
                    },
                    {
                        icon: '🎁',
                        title: {
                            th: 'Lucky Draw & Deals',
                            en: 'Lucky Draw & Deals'
                        },
                        description: {
                            th: 'สินค้าเสี่ยงโชค & ดีลพิเศษ',
                            en: 'Lucky Draw & Special Deals'
                        }
                    },
                    {
                        icon: '🛒',
                        title: {
                            th: 'Affiliate Products Marketplace',
                            en: 'Affiliate Products Marketplace'
                        },
                        description: {
                            th: 'สินค้า Affiliate จาก Shopee, Amazon, Lazada',
                            en: 'Affiliate Products from Shopee, Amazon, Lazada'
                        }
                    }
                ]
            },
            news: {
                icon: '📰',
                title: {
                    th: 'News',
                    en: 'News'
                },
                subcategories: [
                    {
                        icon: '🌍',
                        title: {
                            th: 'World & Global News',
                            en: 'World & Global News'
                        },
                        description: {
                            th: 'ข่าวโลก & ข่าวต่างประเทศ',
                            en: 'World & International News'
                        }
                    },
                    {
                        icon: '🏞️',
                        title: {
                            th: 'Thai & Local News',
                            en: 'Thai & Local News'
                        },
                        description: {
                            th: 'ข่าวไทย',
                            en: 'Thai News'
                        }
                    },
                    {
                        icon: '💹',
                        title: {
                            th: 'Finance & Market Insights',
                            en: 'Finance & Market Insights'
                        },
                        description: {
                            th: 'ข่าวการเงิน & เศรษฐกิจ',
                            en: 'Finance & Economic News'
                        }
                    },
                    {
                        icon: '⚽',
                        title: {
                            th: 'Sports & Football Updates',
                            en: 'Sports & Football Updates'
                        },
                        description: {
                            th: 'ข่าวกีฬา & ฟุตบอล',
                            en: 'Sports & Football News'
                        }
                    },
                    {
                        icon: '🩺',
                        title: {
                            th: 'Health & Wellness News',
                            en: 'Health & Wellness News'
                        },
                        description: {
                            th: 'ข่าวสุขภาพ & โรค',
                            en: 'Health & Disease News'
                        }
                    },
                    {
                        icon: '₿',
                        title: {
                            th: 'Crypto & Tech News',
                            en: 'Crypto & Tech News'
                        },
                        description: {
                            th: 'ข่าวคริปโต & เทคโนโลยี',
                            en: 'Crypto & Technology News'
                        }
                    }
                ]
            },
            advice: {
                icon: '💡',
                title: {
                    th: 'Advice',
                    en: 'Advice'
                },
                subcategories: [
                    {
                        icon: '💰',
                        title: {
                            th: 'Money & Tax Insights',
                            en: 'Money & Tax Insights'
                        },
                        description: {
                            th: 'การจัดการการเงิน & ภาษี',
                            en: 'Financial Management & Tax'
                        }
                    },
                    {
                        icon: '🏡',
                        title: {
                            th: 'Smart Living & Home Design',
                            en: 'Smart Living & Home Design'
                        },
                        description: {
                            th: 'การแต่งบ้าน & ห้อง',
                            en: 'Home & Room Decoration'
                        }
                    },
                    {
                        icon: '🚗',
                        title: {
                            th: 'Auto & Lifestyle Tips',
                            en: 'Auto & Lifestyle Tips'
                        },
                        description: {
                            th: 'แต่งรถ & ไลฟ์สไตล์',
                            en: 'Car Customization & Lifestyle'
                        }
                    },
                    {
                        icon: '📈',
                        title: {
                            th: 'Career Growth & Skill Building',
                            en: 'Career Growth & Skill Building'
                        },
                        description: {
                            th: 'คำแนะนำพัฒนาทักษะ & งาน',
                            en: 'Skill Development & Career Advice'
                        }
                    },
                    {
                        icon: '🔗',
                        title: {
                            th: 'Affiliate & Online Business Tips',
                            en: 'Affiliate & Online Business Tips'
                        },
                        description: {
                            th: 'คำแนะนำทำ Affiliate & ออนไลน์',
                            en: 'Affiliate & Online Business Advice'
                        }
                    }
                ]
            },
            location: {
                icon: '📍',
                title: {
                    th: 'Location',
                    en: 'Location'
                },
                subcategories: [
                    {
                        icon: '☕',
                        title: {
                            th: 'Cafes & Hot Spots',
                            en: 'Cafes & Hot Spots'
                        },
                        description: {
                            th: 'คาเฟ่ & สถานที่น่าไป',
                            en: 'Cafes & Must-Visit Places'
                        }
                    },
                    {
                        icon: '🛒',
                        title: {
                            th: 'Local Goods & OTOP Guide',
                            en: 'Local Goods & OTOP Guide'
                        },
                        description: {
                            th: 'สินค้า OTOP & ของดีจังหวัด',
                            en: 'OTOP Products & Local Specialties'
                        }
                    },
                    {
                        icon: '🏞️',
                        title: {
                            th: 'Travel Destinations & Hidden Gems',
                            en: 'Travel Destinations & Hidden Gems'
                        },
                        description: {
                            th: 'สถานที่ท่องเที่ยว & จุดลับ',
                            en: 'Tourist Spots & Hidden Places'
                        }
                    }
                ]
            },
            money: {
                icon: '💸',
                title: {
                    th: 'How to Make Money',
                    en: 'How to Make Money'
                },
                subcategories: [
                    {
                        icon: '🛍️',
                        title: {
                            th: 'Online Business & E-commerce',
                            en: 'Online Business & E-commerce'
                        },
                        description: {
                            th: 'ช่องทางธุรกิจออนไลน์ & E-commerce',
                            en: 'Online Business & E-commerce Channels'
                        }
                    },
                    {
                        icon: '🔗',
                        title: {
                            th: 'Affiliate Marketing & Partnerships',
                            en: 'Affiliate Marketing & Partnerships'
                        },
                        description: {
                            th: 'การทำ Affiliate & พาร์ทเนอร์',
                            en: 'Affiliate Marketing & Partnerships'
                        }
                    },
                    {
                        icon: '₿',
                        title: {
                            th: 'Crypto, Stock & Trading Income',
                            en: 'Crypto, Stock & Trading Income'
                        },
                        description: {
                            th: 'หุ้น, คริปโต & การเทรด',
                            en: 'Stocks, Crypto & Trading'
                        }
                    },
                    {
                        icon: '💼',
                        title: {
                            th: 'Side Hustles & Freelance Work',
                            en: 'Side Hustles & Freelance Work'
                        },
                        description: {
                            th: 'งานเสริม & ฟรีแลนซ์',
                            en: 'Side Jobs & Freelancing'
                        }
                    },
                    {
                        icon: '🌱',
                        title: {
                            th: 'Passive Income & Automation',
                            en: 'Passive Income & Automation'
                        },
                        description: {
                            th: 'รายได้เสริม & การทำเงินอัตโนมัติ',
                            en: 'Passive Income & Automated Earnings'
                        }
                    },
                    {
                        icon: '🎥',
                        title: {
                            th: 'Content Creation & Monetization',
                            en: 'Content Creation & Monetization'
                        },
                        description: {
                            th: 'ทำคอนเทนต์ & สร้างรายได้',
                            en: 'Content Creation & Revenue Generation'
                        }
                    }
                ]
            },
            entertainment: {
                icon: '📺',
                title: {
                    th: 'Movies, Anime & Books',
                    en: 'Movies, Anime & Books'
                },
                subcategories: [
                    {
                        icon: '🎬',
                        title: {
                            th: 'Movies & Streaming Platforms',
                            en: 'Movies & Streaming Platforms'
                        },
                        description: {
                            th: 'รีวิวหนังใหม่, Netflix, Disney+',
                            en: 'New Movie Reviews, Netflix, Disney+'
                        }
                    },
                    {
                        icon: '🎌',
                        title: {
                            th: 'Anime & Manga Hub',
                            en: 'Anime & Manga Hub'
                        },
                        description: {
                            th: 'รีวิวอนิเมะ, อนิเมะมาใหม่, แนะนำมังงะ',
                            en: 'Anime Reviews, New Anime, Manga Recommendations'
                        }
                    },
                    {
                        icon: '📺',
                        title: {
                            th: 'Cartoon & Kids Media',
                            en: 'Cartoon & Kids Media'
                        },
                        description: {
                            th: 'การ์ตูนเด็ก, ช่องการ์ตูน',
                            en: 'Kids Cartoons, Cartoon Channels'
                        }
                    },
                    {
                        icon: '📖',
                        title: {
                            th: 'Novel & Fiction Reviews',
                            en: 'Novel & Fiction Reviews'
                        },
                        description: {
                            th: 'รีวิวนิยาย, ฟิคชั่น, วรรณกรรม',
                            en: 'Novel Reviews, Fiction, Literature'
                        }
                    },
                    {
                        icon: '🌌',
                        title: {
                            th: 'Light Novels & Web Novels',
                            en: 'Light Novels & Web Novels'
                        },
                        description: {
                            th: 'นิยายออนไลน์, นิยายจีน/เกาหลี/ญี่ปุ่น',
                            en: 'Online Novels, Chinese/Korean/Japanese Novels'
                        }
                    },
                    {
                        icon: '💥',
                        title: {
                            th: 'Comics & Graphic Novels',
                            en: 'Comics & Graphic Novels'
                        },
                        description: {
                            th: 'การ์ตูนตะวันตก, Marvel, DC, Webtoon',
                            en: 'Western Comics, Marvel, DC, Webtoon'
                        }
                    },
                    {
                        icon: '📚',
                        title: {
                            th: 'Bookstore & eBook Guides',
                            en: 'Bookstore & eBook Guides'
                        },
                        description: {
                            th: 'วิธีโหลด eBook, รีวิว Kindle',
                            en: 'How to Download eBooks, Kindle Reviews'
                        }
                    }
                ]
            },
            education: {
                icon: '📖',
                title: {
                    th: 'Education & Online Learning',
                    en: 'Education & Online Learning'
                },
                subcategories: []
            },
            food: {
                icon: '🍲',
                title: {
                    th: 'Food & Cooking',
                    en: 'Food & Cooking'
                },
                subcategories: []
            },
            realestate: {
                icon: '🏠',
                title: {
                    th: 'Real Estate & Property',
                    en: 'Real Estate & Property'
                },
                subcategories: []
            },
            jobsabroad: {
                icon: '🌏',
                title: {
                    th: 'Jobs & Study Abroad',
                    en: 'Jobs & Study Abroad'
                },
                subcategories: []
            },
            events: {
                icon: '🎶',
                title: {
                    th: 'Concerts, Music & Events',
                    en: 'Concerts, Music & Events'
                },
                subcategories: [
                    {
                        icon: '🎤',
                        title: {
                            th: 'Concerts & Music Festivals',
                            en: 'Concerts & Music Festivals'
                        },
                        description: {
                            th: 'คอนเสิร์ต, งานดนตรี, Music Festival',
                            en: 'Concerts, Music Events, Music Festivals'
                        }
                    },
                    {
                        icon: '🎸',
                        title: {
                            th: 'Artist & Band Updates',
                            en: 'Artist & Band Updates'
                        },
                        description: {
                            th: 'ข่าวศิลปิน, วงดนตรี, อัพเดทงานแสดง',
                            en: 'Artist News, Bands, Performance Updates'
                        }
                    },
                    {
                        icon: '🎭',
                        title: {
                            th: 'Cultural & Lifestyle Events',
                            en: 'Cultural & Lifestyle Events'
                        },
                        description: {
                            th: 'งานอีเว้นท์วัฒนธรรม, ไลฟ์สไตล์',
                            en: 'Cultural Events, Lifestyle Events'
                        }
                    }
                ]
            },
            finance: {
                icon: '💹',
                title: {
                    th: 'Finance & Business Events',
                    en: 'Finance & Business Events'
                },
                subcategories: [
                    {
                        icon: '📊',
                        title: {
                            th: 'Investment & Trading Seminars',
                            en: 'Investment & Trading Seminars'
                        },
                        description: {
                            th: 'สัมมนาการลงทุน, เทรดหุ้น/คริปโต',
                            en: 'Investment Seminars, Stock/Crypto Trading'
                        }
                    },
                    {
                        icon: '🚀',
                        title: {
                            th: 'Business & Startup Events',
                            en: 'Business & Startup Events'
                        },
                        description: {
                            th: 'งานอีเว้นท์ธุรกิจ, สตาร์ทอัพ',
                            en: 'Business Events, Startups'
                        }
                    },
                    {
                        icon: '💰',
                        title: {
                            th: 'Finance Expo & Money Fairs',
                            en: 'Finance Expo & Money Fairs'
                        },
                        description: {
                            th: 'มหกรรมการเงิน, งานสินเชื่อ/ประกัน',
                            en: 'Finance Expo, Loan/Insurance Fairs'
                        }
                    }
                ]
            },
            legal: {
                icon: '⚖️',
                title: {
                    th: 'กฎหมาย',
                    en: 'Law & Legal'
                },
                subcategories: []
            },
            insurance: {
                icon: '🛡️',
                title: {
                    th: 'ประกัน',
                    en: 'Insurance'
                },
                subcategories: []
            },
            medical: {
                icon: '🏥',
                title: {
                    th: 'การแพทย์เฉพาะทาง',
                    en: 'Specialized Medical'
                },
                subcategories: []
            }
        };
    }
    
    init() {
        this.renderMainCategories();
        this.renderSidebarCategories();
        this.setupCategoryEvents();
    }
    
    renderMainCategories() {
        const mainCategoriesContainer = document.getElementById('mainCategories');
        if (!mainCategoriesContainer) return;
        
        const mainCategories = ['apps', 'channel', 'fanpage', 'product', 'news', 'advice', 'money', 'entertainment'];
        
        mainCategoriesContainer.innerHTML = '';
        
        mainCategories.forEach(key => {
            const category = this.categories[key];
            if (!category) return;
            
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.category = key;
            
            const subcategoriesCount = category.subcategories ? category.subcategories.length : 0;
            
            card.innerHTML = `
                <div class="category-card-icon">${category.icon}</div>
                <h3 class="category-card-title">${category.title[this.currentLang] || category.title.th}</h3>
                <p class="category-card-description">
                    ${subcategoriesCount > 0 ? `${subcategoriesCount} หมวดหมู่ย่อย` : 'เร็วๆ นี้'}
                </p>
                <div class="category-card-count">คลิกเพื่อดูเพิ่มเติม</div>
            `;
            
            card.addEventListener('click', () => {
                this.openCategory(key);
            });
            
            mainCategoriesContainer.appendChild(card);
        });
    }
    
    renderSidebarCategories() {
        const categoriesMenu = document.getElementById('categoriesMenu');
        if (!categoriesMenu) return;
        
        categoriesMenu.innerHTML = '';
        
        Object.entries(this.categories).forEach(([key, category]) => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            categoryItem.dataset.category = key;
            
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <div class="category-info">
                    <span class="category-icon">${category.icon}</span>
                    <span class="category-name">${category.title[this.currentLang] || category.title.th}</span>
                </div>
                ${category.subcategories && category.subcategories.length > 0 ? '<i class="fas fa-chevron-down category-toggle"></i>' : ''}
            `;
            
            const subcategoriesContainer = document.createElement('div');
            subcategoriesContainer.className = 'subcategories';
            
            if (category.subcategories && category.subcategories.length > 0) {
                category.subcategories.forEach(sub => {
                    const subItem = document.createElement('div');
                    subItem.className = 'subcategory-item';
                    subItem.innerHTML = `
                        <span>${sub.icon} ${sub.title[this.currentLang] || sub.title.th}</span>
                    `;
                    subItem.addEventListener('click', () => {
                        this.openSubcategory(key, sub);
                    });
                    subcategoriesContainer.appendChild(subItem);
                });
            }
            
            categoryItem.appendChild(categoryHeader);
            categoryItem.appendChild(subcategoriesContainer);
            categoriesMenu.appendChild(categoryItem);
            
            // Toggle subcategories
            categoryHeader.addEventListener('click', () => {
                const isActive = categoryHeader.classList.contains('active');
                
                // Close all other categories
                document.querySelectorAll('.category-header').forEach(h => {
                    h.classList.remove('active');
                    h.nextElementSibling.classList.remove('active');
                });
                
                if (!isActive && category.subcategories && category.subcategories.length > 0) {
                    categoryHeader.classList.add('active');
                    subcategoriesContainer.classList.add('active');
                }
            });
        });
    }
    
    setupCategoryEvents() {
        // Add smooth scroll animations for category cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.category-card').forEach(card => {
            observer.observe(card);
        });
    }
    
    openCategory(categoryKey) {
        const category = this.categories[categoryKey];
        if (!category) return;
        
        // Track event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'category_click', {
                category_name: categoryKey,
                category_title: category.title[this.currentLang] || category.title.th
            });
        }
        
        // Navigate to category page
        window.location.href = `/${this.currentLang}/category/${categoryKey}`;
    }
    
    openSubcategory(categoryKey, subcategory) {
        // Track event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'subcategory_click', {
                category_name: categoryKey,
                subcategory_title: subcategory.title[this.currentLang] || subcategory.title.th
            });
        }
        
        // Navigate to subcategory page
        const subcategorySlug = subcategory.title.en.toLowerCase().replace(/\s+/g, '-');
        window.location.href = `/${this.currentLang}/category/${categoryKey}/${subcategorySlug}`;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CategoriesManager();
});