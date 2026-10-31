/**
 * CSI3029 Assessment Q36: Interactive Traffic Signal Simulation
 * JavaScript DOM Mouse Event Handling (mouseover / mouseout)
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const bulbs = document.querySelectorAll('.signal-bulb');
const actionHeading = document.getElementById('actionHeading');
const actionDesc = document.getElementById('actionDesc');
const actionBoard = document.querySelector('.action-board');

bulbs.forEach(bulb => {
  // 1. Mouseover Event: Highlight signal lamp & display dynamic action prompt
  bulb.addEventListener('mouseover', function () {
    // Reset all bulbs first
    bulbs.forEach(b => b.classList.remove('active'));

    // Highlight current bulb
    this.classList.add('active');

    const action = this.getAttribute('data-action');
    const desc = this.getAttribute('data-desc');

    actionHeading.textContent = action;
    actionDesc.textContent = desc;

    // Apply color-coded styling
    actionHeading.className = 'action-heading';
    if (action === 'STOP') {
      actionHeading.classList.add('action-stop');
      actionBoard.style.borderColor = '#ef4444';
    } else if (action === 'READY') {
      actionHeading.classList.add('action-ready');
      actionBoard.style.borderColor = '#eab308';
    } else if (action === 'GO') {
      actionHeading.classList.add('action-go');
      actionBoard.style.borderColor = '#10b981';
    }
  });

  // 2. Mouseout Event: Reset signal light and clear action prompt
  bulb.addEventListener('mouseout', function () {
    this.classList.remove('active');

    // Restore idle prompt
    actionHeading.textContent = 'HOVER OVER A LIGHT';
    actionHeading.className = 'action-heading idle';
    actionDesc.textContent = 'Move cursor over any traffic lamp to activate the instruction.';
    actionBoard.style.borderColor = '#1f2937';
  });
});

