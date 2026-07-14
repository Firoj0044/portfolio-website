// ================================
// Premium Effects - premium.js
// ================================

// ===== Particles.js Config =====
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#6c63ff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.3,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1 }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1 }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c63ff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

if (cursor && cursorDot) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Cursor hover effect
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursor.style.borderColor = '#f50057';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = 'rgba(108, 99, 255, 0.8)';
        });
    });
}

// ===== Scroll Progress Bar =====
const progressBar = document.getElementById('scroll-progress');

if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
        start += step;
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Counter observer
const statCards = document.querySelectorAll('.stat-card h3');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const text = entry.target.textContent;
            const num = parseInt(text.replace(/\D/g, ''));
            const suffix = text.replace(/[0-9]/g, '');

            if (num) {
                entry.target.dataset.suffix = suffix;
                animateCounter(entry.target, num);
            }
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => counterObserver.observe(card));

// ===== Project Card Numbers =====
document.querySelectorAll('.project-card').forEach((card, index) => {
    const num = document.createElement('div');
    num.className = 'project-number';
    num.textContent = String(index + 1).padStart(2, '0');
    card.appendChild(num);
    card.style.position = 'relative';
});

// ===== Glass Card Effect =====
document.querySelectorAll('.project-card, .skill-card, .service-card').forEach(card => {
    card.classList.add('glass-card');
});

// ===== Tilt Effect on Cards =====
document.querySelectorAll('.project-card, .stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        card.style.transition = 'transform 0.4s ease';
    });
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c🚀 Portfolio by MD Firoj Khan', 'color: #6c63ff; font-size: 16px; font-weight: bold;');
console.log('%chttps://github.com/Firoj0044', 'color: #a0a0b0; font-size: 12px;');
