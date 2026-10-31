/**
 * CSI3029 Assessment Q31: VIT Workshop Registration
 * JavaScript Validation Logic with Regular Expressions & Checkboxes
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

function validateWorkshop() {
  const emailInput = document.getElementById('vitEmail');
  const alertBox = document.getElementById('alertBox');
  const emailError = document.getElementById('emailError');
  const topicError = document.getElementById('topicError');
  const successCard = document.getElementById('successCard');

  // Reset errors and alerts
  emailError.textContent = '';
  topicError.textContent = '';
  emailInput.classList.remove('input-error');
  alertBox.style.display = 'none';
  alertBox.className = 'alert-box';
  successCard.style.display = 'none';

  let isValid = true;
  const emailVal = emailInput.value.trim();

  // 1. Regular expression validation for official VIT email (@vit.ac.in)
  // Format: username@vit.ac.in
  const vitEmailRegex = /^[a-zA-Z0-9._%+-]+@vit\.ac\.in$/i;

  if (!emailVal) {
    emailError.textContent = 'Please enter your VIT email address.';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (!vitEmailRegex.test(emailVal)) {
    emailError.textContent = 'Invalid format! Email must be an official VIT address ending with @vit.ac.in';
    emailInput.classList.add('input-error');
    isValid = false;
  }

  // 2. Validate at least one workshop interest checkbox is selected
  const checkedBoxes = document.querySelectorAll('input[name="workshopTopic"]:checked');
  const selectedTopics = Array.from(checkedBoxes).map(cb => cb.value);

  if (selectedTopics.length === 0) {
    topicError.textContent = 'Please select at least one workshop topic to continue.';
    isValid = false;
  }

  // 3. Display appropriate alerts and handle submission
  if (!isValid) {
    alertBox.textContent = 'Validation Error: Please correct the highlighted fields before submitting.';
    alertBox.classList.add('error');
    alertBox.style.display = 'flex';
  } else {
    // Show success alert
    alertBox.textContent = 'Success! Registration validated for ' + emailVal;
    alertBox.classList.add('success');
    alertBox.style.display = 'flex';

    // Populate and show confirmation summary card
    document.getElementById('summaryEmail').textContent = emailVal;
    const topicsContainer = document.getElementById('summaryTopics');
    topicsContainer.innerHTML = '';
    selectedTopics.forEach(topic => {
      const tag = document.createElement('span');
      tag.className = 'topic-tag';
      tag.textContent = topic;
      topicsContainer.appendChild(tag);
    });
    successCard.style.display = 'block';
  }
}

function resetForm() {
  document.getElementById('workshopForm').reset();
  document.getElementById('vitEmail').classList.remove('input-error');
  document.getElementById('emailError').textContent = '';
  document.getElementById('topicError').textContent = '';
  document.getElementById('alertBox').style.display = 'none';
  document.getElementById('successCard').style.display = 'none';
}

