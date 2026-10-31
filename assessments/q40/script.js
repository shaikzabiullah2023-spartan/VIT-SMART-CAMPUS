/**
 * CSI3029 Assessment Q40: Online Exam Question Interface
 * Click Selection, Button Mouseover Affordance & Enter Key Submission
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const optionCards = document.querySelectorAll('.option-card');
const submitBtn = document.getElementById('submitExamBtn');
const submissionAlert = document.getElementById('submissionAlert');

let selectedOption = null;

// 1. Mouse Click Event: Select answer option and highlight selected option
optionCards.forEach(card => {
  card.addEventListener('click', function () {
    selectOption(this);
  });

  // Accessible keyboard selection (Space or Enter on focused option card)
  card.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      selectOption(this);
    }
  });
});

function selectOption(card) {
  // Remove selection highlight from all options
  optionCards.forEach(c => c.classList.remove('selected'));

  // Highlight clicked option
  card.classList.add('selected');
  selectedOption = {
    letter: card.getAttribute('data-opt'),
    text: card.querySelector('.opt-text').textContent
  };

  submissionAlert.style.display = 'none';
}

// 2. Mouse-over Event: Highlight Submit button
submitBtn.addEventListener('mouseover', function () {
  this.classList.add('hover-highlight');
});

// Mouse-out Event: Restore default button appearance
submitBtn.addEventListener('mouseout', function () {
  this.classList.remove('hover-highlight');
});

// 3. Submit Handler: displays "Answer Submitted Successfully"
function submitAnswer() {
  if (selectedOption) {
    submissionAlert.textContent = `✓ Answer Submitted Successfully: Option [${selectedOption.letter}] "${selectedOption.text}"`;
    submissionAlert.className = 'submission-alert success';
    submissionAlert.style.display = 'block';
  } else {
    submissionAlert.textContent = 'Please click to select an answer option before submitting!';
    submissionAlert.className = 'submission-alert warning';
    submissionAlert.style.display = 'block';
  }
}

submitBtn.addEventListener('click', submitAnswer);

// 4. Keyboard Event: Allow user to press Enter to submit selected answer
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    // If an input is not capturing text, submit exam
    if (document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      submitAnswer();
    }
  }
});

function clearSelection() {
  optionCards.forEach(c => c.classList.remove('selected'));
  selectedOption = null;
  submissionAlert.style.display = 'none';
}

