/**
 * VIT SMART CAMPUS – FORM VALIDATION ENGINE (validation.js)
 * Robust client-side validation using JavaScript regular expressions and DOM feedback
 * Author: Shaik Zabiullah (23MIC0007), VIT Vellore
 */

/* --------------------------------------------------------------------------
   1. STUDENT REGISTRATION VALIDATION
   -------------------------------------------------------------------------- */
function validateStudentRegForm(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('studentRegForm');
  if (!form) return false;

  let isValid = true;
  clearAllErrors(form);

  // Participant / Student Name
  const name = form.elements['studentName']?.value.trim();
  if (!name) {
    showFieldError('studentName', 'Please enter your full name.');
    isValid = false;
  } else if (!/^[A-Za-z\s]{3,50}$/.test(name)) {
    showFieldError('studentName', 'Name must contain only alphabets and spaces (min 3 chars).');
    isValid = false;
  }

  // Register Number (e.g. 23MIC0007 or REG123456)
  const regNo = form.elements['studentRegNo']?.value.trim().toUpperCase();
  if (!regNo) {
    showFieldError('studentRegNo', 'Register Number is required.');
    isValid = false;
  } else if (!/^[A-Z0-9]{8,10}$/.test(regNo)) {
    showFieldError('studentRegNo', 'Enter a valid University Register Number (e.g., 23MIC0007).');
    isValid = false;
  }

  // Email Address
  const email = form.elements['studentEmail']?.value.trim();
  if (!email) {
    showFieldError('studentEmail', 'Email address is required.');
    isValid = false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    showFieldError('studentEmail', 'Please enter a valid email address.');
    isValid = false;
  }

  // Mobile Number (10 digits)
  const mobile = form.elements['studentMobile']?.value.trim();
  if (!mobile) {
    showFieldError('studentMobile', 'Mobile number is required.');
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(mobile)) {
    showFieldError('studentMobile', 'Enter a valid 10-digit Indian mobile number.');
    isValid = false;
  }

  // Department
  const dept = form.elements['studentDept']?.value;
  if (!dept) {
    showFieldError('studentDept', 'Please select your department.');
    isValid = false;
  }

  // Technical Skills Checkboxes (At least one)
  const checkedSkills = form.querySelectorAll('input[name="studentSkills"]:checked');
  if (checkedSkills.length === 0) {
    showFieldError('studentSkillsGroup', 'Select at least one technical skill.');
    isValid = false;
  }

  if (isValid) {
    const studentData = {
      name, regNo, email, mobile, dept,
      skills: Array.from(checkedSkills).map(cb => cb.value),
      timestamp: new Date().toISOString()
    };
    
    // Save to LocalStorage
    try {
      localStorage.setItem('vit_registered_student', JSON.stringify(studentData));
    } catch(e) {}

    showFormAlert('studentFormAlert', '✓ Student Registration Successful! Confirmation credentials saved.', 'success');
    window.showToast?.('Student Registration Successful!', 'success');
    form.reset();
  } else {
    showFormAlert('studentFormAlert', 'Please correct the highlighted errors before submitting.', 'danger');
  }

  return isValid;
}

/* --------------------------------------------------------------------------
   2. EMPLOYEE REGISTRATION VALIDATION (Q32)
   -------------------------------------------------------------------------- */
function validateEmployeeRegForm(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('employeeRegForm');
  if (!form) return false;

  let isValid = true;
  clearAllErrors(form);

  // Full Name
  const name = form.elements['empName']?.value.trim();
  if (!name) {
    showFieldError('empName', 'Employee full name is required.');
    isValid = false;
  }

  // Employee ID: Must start with EMP followed by exactly 4 digits (e.g. EMP1234)
  const empId = form.elements['empId']?.value.trim().toUpperCase();
  if (!empId) {
    showFieldError('empId', 'Employee ID is required.');
    isValid = false;
  } else if (!/^EMP\d{4}$/.test(empId)) {
    showFieldError('empId', 'Employee ID must be formatted as "EMP" followed by 4 digits (e.g., EMP1024).');
    isValid = false;
  }

  // Email
  const email = form.elements['empEmail']?.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFieldError('empEmail', 'Enter a valid corporate email address.');
    isValid = false;
  }

  // Password & Confirm Password
  const pass = form.elements['empPassword']?.value;
  const confirmPass = form.elements['empConfirmPassword']?.value;
  if (!pass || pass.length < 8) {
    showFieldError('empPassword', 'Password must be at least 8 characters long.');
    isValid = false;
  }
  if (pass !== confirmPass) {
    showFieldError('empConfirmPassword', 'Passwords do not match.');
    isValid = false;
  }

  // Employment Type Radio Selection (Full-Time, Part-Time, Intern)
  const selectedType = form.querySelector('input[name="empType"]:checked');
  if (!selectedType) {
    showFieldError('empTypeGroup', 'Please select an employment category.');
    isValid = false;
  }

  if (isValid) {
    showFormAlert('employeeFormAlert', `✓ Employee ${empId} registered successfully as ${selectedType.value}!`, 'success');
    window.showToast?.(`Employee ${empId} registered successfully!`, 'success');
    form.reset();
  } else {
    showFormAlert('employeeFormAlert', 'Validation failed: Check highlighted fields.', 'danger');
  }

  return isValid;
}

