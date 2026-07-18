document.addEventListener('DOMContentLoaded', () => {
    // ── Navbar scroll ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── Hamburger menu ──
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    // Close menu on link click
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // ── Active nav link highlight based on scroll ──
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a:not(.btn)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));

    // ── Floating WhatsApp Popup toggle ──
    const waBtn = document.getElementById('floating-wa-btn');
    const waMenu = document.getElementById('wa-popup-menu');
    
    waBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        waMenu?.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!waMenu?.contains(e.target)) {
            waMenu?.classList.remove('active');
        }
    });
});
