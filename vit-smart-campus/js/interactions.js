/**
 * VIT SMART CAMPUS – JAVASCRIPT LAB INTERACTIONS (interactions.js)
 * Live implementations for all 10 interactive DOM practice questions
 * Author: Shaik Zabiullah (23MIC0007), VIT Vellore
 */

document.addEventListener('DOMContentLoaded', () => {
  initMouseoverButton();
  initColorChangingBox();
  initInteractiveProductCard();
  initTrafficSignal();
  initStudentSearchKeydown();
  initAtmPinGuard();
  initDynamicProductSearch();
  initCbtExamInterface();
});

/* --------------------------------------------------------------------------
   1. STUDENT MARKS CALCULATOR (Q28)
   -------------------------------------------------------------------------- */
function calculateMarks() {
  const m1 = parseFloat(document.getElementById('markSub1')?.value);
  const m2 = parseFloat(document.getElementById('markSub2')?.value);
  const m3 = parseFloat(document.getElementById('markSub3')?.value);
  const resBox = document.getElementById('marksResultBox');

  if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
    if (resBox) {
      resBox.className = 'alert alert-danger';
      resBox.textContent = 'Please enter valid numeric marks for all three subjects (0 - 100).';
      resBox.style.display = 'block';
    }
    return;
  }

  if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
    if (resBox) {
      resBox.className = 'alert alert-danger';
      resBox.textContent = 'Marks must be between 0 and 100.';
      resBox.style.display = 'block';
    }
    return;
  }

  const total = m1 + m2 + m3;
  const avg = (total / 3).toFixed(2);
  let grade = 'F (Fail)';
  let gradeBadge = 'badge-rose';

  if (avg >= 90) { grade = 'S (Outstanding)'; gradeBadge = 'badge-emerald'; }
  else if (avg >= 80) { grade = 'A (Excellent)'; gradeBadge = 'badge-cyan'; }
  else if (avg >= 70) { grade = 'B (Very Good)'; gradeBadge = 'badge-blue'; }
  else if (avg >= 60) { grade = 'C (Good)'; gradeBadge = 'badge-amber'; }
  else if (avg >= 50) { grade = 'D (Pass)'; gradeBadge = 'badge-amber'; }

  if (resBox) {
    resBox.className = 'alert alert-success';
    resBox.innerHTML = `
      <div>
        <strong>Total Marks:</strong> ${total} / 300 &nbsp;|&nbsp;
        <strong>Average:</strong> ${avg}% &nbsp;|&nbsp;
        <strong>Grade:</strong> <span class="badge ${gradeBadge}">${grade}</span>
      </div>
    `;
    resBox.style.display = 'block';
  }
}

/* --------------------------------------------------------------------------
   2. VIT EMAIL VALIDATION & CHECKBOXES (Q31)
   -------------------------------------------------------------------------- */
function validateVitWorkshopEmail() {
  const emailInput = document.getElementById('vitWorkshopEmail');
  const alertEl = document.getElementById('workshopEmailAlert');
  const checkedTopics = document.querySelectorAll('input[name="workshopTopics"]:checked');

  if (!emailInput || !alertEl) return;

  const email = emailInput.value.trim();
  const vitEmailPattern = /^[a-zA-Z0-9._%+-]+@vit\.ac\.in$/i;

  if (!email) {
    alertEl.className = 'alert alert-danger';
    alertEl.textContent = 'Please enter your official VIT email ID.';
    alertEl.style.display = 'block';
    return;
  }

  if (!vitEmailPattern.test(email)) {
    alertEl.className = 'alert alert-danger';
    alertEl.textContent = 'Invalid format! Must follow official domain username@vit.ac.in';
    alertEl.style.display = 'block';
    return;
  }

  if (checkedTopics.length === 0) {
    alertEl.className = 'alert alert-danger';
    alertEl.textContent = 'Please select at least one technical interest topic.';
    alertEl.style.display = 'block';
    return;
  }

  const topicsList = Array.from(checkedTopics).map(t => t.value).join(', ');
  alertEl.className = 'alert alert-success';
  alertEl.innerHTML = `✓ Registration Validated for <strong>${email}</strong>!<br>Enrolled Topics: ${topicsList}`;
  alertEl.style.display = 'block';
}

/* --------------------------------------------------------------------------
   3. BUTTON MOUSEOVER EVENT (Q33)
   -------------------------------------------------------------------------- */