/* --------------------------------------------------------------------------
   3. LOGIN FORM VALIDATION (Q24, Q29)
   -------------------------------------------------------------------------- */
function validateLoginForm(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('loginForm');
  if (!form) return false;

  let isValid = true;
  clearAllErrors(form);

  const username = form.elements['loginUsername']?.value.trim();
  const password = form.elements['loginPassword']?.value.trim();
  const role = form.elements['loginRole']?.value;
  const remember = form.elements['loginRemember']?.checked;

  // 1. Check whether username and password are empty
  if (!username) {
    showFieldError('loginUsername', 'Username or Email is required.');
    isValid = false;
  } else if (username.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
    showFieldError('loginUsername', 'Invalid email address format.');
    isValid = false;
  }

  if (!password) {
    showFieldError('loginPassword', 'Password is required.');
    isValid = false;
  } else if (password.length < 6) {
    showFieldError('loginPassword', 'Password must be at least 6 characters.');
    isValid = false;
  }

  if (isValid) {
    // Show simulated success login
    showFormAlert('loginAlert', `✓ Login Verified! Welcome back, ${username} (${role}). Redirecting to Dashboard...`, 'success');
    window.showToast?.(`Welcome back, ${username}!`, 'success');
    
    // Store session in LocalStorage
    try {
      localStorage.setItem('vit_auth_user', JSON.stringify({ username, role, loginTime: new Date().toISOString() }));
    } catch(e) {}

    setTimeout(() => {
      window.location.href = './dashboard.html';
    }, 1200);
  } else {
    showFormAlert('loginAlert', 'Authentication failed. Please verify your credentials.', 'danger');
  }

  return isValid;
}

/* --------------------------------------------------------------------------
   4. SYMPOSIUM REGISTRATION WITH JS ARRAYS & REGEX (Q25, Q30)
   -------------------------------------------------------------------------- */
function validateSymposiumForm(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('symposiumForm');
  if (!form) return false;

  let isValid = true;
  clearAllErrors(form);

  // 1. Participant Name (only alphabets and spaces allowed)
  const name = form.elements['symName']?.value.trim();
  if (!name || !/^[A-Za-z\s]+$/.test(name)) {
    showFieldError('symName', 'Participant Name must contain only alphabets and spaces.');
    isValid = false;
  }

  // 2. Register Number (must begin with REG followed by exactly six digits, e.g. REG123456)
  const regNo = form.elements['symReg']?.value.trim().toUpperCase();
  if (!regNo || !/^REG\d{6}$/.test(regNo)) {
    showFieldError('symReg', 'Register Number must start with "REG" followed by 6 digits (e.g., REG123456).');
    isValid = false;
  }

  // 3. Email ID (valid email format)
  const email = form.elements['symEmail']?.value.trim();
  if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    showFieldError('symEmail', 'Please enter a valid email format.');
    isValid = false;
  }

  // 4. Mobile Number (exactly 10 digits)
  const mobile = form.elements['symMobile']?.value.trim();
  if (!mobile || !/^\d{10}$/.test(mobile)) {
    showFieldError('symMobile', 'Mobile number must be exactly 10 numeric digits.');
    isValid = false;
  }

  // Department
  const dept = form.elements['symDept']?.value;
  if (!dept) {
    showFieldError('symDept', 'Please select your department.');
    isValid = false;
  }

  // 5. Array: store all selected technical skills in a JavaScript array
  const selectedSkillsCheckboxes = form.querySelectorAll('input[name="symSkills"]:checked');
  const technicalSkillsArray = [];
  selectedSkillsCheckboxes.forEach(cb => technicalSkillsArray.push(cb.value));

  if (technicalSkillsArray.length === 0) {
    showFieldError('symSkillsGroup', 'Please select at least one technical skill for the symposium.');
    isValid = false;
  }

  const alertBox = document.getElementById('symposiumAlert');
  const outputTableContainer = document.getElementById('symposiumTableOutput');

  if (isValid) {
    showFormAlert('symposiumAlert', '✓ Validation Successful! Registration confirmed for National Technical Symposium.', 'success');

    // Display participant details and skills array in tabular format
    if (outputTableContainer) {
      outputTableContainer.innerHTML = `
        <div class="card" style="margin-top: 24px; border: 1.5px solid var(--status-success); animation: fadeIn 0.3s ease;">
          <div class="card-header" style="background: #ecfdf5;">
            <h4 style="color: #065f46; font-size: 16px;">✓ Symposium Confirmation Roster (JavaScript Array Output)</h4>
          </div>
          <div class="card-body">
            <table class="table table-bordered">
              <tr><th style="width: 35%;">Participant Name</th><td><strong>${name}</strong></td></tr>
              <tr><th>Register Number</th><td><code>${regNo}</code></td></tr>
              <tr><th>Department</th><td>${dept}</td></tr>
              <tr><th>Contact Email</th><td>${email}</td></tr>
              <tr><th>Contact Mobile</th><td>${mobile}</td></tr>
              <tr>
                <th>Selected Skills (Array: ${technicalSkillsArray.length})</th>
                <td>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${technicalSkillsArray.map(skill => `<span class="badge badge-cyan">${skill}</span>`).join('')}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `;
      outputTableContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    window.showToast?.('Symposium Registration Confirmed!', 'success');
  } else {
    showFormAlert('symposiumAlert', 'Validation failed: Check highlighted fields and errors above.', 'danger');
  }

  return isValid;
}

