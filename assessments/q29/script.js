/**
 * Student Login with JavaScript Regex Validation (Q29)
 * Checks empty fields and enforces regex patterns for username & password.
 */

function validateLoginForm() {
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const alertBox = document.getElementById('alertBox');

  // Reset errors
  usernameError.textContent = '';
  passwordError.textContent = '';
  usernameInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');
  alertBox.style.display = 'none';

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  let isValid = true;

  // 1. Check if Username is empty
  if (username === '') {
    usernameError.textContent = 'Error: Username field cannot be empty.';
    usernameInput.classList.add('input-error');
    isValid = false;
  } else {
    // 2. Validate Username using Regular Expression
    // Rule: Alphanumeric characters only, between 4 and 15 characters
    const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
    if (!usernameRegex.test(username)) {
      usernameError.textContent = 'Regex Error: Username must be 4–15 alphanumeric characters.';
      usernameInput.classList.add('input-error');
      isValid = false;
    }
  }

  // 3. Check if Password is empty
  if (password === '') {
    passwordError.textContent = 'Error: Password field cannot be empty.';
    passwordInput.classList.add('input-error');
    isValid = false;
  } else {
    // 4. Validate Password using Regular Expression
    // Rule: Minimum 8 chars, at least 1 uppercase letter, at least 1 lowercase letter, and at least 1 digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      passwordError.textContent = 'Regex Error: Must have at least 8 chars, 1 uppercase, 1 lowercase & 1 digit.';
      passwordInput.classList.add('input-error');
      isValid = false;
    }
  }

  // Display outcome
  if (!isValid) {
    alertBox.className = 'alert-box alert-error';
    alertBox.textContent = 'Validation Failed: Please resolve highlighted regex and empty-field constraints.';
    alertBox.style.display = 'block';
  } else {
    alertBox.className = 'alert-box alert-success';
    alertBox.textContent = 'Validation Passed: Credentials satisfy all regex requirements. Logging in...';
    alertBox.style.display = 'block';
  }
}

function resetLoginForm() {
  document.getElementById('loginForm').reset();
  document.getElementById('usernameError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('usernameInput').classList.remove('input-error');
  document.getElementById('passwordInput').classList.remove('input-error');
  document.getElementById('alertBox').style.display = 'none';
}

