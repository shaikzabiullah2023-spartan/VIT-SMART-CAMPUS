/**
 * Symposium Registration JavaScript Validation & Array Handling (Q30)
 * 1. Collects selected skills into a native JavaScript Array.
 * 2. Enforces Regex for Name, RegNo, Email, Mobile.
 * 3. Renders formatted confirmation table.
 */

function validateSymposiumForm() {
  const pNameInput = document.getElementById('pName');
  const pRegInput = document.getElementById('pReg');
  const pEmailInput = document.getElementById('pEmail');
  const pMobileInput = document.getElementById('pMobile');
  const pDeptInput = document.getElementById('pDept');

  const pNameError = document.getElementById('pNameError');
  const pRegError = document.getElementById('pRegError');
  const pEmailError = document.getElementById('pEmailError');
  const pMobileError = document.getElementById('pMobileError');
  const pDeptError = document.getElementById('pDeptError');
  const pSkillsError = document.getElementById('pSkillsError');
  const alertBox = document.getElementById('validationAlert');
  const outputSection = document.getElementById('outputSection');

  // Reset errors
  [pNameError, pRegError, pEmailError, pMobileError, pDeptError, pSkillsError].forEach(e => e.textContent = '');
  [pNameInput, pRegInput, pEmailInput, pMobileInput, pDeptInput].forEach(i => i.classList.remove('input-error'));
  alertBox.style.display = 'none';
  outputSection.style.display = 'none';

  let isValid = true;

  // 1. Participant Name: Only alphabets and spaces allowed
  const nameVal = pNameInput.value.trim();
  const nameRegex = /^[A-Za-z ]+$/;
  if (!nameVal) {
    pNameError.textContent = 'Name field cannot be empty.';
    pNameInput.classList.add('input-error');
    isValid = false;
  } else if (!nameRegex.test(nameVal)) {
    pNameError.textContent = 'Regex Error: Only alphabets and spaces are allowed.';
    pNameInput.classList.add('input-error');
    isValid = false;
  }

  // 2. Register Number: Must begin with REG followed by exactly six digits (e.g. REG123456)
  const regVal = pRegInput.value.trim();
  const regRegex = /^REG[0-9]{6}$/;
  if (!regVal) {
    pRegError.textContent = 'Register number cannot be empty.';
    pRegInput.classList.add('input-error');
    isValid = false;
  } else if (!regRegex.test(regVal)) {
    pRegError.textContent = 'Regex Error: Must begin with REG followed by exactly 6 digits (e.g. REG123456).';
    pRegInput.classList.add('input-error');
    isValid = false;
  }

  // 3. Email ID: Valid email format
  const emailVal = pEmailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailVal) {
    pEmailError.textContent = 'Email field cannot be empty.';
    pEmailInput.classList.add('input-error');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    pEmailError.textContent = 'Regex Error: Please enter a valid email address.';
    pEmailInput.classList.add('input-error');
    isValid = false;
  }

  // 4. Mobile Number: Exactly 10 digits
  const mobileVal = pMobileInput.value.trim();
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileVal) {
    pMobileError.textContent = 'Mobile number cannot be empty.';
    pMobileInput.classList.add('input-error');
    isValid = false;
  } else if (!mobileRegex.test(mobileVal)) {
    pMobileError.textContent = 'Regex Error: Mobile number must contain exactly 10 digits.';
    pMobileInput.classList.add('input-error');
    isValid = false;
  }

  // Department check
  const deptVal = pDeptInput.value;
  if (!deptVal) {
    pDeptError.textContent = 'Please select an academic department.';
    pDeptInput.classList.add('input-error');
    isValid = false;
  }

  // 5. JavaScript Array Requirement: Store all selected Technical Skills in an array
  const selectedSkillsArray = [];
  const skillCheckboxes = document.querySelectorAll('input[name="techSkills"]:checked');
  skillCheckboxes.forEach(cb => {
    selectedSkillsArray.push(cb.value);
  });

  if (selectedSkillsArray.length === 0) {
    pSkillsError.textContent = 'Please select at least one technical skill to populate the array.';
    isValid = false;
  }

  // Handle outcome
  if (!isValid) {
    alertBox.className = 'alert-box alert-error';
    alertBox.textContent = 'Form Submission Error: One or more fields failed validation. Please correct the errors above.';
    alertBox.style.display = 'block';
  } else {
    // Success: Display confirmation message and render participant details & skills array in tabular format
    alertBox.className = 'alert-box alert-success';
    alertBox.textContent = `Success! Participant "${nameVal}" registered successfully. Skills array populated with ${selectedSkillsArray.length} items.`;
    alertBox.style.display = 'block';

    // Populate Tabular Output
    document.getElementById('outName').textContent = nameVal;
    document.getElementById('outReg').textContent = regVal;
    document.getElementById('outDept').textContent = deptVal;
    document.getElementById('outSkillCount').textContent = `${selectedSkillsArray.length} Skill(s) Selected`;

    const skillsCell = document.getElementById('outSkillsCell');
    skillsCell.innerHTML = selectedSkillsArray
      .map(skill => `<span class="skill-tag">${skill}</span>`)
      .join(' ');

    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function resetSymposium() {
  document.getElementById('symposiumForm').reset();
  document.getElementById('validationAlert').style.display = 'none';
  document.getElementById('outputSection').style.display = 'none';
}