/* --------------------------------------------------------------------------
   5. COMPLETE 20-FIELD HOSPITAL PATIENT REGISTRATION FORM (Q26)
   -------------------------------------------------------------------------- */
function validatePatientForm(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('patientRegForm');
  if (!form) return false;

  let isValid = true;
  clearAllErrors(form);

  // 1. Patient Name (text)
  const name = form.elements['patName']?.value.trim();
  if (!name) {
    showFieldError('patName', 'Patient name is required.');
    isValid = false;
  }

  // 2. Email (email)
  const email = form.elements['patEmail']?.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFieldError('patEmail', 'Valid email address is required.');
    isValid = false;
  }

  // 3. Password (password)
  const pass = form.elements['patPassword']?.value;
  if (!pass || pass.length < 6) {
    showFieldError('patPassword', 'Portal access password is required (min 6 characters).');
    isValid = false;
  }

  // 4. Contact Number (tel)
  const tel = form.elements['patTel']?.value.trim();
  if (!tel || !/^\d{10}$/.test(tel)) {
    showFieldError('patTel', 'Valid 10-digit telephone number is required.');
    isValid = false;
  }

  // 5. Age (number)
  const age = form.elements['patAge']?.value;
  if (!age || age < 1 || age > 120) {
    showFieldError('patAge', 'Enter valid patient age (1-120).');
    isValid = false;
  }

  // 6. Date of Birth (date)
  const dob = form.elements['patDob']?.value;
  if (!dob) {
    showFieldError('patDob', 'Date of birth is required.');
    isValid = false;
  }

  // 7. Appointment Time (time)
  const appTime = form.elements['patTime']?.value;
  if (!appTime) {
    showFieldError('patTime', 'Select appointment time slot.');
    isValid = false;
  }

  // 8. Appointment Date & Time (datetime-local)
  const appDateTime = form.elements['patDateTime']?.value;
  if (!appDateTime) {
    showFieldError('patDateTime', 'Select preferred datetime consultation.');
    isValid = false;
  }

  // 9. Gender (radio)
  const gender = form.querySelector('input[name="patGender"]:checked');
  if (!gender) {
    showFieldError('patGenderGroup', 'Select gender.');
    isValid = false;
  }

  // 10. Blood Group (select)
  const blood = form.elements['patBlood']?.value;
  if (!blood) {
    showFieldError('patBlood', 'Select blood group.');
    isValid = false;
  }

  if (isValid) {
    showFormAlert('patientAlert', '✓ Patient registered successfully! Consultation pass generated.', 'success');
    window.showToast?.('Patient Registration Confirmed!', 'success');
    form.reset();
  } else {
    showFormAlert('patientAlert', 'Please verify required patient registration fields.', 'danger');
  }

  return isValid;
}

/* --------------------------------------------------------------------------
   FIELD ERROR UTILITIES
   -------------------------------------------------------------------------- */
function showFieldError(fieldId, errorMsg) {
  const el = document.getElementById(fieldId);
  const feedbackEl = document.getElementById(`${fieldId}Feedback`) || document.getElementById(`${fieldId}Error`);
  
  if (el) el.classList.add('is-invalid');
  if (feedbackEl) {
    feedbackEl.textContent = errorMsg;
    feedbackEl.className = 'field-feedback error';
  }
}

function clearAllErrors(form) {
  form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  form.querySelectorAll('.field-feedback').forEach(el => {
    el.textContent = '';
    el.className = 'field-feedback';
  });
}

function showFormAlert(alertBoxId, message, type = 'success') {
  const alertEl = document.getElementById(alertBoxId);
  if (alertEl) {
    alertEl.textContent = message;
    alertEl.className = `alert alert-${type}`;
    alertEl.style.display = 'flex';
  }
}

// Global expose
window.validateStudentRegForm = validateStudentRegForm;
window.validateEmployeeRegForm = validateEmployeeRegForm;
window.validateLoginForm = validateLoginForm;
window.validateSymposiumForm = validateSymposiumForm;
window.validatePatientForm = validatePatientForm;

