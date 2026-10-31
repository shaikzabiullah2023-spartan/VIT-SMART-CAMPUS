/**
 * CSI3029 Assessment Q32: Online Employee Registration
 * JavaScript Regex Pattern Validation & Radio Option Enforcement
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

function validateEmployeeForm() {
  const empIdInput = document.getElementById('empId');
  const inputContainer = empIdInput.parentElement;
  const empIdFeedback = document.getElementById('empIdFeedback');
  const empTypeFeedback = document.getElementById('empTypeFeedback');
  const statusAlert = document.getElementById('statusAlert');
  const confirmationCard = document.getElementById('confirmationCard');

  // Clear previous state
  empIdFeedback.textContent = '';
  empIdFeedback.className = 'dynamic-feedback';
  empTypeFeedback.textContent = '';
  empTypeFeedback.className = 'dynamic-feedback';
  inputContainer.classList.remove('is-invalid', 'is-valid');
  statusAlert.style.display = 'none';
  statusAlert.className = 'status-alert';
  confirmationCard.style.display = 'none';

  let isValid = true;
  const rawEmpId = empIdInput.value.trim().toUpperCase();

  // 1. Regular expression validation for Employee ID:
  // Must start with 'EMP' followed by exactly 4 numeric digits (e.g. EMP1234)
  const empIdPattern = /^EMP[0-9]{4}$/;

  if (!rawEmpId) {
    empIdFeedback.textContent = 'Employee ID is required.';
    empIdFeedback.classList.add('error');
    inputContainer.classList.add('is-invalid');
    isValid = false;
  } else if (!empIdPattern.test(rawEmpId)) {
    empIdFeedback.textContent = 'Invalid ID format! Must start with EMP followed by exactly 4 digits (e.g. EMP1234).';
    empIdFeedback.classList.add('error');
    inputContainer.classList.add('is-invalid');
    isValid = false;
  } else {
    empIdFeedback.textContent = '✓ Valid Employee ID format.';
    empIdFeedback.classList.add('success');
    inputContainer.classList.add('is-valid');
  }

  // 2. Validate Employment Type radio selection
  const selectedRadio = document.querySelector('input[name="empType"]:checked');

  if (!selectedRadio) {
    empTypeFeedback.textContent = 'Please select an employment type (Full-Time, Part-Time, or Intern).';
    empTypeFeedback.classList.add('error');
    isValid = false;
  } else {
    empTypeFeedback.textContent = '✓ ' + selectedRadio.value + ' selected.';
    empTypeFeedback.classList.add('success');
  }

  // 3. Process result
  if (!isValid) {
    statusAlert.textContent = 'Registration failed: Please address the validation errors highlighted below.';
    statusAlert.classList.add('error');
    statusAlert.style.display = 'block';
  } else {
    statusAlert.textContent = 'Success: Employee ' + rawEmpId + ' successfully registered under category ' + selectedRadio.value + '.';
    statusAlert.classList.add('success');
    statusAlert.style.display = 'block';

    // Update confirmation summary
    document.getElementById('resEmpId').textContent = rawEmpId;
    document.getElementById('resEmpType').textContent = selectedRadio.value;
    document.getElementById('resTimestamp').textContent = new Date().toLocaleString();
    confirmationCard.style.display = 'block';
  }
}

function resetEmployeeForm() {
  document.getElementById('empForm').reset();
  const empIdInput = document.getElementById('empId');
  empIdInput.parentElement.classList.remove('is-invalid', 'is-valid');
  document.getElementById('empIdFeedback').textContent = '';
  document.getElementById('empTypeFeedback').textContent = '';
  document.getElementById('statusAlert').style.display = 'none';
  document.getElementById('confirmationCard').style.display = 'none';
}

