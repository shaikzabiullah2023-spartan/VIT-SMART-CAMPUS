/**
 * COMMAND PALETTE (CTRL/CMD + K)
 * Instant search and quick-jump navigation across all assessments
 */

(function () {
  let overlayEl = null;
  let inputEl = null;
  let resultsEl = null;
  let selectedIndex = 0;
  let filteredItems = [];

  function createPalette() {
    if (document.getElementById('command-palette-overlay')) return;

    overlayEl = document.createElement('div');
    overlayEl.id = 'command-palette-overlay';
    overlayEl.className = 'palette-overlay';
    overlayEl.setAttribute('role', 'dialog');
    overlayEl.setAttribute('aria-modal', 'true');
    overlayEl.setAttribute('aria-label', 'Command Palette');

    overlayEl.innerHTML = `
      <div class="palette-dialog" onclick="event.stopPropagation()">
        <div class="palette-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--text-muted)"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="palette-input" placeholder="Jump to question (e.g. 13, form, traffic, regex)..." autocomplete="off" spellcheck="false" />
          <span class="kbd-shortcut">ESC</span>
        </div>
        <div class="palette-results" id="palette-results-list"></div>
        <div class="palette-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
          <span>Open with <kbd>↵ Enter</kbd></span>
        </div>
      </div>
    `;

    document.body.appendChild(overlayEl);

    inputEl = overlayEl.querySelector('.palette-input');
    resultsEl = overlayEl.querySelector('#palette-results-list');

    overlayEl.addEventListener('click', closePalette);

    inputEl.addEventListener('input', (e) => {
      renderResults(e.target.value.trim());
    });

    inputEl.addEventListener('keydown', handleKeyNavigation);
  }

  function renderResults(query) {
    if (!window.ASSESSMENTS) return;
    const q = query.toLowerCase();

    if (!q) {
      filteredItems = window.ASSESSMENTS.slice(0, 10);
    } else {
      filteredItems = window.ASSESSMENTS.filter(item => {
        const numStr = item.q.toString();
        const slug = item.slug.toLowerCase();
        const title = item.title.toLowerCase();
        const tags = item.tags.join(' ').toLowerCase();
        const unit = item.unit.toLowerCase();
        return numStr === q || slug.includes(q) || title.includes(q) || tags.includes(q) || unit.includes(q);
      }).slice(0, 15);
    }

    selectedIndex = 0;

    if (filteredItems.length === 0) {
      resultsEl.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          No assessments match "<span style="color:var(--text-primary);">${query}</span>"
        </div>
      `;
      return;
    }

    resultsEl.innerHTML = filteredItems.map((item, index) => {
      const isSelected = index === selectedIndex;
      return `
        <div class="palette-item ${isSelected ? 'selected' : ''}" data-index="${index}" data-q="${item.q}">
          <div class="palette-item-left">
            <span class="palette-item-badge" style="color: var(--unit-${item.unitId});">Q${item.q < 10 ? '0' + item.q : item.q}</span>
            <span class="palette-item-title">${item.title}</span>
          </div>
          <span class="chip chip-unit" style="color: var(--unit-${item.unitId});">${item.unit.split(':')[0]}</span>
        </div>
      `;
    }).join('');

    resultsEl.querySelectorAll('.palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const qNum = el.getAttribute('data-q');
        navigateToAssessment(qNum);
      });
      el.addEventListener('mouseenter', () => {
        selectedIndex = parseInt(el.getAttribute('data-index'), 10);
        updateSelection();
      });
    });
  }

  function updateSelection() {
    const items = resultsEl.querySelectorAll('.palette-item');
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function handleKeyNavigation(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        updateSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        updateSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        navigateToAssessment(filteredItems[selectedIndex].q);
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  }

  function navigateToAssessment(qNum) {
    closePalette();
    const isLocalSub = window.location.pathname.includes('/assessments/') || window.location.pathname.includes('/docs/');
    const prefix = isLocalSub ? '../../' : './';
    window.location.href = `${prefix}assessment.html?q=${qNum}`;
  }

  function openPalette() {
    createPalette();
    overlayEl.classList.add('open');
    inputEl.value = '';
    renderResults('');
    setTimeout(() => inputEl.focus(), 50);
  }

  function closePalette() {
    if (overlayEl) {
      overlayEl.classList.remove('open');
    }
  }

  window.openCommandPalette = openPalette;
  window.closeCommandPalette = closePalette;

  // Global hotkeys
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (overlayEl && overlayEl.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && overlayEl && overlayEl.classList.contains('open')) {
      closePalette();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.search-trigger').forEach(btn => {
      btn.addEventListener('click', openPalette);
    });
  });
})();

