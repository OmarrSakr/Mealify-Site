
"use strict";

document.addEventListener('DOMContentLoaded', function () {
    console.log('Mealify JavaScript loaded!');

    // ==================== Mobile Menu - إصلاح شامل ====================
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.navbar-list-close');
    const navbar = document.querySelector('.navbar');
    let isMenuOpen = false;

    // دالة فتح/إغلاق القائمة
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // فتح القائمة
            menu.style.right = '0';
            menu.style.display = 'flex';
            menu.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            
            // إضافة overlay
            createOverlay();
        } else {
            // إغلاق القائمة
            menu.style.right = '-100%';
            menu.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            
            // إزالة overlay
            removeOverlay();
            
            // إخفاء القائمة بعد الانيميشن
            setTimeout(() => {
                if (!isMenuOpen) {
                    menu.style.display = 'none';
                }
            }, 300);
        }
    }

    // إنشاء overlay
    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9998;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(overlay);
        
        // تفعيل الانيميشن
        setTimeout(() => overlay.style.opacity = '1', 10);
        
        // إغلاق عند النقر على overlay
        overlay.addEventListener('click', toggleMenu);
    }

    // إزالة overlay
    function removeOverlay() {
        const overlay = document.querySelector('.menu-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    }

    // تفعيل أيقونة القائمة
    if (menuIcon) {
        menuIcon.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }

    // تفعيل أيقونة الإغلاق
    if (closeIcon) {
        closeIcon.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }

    // إغلاق القائمة عند النقر على الروابط
    const navLinks = document.querySelectorAll('.navbar .list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // إغلاق بمفتاح Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });

    // ==================== Dark Mode ====================
    const modeToggle = document.getElementById('mode');
    if (modeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            modeToggle.checked = true;
        }

        modeToggle.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ==================== Active Navigation State ====================
    const sections = document.querySelectorAll('[id]');
    const navItems = document.querySelectorAll('.navbar .list a[href^="#"]');

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px 0px 0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${currentId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // ==================== Smooth Scrolling ====================
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetOffset = targetSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== Gallery Lightbox ====================
    const galleryItems = document.querySelectorAll('.gallery .gallery-body > div');
    let currentIndex = 0;

    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'simple-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay"></div>
            <div class="lightbox-container">
                <div class="preloader"></div>
                <img class="lightbox-img" src="" alt="">
                <div class="lightbox-content">
                    <h3 class="lightbox-title"></h3>
                    <p class="lightbox-desc"></p>
                </div>
            </div>
        `;

        document.body.appendChild(lightbox);

        // Close handler - النقر في أي حتة يغلق الصورة
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = '';
            }, 400);
        };

        // إغلاق عند النقر في أي مكان في الـ lightbox
        lightbox.addEventListener('click', closeLightbox);

        return lightbox;
    }

    function updateLightbox() {
        const lightbox = document.querySelector('.simple-lightbox');
        const item = galleryItems[currentIndex];
        const img = item.querySelector('img');
        const layer = item.querySelector('.layer');

        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxTitle = lightbox.querySelector('.lightbox-title');
        const lightboxDesc = lightbox.querySelector('.lightbox-desc');

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = layer.querySelector('h2').textContent;
        lightboxDesc.textContent = layer.querySelector('p').textContent;
    }

    function openLightbox(index) {
        currentIndex = index;
        let lightbox = document.querySelector('.simple-lightbox');
        if (!lightbox) {
            lightbox = createLightbox();
        }

        updateLightbox();
        lightbox.style.display = 'flex';
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }

    // Add click handlers to gallery items
    galleryItems.forEach((item, index) => {
        const link = item.querySelector('.layer');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function (e) {
        if (document.querySelector('.simple-lightbox.active')) {
            if (e.key === 'Escape') {
                const lightbox = document.querySelector('.simple-lightbox');
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = '';
                }, 400);
            } else if (e.key === 'ArrowRight' && currentIndex < galleryItems.length - 1) {
                currentIndex++;
                updateLightbox();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                updateLightbox();
            }
        }
    });

    // ==================== Back to Top Button ====================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #e71414;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(231, 20, 20, 0.3);
    `;
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide back to top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // ==================== Contact Form ====================
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const subject = this.querySelector('#subject').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !subject || !message) {
                showMessage('يرجى ملء جميع الحقول', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('يرجى إدخال بريد إلكتروني صحيح', 'error');
                return;
            }

            showMessage('تم إرسال الرسالة بنجاح!', 'success');
            this.reset();
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ==================== Toast Messages ====================
    function showMessage(text, type = 'info') {
        const existing = document.querySelector('.toast-message');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast-message toast-${type}`;
        toast.textContent = text;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10001;
            transform: translateX(400px);
            transition: all 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            ${type === 'success' ? 'background: #28a745;' : 
              type === 'error' ? 'background: #dc3545;' : 'background: #17a2b8;'}
        `;

        document.body.appendChild(toast);

        setTimeout(() => toast.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);

        toast.addEventListener('click', function () {
            this.style.transform = 'translateX(400px)';
            setTimeout(() => this.remove(), 300);
        });
    }

    // ==================== Navbar Scroll Effect ====================
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    console.log('جميع الميزات تم تحميلها بنجاح!');
});