/**
 * Archivo Principal de JavaScript - Gabriela Arellano Portafolio
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==============================================
       1. Inicialización de AOS (Animaciones en scroll)
       ============================================== */
    AOS.init({
        once: true,            // La animación ocurre solo una vez
        offset: 100,           // Offset desde el fondo para activar
        duration: 800,         // Duración de la animación
        easing: 'ease-out-cubic'
    });

    /* ==============================================
       2. Inicialización de Typed.js (Texto dinámico Hero)
       ============================================== */
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: [
                'Content Manager.',
                'Redactora Creativa.',
                'Comunicadora Social.'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    /* ==============================================
       3. Menú Móvil (Hamburguesa)
       ============================================== */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            mobileToggle.style.color = '#fff'; // Contraste en menú oscuro
            mobileToggle.style.zIndex = '1001';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            mobileToggle.style.color = 'var(--text-main)';
        }
    });

    // Cerrar menú al hacer clic en un enlace (Móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileToggle.style.color = 'var(--text-main)';
            }
        });
    });

    /* ==============================================
       4. Sticky Header y Enlaces Activos en Scroll
       ============================================== */
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;

        // Sticky Header / Shadow
        if (currentScroll > 50) {
            header.classList.add('scrolled');
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            header.classList.remove('scrolled');
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }

        // Active Links ScrollSpy
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    /* ==============================================
       5. Scroll Volver Arriba Suave
       ============================================== */
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
