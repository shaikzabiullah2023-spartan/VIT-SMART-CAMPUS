/**
 * Teacher Subject Marks Calculator (Q28)
 * Accepts marks for three subjects, calculates total and average, and displays in-place.
 */

function calculateMarks() {
  const m1 = parseFloat(document.getElementById('sub1').value) || 0;
  const m2 = parseFloat(document.getElementById('sub2').value) || 0;
  const m3 = parseFloat(document.getElementById('sub3').value) || 0;

  // Validation
  if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
    alert('Please enter valid marks between 0 and 100 for all subjects.');
    return;
  }

  // 1. Calculate Total Marks
  const total = m1 + m2 + m3;

  // 2. Calculate Average Marks
  const average = total / 3;

  // 3. Display Results on the same page
  const resultsCard = document.getElementById('resultsCard');
  const totalMarksVal = document.getElementById('totalMarksVal');
  const averageMarksVal = document.getElementById('averageMarksVal');
  const gradeStatusVal = document.getElementById('gradeStatusVal');
  const feedbackText = document.getElementById('feedbackText');

  totalMarksVal.textContent = total.toFixed(1) + ' / 300';
  averageMarksVal.textContent = average.toFixed(2) + '%';

  // Grade & Status Logic
  if (m1 < 40 || m2 < 40 || m3 < 40) {
    gradeStatusVal.textContent = 'Fail';
    gradeStatusVal.style.color = '#ef4444';
    feedbackText.style.backgroundColor = '#fee2e2';
    feedbackText.style.color = '#991b1b';
    feedbackText.textContent = 'Needs Improvement: Student scored below the 40% passing threshold in one or more subjects.';
  } else {
    gradeStatusVal.textContent = 'Pass';
    gradeStatusVal.style.color = '#059669';

    if (average >= 90) {
      feedbackText.style.backgroundColor = '#ecfdf5';
      feedbackText.style.color = '#065f46';
      feedbackText.textContent = 'Outstanding Performance: Distinction (Grade S).';
    } else if (average >= 75) {
      feedbackText.style.backgroundColor = '#eff6ff';
      feedbackText.style.color = '#1e40af';
      feedbackText.textContent = 'Very Good: First Class with Distinction (Grade A).';
    } else {
      feedbackText.style.backgroundColor = '#fef3c7';
      feedbackText.style.color = '#92400e';
      feedbackText.textContent = 'Satisfactory: Passed (Grade B/C).';
    }
  }

  resultsCard.style.display = 'block';
  resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetForm() {
  document.getElementById('marksForm').reset();
  document.getElementById('resultsCard').style.display = 'none';
}