function initMouseoverButton() {
  const btn = document.getElementById('hoverGreetingBtn');
  const display = document.getElementById('hoverGreetingDisplay');
  if (!btn || !display) return;

  const originalText = "Hover over this button to test mouseover";
  const hoverText = "Welcome to VIT!";

  btn.addEventListener('mouseover', () => {
    display.textContent = hoverText;
    display.style.color = 'var(--accent-blue)';
    display.style.fontWeight = '800';
  });

  btn.addEventListener('mouseout', () => {
    display.textContent = originalText;
    display.style.color = 'var(--text-muted)';
    display.style.fontWeight = '500';
  });
}

/* --------------------------------------------------------------------------
   4. COLOR-CHANGING BOX (Q34)
   -------------------------------------------------------------------------- */
function initColorChangingBox() {
  const box = document.getElementById('interactiveColorBox');
  const msgEl = document.getElementById('colorBoxMessage');
  if (!box || !msgEl) return;

  const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];
  let colorIdx = 0;

  box.addEventListener('click', () => {
    colorIdx = (colorIdx + 1) % colors.length;
    box.style.backgroundColor = colors[colorIdx];
    box.querySelector('.color-code').textContent = colors[colorIdx];
  });

  box.addEventListener('mouseover', () => {
    msgEl.textContent = "Mouse is over the box";
    msgEl.style.color = 'var(--status-success)';
    msgEl.style.fontWeight = 'bold';
  });

  box.addEventListener('mouseout', () => {
    msgEl.textContent = "Move mouse over the box above";
    msgEl.style.color = 'var(--text-muted)';
    msgEl.style.fontWeight = 'normal';
  });
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE PRODUCT CARD (Q35)
   -------------------------------------------------------------------------- */
function initInteractiveProductCard() {
  const card = document.getElementById('interactiveProductCard');
  const imgBox = document.getElementById('productImageWrap');
  const specs = document.getElementById('productSpecsOverlay');
  const detailsBtn = document.getElementById('productToggleDetailsBtn');
  const detailsPanel = document.getElementById('productDetailsOutput');

  if (!card || !imgBox) return;

  // Mouseover on product image
  imgBox.addEventListener('mouseover', () => {
    imgBox.style.transform = 'scale(1.08)';
    if (specs) specs.style.opacity = '1';
  });

  imgBox.addEventListener('mouseout', () => {
    imgBox.style.transform = 'scale(1)';
    if (specs) specs.style.opacity = '0';
  });

  // Click View Details button
  if (detailsBtn && detailsPanel) {
    let isOpen = false;
    detailsBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      detailsPanel.style.display = isOpen ? 'block' : 'none';
      detailsBtn.textContent = isOpen ? 'Hide Details' : 'View Details';
    });
  }
}

/* --------------------------------------------------------------------------
   6. TRAFFIC SIGNAL SIMULATION (Q36)
   -------------------------------------------------------------------------- */
function initTrafficSignal() {
  const bulbs = document.querySelectorAll('.signal-bulb');
  const msgEl = document.getElementById('trafficActionMsg');
  if (!msgEl) return;

  bulbs.forEach(bulb => {
    bulb.addEventListener('mouseover', function () {
      bulbs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const action = this.getAttribute('data-action');
      msgEl.textContent = action;
      if (action === 'STOP') msgEl.style.color = '#ef4444';
      else if (action === 'READY') msgEl.style.color = '#eab308';
      else if (action === 'GO') msgEl.style.color = '#10b981';
    });

    bulb.addEventListener('mouseout', function () {
      this.classList.remove('active');
      msgEl.textContent = "HOVER OVER A LIGHT";
      msgEl.style.color = 'var(--text-muted)';
    });
  });
}

/* --------------------------------------------------------------------------
   7. STUDENT SEARCH KEYBOARD DETECTION (Q37)
   -------------------------------------------------------------------------- */
