/**
 * VIT SMART CAMPUS – MASTER CLIENT SCRIPT (main.js)
 * Global navigation, sticky headers, toast notifications & shared utilities
 * Author: Shaik Zabiullah (23MIC0007), VIT Vellore
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  highlightActiveNav();
  initCartBadge();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger-btn');
  const nav = document.querySelector('.primary-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const isOpen = nav.classList.contains('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* Sticky Header Scroll Effect */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

/* Active Link Highlighting */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const cleanHref = href.split('/').pop().toLowerCase();
      const cleanCurrent = currentPath.split('/').pop().toLowerCase();
      
      if (cleanHref && (cleanCurrent === cleanHref || (cleanCurrent === '' && cleanHref === 'index.html'))) {
        link.classList.add('active');
        // If it's a dropdown link, also highlight parent
        const parentDropdown = link.closest('.nav-item-dropdown');
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector('.nav-link');
          if (parentToggle) parentToggle.classList.add('active');
        }
      }
    }
  });
}

/* Cart Badge Sync from LocalStorage */
function initCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  try {
    const cart = JSON.parse(localStorage.getItem('vit_cart') || '[]');
    const totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    badges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'flex' : 'none';
    });
  } catch (e) {
    badges.forEach(b => b.textContent = '0');
  }
}

/* Global Toast Notification Engine */
function showToast(message, type = 'info', duration = 3500) {
  let toastContainer = document.getElementById('vit-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'vit-toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#0284c7'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  toast.style.cssText = `
    background: #0f172a;
    color: #ffffff;
    border-left: 4px solid ${bgColors[type] || bgColors.info};
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 13.5px;
    font-family: var(--font-sans, sans-serif);
    font-weight: 500;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 12px;
    pointer-events: auto;
    animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  toast.innerHTML = `
    <span style="color: ${bgColors[type] || bgColors.info}; font-weight: bold; font-size: 16px;">${icons[type] || 'ℹ'}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Global expose
window.showToast = showToast;
window.updateCartBadge = initCartBadge;

