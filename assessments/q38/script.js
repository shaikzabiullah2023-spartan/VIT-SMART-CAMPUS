/**
 * CSI3029 Assessment Q38: ATM Secure PIN Entry Simulation
 * Keyboard Event Numeric Guard, Live Entry Detection & Enter Submission
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const pinInput = document.getElementById('pinInput');
const pinAlert = document.getElementById('pinAlert');
const warningMsg = document.getElementById('warningMsg');

let entryStarted = false;

// 1. Detect keyboard input on the PIN field
pinInput.addEventListener('keydown', function (e) {
  warningMsg.style.display = 'none';

  // Allowed control keys (Backspace, Delete, Tab, Arrow keys, Escape)
  const allowedControls = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Escape'];
  if (allowedControls.includes(e.key)) {
    if (e.key === 'Escape') {
      clearPin();
    }
    return;
  }

  // Handle Enter key for submission
  if (e.key === 'Enter') {
    e.preventDefault();
    submitPin();
    return;
  }

  // 2. Validate numeric digits only (0 - 9)
  const isDigit = /^[0-9]$/.test(e.key);

  if (!isDigit) {
    // Prevent non-numeric character entry
    e.preventDefault();
    showWarning(`Warning: Key '${e.key}' blocked. Only numbers 0-9 are allowed!`);
    return;
  }

  // 3. Display "PIN Entry Started" when user starts typing
  if (!entryStarted) {
    entryStarted = true;
    pinAlert.textContent = "PIN Entry Started";
    pinAlert.className = "pin-alert started";
  }
});

// Show warning helper
function showWarning(text) {
  warningMsg.textContent = text;
  warningMsg.style.display = 'block';
}

// 4. Submit PIN handler
function submitPin() {
  const pin = pinInput.value.trim();

  if (pin.length === 4) {
    pinAlert.textContent = "PIN Submitted Successfully";
    pinAlert.className = "pin-alert success";
    warningMsg.style.display = 'none';
  } else if (pin.length === 0) {
    showWarning("Please enter your 4-digit PIN.");
  } else {
    showWarning(`Incomplete PIN! Enter all 4 digits (currently ${pin.length} digits entered).`);
  }
}

// Clear PIN handler
function clearPin() {
  pinInput.value = '';
  entryStarted = false;
  pinAlert.textContent = "Ready for cardholder input...";
  pinAlert.className = "pin-alert idle";
  warningMsg.style.display = 'none';
  pinInput.focus();
}

// Virtual keypad support
function pressVirtualKey(digit) {
  if (pinInput.value.length < 4) {
    pinInput.value += digit;
    if (!entryStarted) {
      entryStarted = true;
      pinAlert.textContent = "PIN Entry Started";
      pinAlert.className = "pin-alert started";
    }
    warningMsg.style.display = 'none';
  }
}