function initStudentSearchKeydown() {
  const input = document.getElementById('studentSearchKeyInput');
  const keyDisplay = document.getElementById('pressedKeyVal');
  const msgEl = document.getElementById('studentSearchFeedback');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (keyDisplay) {
      keyDisplay.textContent = e.key === ' ' ? 'Space' : e.key;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (msgEl) {
        msgEl.className = 'alert alert-info';
        msgEl.textContent = 'Searching for student...';
        msgEl.style.display = 'block';
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      input.value = '';
      if (msgEl) {
        msgEl.className = 'alert alert-warning';
        msgEl.textContent = 'Search input cleared (Esc).';
        msgEl.style.display = 'block';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   8. ATM PIN SIMULATION (Q38: Numeric Guard & Enter)
   -------------------------------------------------------------------------- */
function initAtmPinGuard() {
  const pinInput = document.getElementById('atmPinInput');
  const statusEl = document.getElementById('atmPinStatus');
  const warningEl = document.getElementById('atmPinWarning');
  if (!pinInput) return;

  let started = false;

  pinInput.addEventListener('keydown', (e) => {
    if (warningEl) warningEl.style.display = 'none';

    // Allow navigation & controls
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      return;
    }

    // Submit on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      if (pinInput.value.length === 4) {
        if (statusEl) {
          statusEl.className = 'alert alert-success';
          statusEl.textContent = '✓ PIN Submitted Successfully';
          statusEl.style.display = 'block';
        }
      } else {
        if (warningEl) {
          warningEl.textContent = `Please enter a complete 4-digit PIN (currently ${pinInput.value.length} digits).`;
          warningEl.style.display = 'block';
        }
      }
      return;
    }

    // Only allow numeric digits 0-9
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      if (warningEl) {
        warningEl.textContent = `Warning: Non-numeric key '${e.key}' blocked! Digits 0-9 only.`;
        warningEl.style.display = 'block';
      }
      return;
    }

    if (!started) {
      started = true;
      if (statusEl) {
        statusEl.className = 'alert alert-info';
        statusEl.textContent = 'PIN Entry Started';
        statusEl.style.display = 'block';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   9. PRODUCT SEARCH WITH COLOR SHIFT & REAL-TIME ECHO (Q39)
   -------------------------------------------------------------------------- */
function initDynamicProductSearch() {
  const searchInput = document.getElementById('dynamicProductSearchInput');
  const echoEl = document.getElementById('realtimeEchoDisplay');
  const resultBanner = document.getElementById('dynamicSearchResultBanner');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const text = this.value;
    if (text.length > 0) {
      this.style.backgroundColor = '#eff6ff';
      this.style.borderColor = 'var(--accent-blue)';
      if (echoEl) {
        echoEl.textContent = text;
        echoEl.style.color = 'var(--accent-blue)';
      }
    } else {
      this.style.backgroundColor = '#fff';
      this.style.borderColor = 'var(--border-light)';
      if (echoEl) {
        echoEl.textContent = '[Waiting for keystrokes...]';
        echoEl.style.color = 'var(--text-muted)';
      }
      if (resultBanner) resultBanner.style.display = 'none';
    }
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = this.value.trim();
      if (resultBanner) {
        resultBanner.className = 'alert alert-success';
        resultBanner.textContent = `Searching for: ${val || '[All Products]'}`;
        resultBanner.style.display = 'block';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   10. ONLINE EXAM CBT INTERFACE (Q40)
   -------------------------------------------------------------------------- */
function initCbtExamInterface() {
  const optionCards = document.querySelectorAll('.cbt-option');
  const submitBtn = document.getElementById('cbtSubmitBtn');
  const alertEl = document.getElementById('cbtExamAlert');
  if (!submitBtn) return;

  let selectedOption = null;

  optionCards.forEach(card => {
    card.addEventListener('click', function () {
      optionCards.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      selectedOption = this.getAttribute('data-val');
      if (alertEl) alertEl.style.display = 'none';
    });
  });

  // Mouse-over highlight Submit button
  submitBtn.addEventListener('mouseover', function () {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
  });

  submitBtn.addEventListener('mouseout', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'var(--shadow-sm)';
  });

  function submitExamAnswer() {
    if (selectedOption) {
      if (alertEl) {
        alertEl.className = 'alert alert-success';
        alertEl.textContent = `✓ Answer Submitted Successfully: Option [${selectedOption}]`;
        alertEl.style.display = 'block';
      }
      window.showToast?.(`Answer submitted: Option ${selectedOption}`, 'success');
    } else {
      if (alertEl) {
        alertEl.className = 'alert alert-warning';
        alertEl.textContent = 'Please select an answer option before submitting!';
        alertEl.style.display = 'block';
      }
    }
  }

  submitBtn.addEventListener('click', submitExamAnswer);

  // Press Enter key to submit
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement.tagName !== 'INPUT' && document.getElementById('cbtExamCard')) {
      e.preventDefault();
      submitExamAnswer();
    }
  });
}

// Global Expose
window.calculateMarks = calculateMarks;
window.validateVitWorkshopEmail = validateVitWorkshopEmail;

