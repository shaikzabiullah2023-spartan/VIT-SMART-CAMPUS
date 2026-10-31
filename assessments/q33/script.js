/**
 * CSI3029 Assessment Q33: Button Mouseover & Mouseleave Event Handling
 * Demonstrates DOM mouseover / mouseout event listeners
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const defaultText = "Hover over the button below to interact";
const hoverText = "Welcome to VIT!";

const interactiveBtn = document.getElementById('interactiveBtn');
const greetingText = document.getElementById('greetingText');
const displayStage = document.querySelector('.display-stage');
const eventSubtext = document.getElementById('eventSubtext');
const hoverCountEl = document.getElementById('hoverCount');
const leaveCountEl = document.getElementById('leaveCount');
const activeStatusEl = document.getElementById('activeStatus');

let hoverCount = 0;
let leaveCount = 0;

// Mouseover event handler
interactiveBtn.addEventListener('mouseover', function () {
  hoverCount++;
  hoverCountEl.textContent = hoverCount;

  // Change displayed text to "Welcome to VIT!"
  greetingText.textContent = hoverText;
  greetingText.classList.add('highlight');
  displayStage.classList.add('active');

  eventSubtext.textContent = "Event: 'mouseover' triggered on button";
  activeStatusEl.textContent = "HOVERED";
  activeStatusEl.className = "stat-val status-hovered";
});

// Mouseout / Mouseleave event handler
interactiveBtn.addEventListener('mouseout', function () {
  leaveCount++;
  leaveCountEl.textContent = leaveCount;

  // Restore original default text
  greetingText.textContent = defaultText;
  greetingText.classList.remove('highlight');
  displayStage.classList.remove('active');

  eventSubtext.textContent = "Event: 'mouseout' triggered - original text restored";
  activeStatusEl.textContent = "IDLE";
  activeStatusEl.className = "stat-val status-idle";
});

