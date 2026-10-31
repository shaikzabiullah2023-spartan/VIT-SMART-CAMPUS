/**
 * MAIN APP ENGINE
 * Handles navbar scroll, animated canvas background, typewriter, and stats counter.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initStickyNavbar();
  initCanvasBackground();
  initTypewriter();
  initStatCounters();
});

// 1. Scroll Progress Bar
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      bar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

// 2. Sticky Navbar Shrink
function initStickyNavbar() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 3. Canvas Aurora / Particles Background
function initCanvasBackground() {
  const canvas = document.getElementById('aurora-canvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  const orbs = [
    { x: 0.2, y: 0.3, radius: 260, color: 'rgba(99, 102, 241, 0.18)', vx: 0.0003, vy: 0.0004 },
    { x: 0.8, y: 0.2, radius: 300, color: 'rgba(6, 182, 212, 0.15)', vx: -0.0004, vy: 0.0003 },
    { x: 0.5, y: 0.7, radius: 340, color: 'rgba(16, 185, 129, 0.14)', vx: 0.0002, vy: -0.0003 },
    { x: 0.85, y: 0.8, radius: 240, color: 'rgba(236, 72, 153, 0.12)', vx: -0.0003, vy: -0.0002 }
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    orbs.forEach(orb => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
      if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

      const px = orb.x * width;
      const py = orb.y * height;

      const gradient = ctx.createRadialGradient(px, py, 10, px, py, orb.radius);
      gradient.addColorStop(0, orb.color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(px, py, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// 4. Typewriter Rotating Headline Text
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const words = ['HTML5 Architecture', 'CSS3 Modern Layouts', 'Dynamic Form Elements', 'Regex Validations', 'JavaScript DOM Events'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1600;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// 5. Animated Number Counters
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));

  function animateCounter(el, target) {
    let current = 0;
    const duration = 1200;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }
}

