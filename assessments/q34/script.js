/**
 * CSI3029 Assessment Q34: Interactive Color-Changing Box
 * JavaScript Click & Mouseover Event Handling
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const colorPalette = [
  "#3B82F6", // Blue
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Purple
  "#EC4899", // Pink
  "#06B6D4", // Cyan
  "#14B8A6", // Teal
  "#F97316"  // Orange
];

let currentIndex = 0;
let clickCount = 0;

const colorBox = document.getElementById('colorBox');
const colorCodeEl = document.getElementById('currentColorCode');
const hoverMessage = document.getElementById('hoverMessage');
const clickCountEl = document.getElementById('clickCount');
const mouseStateEl = document.getElementById('mouseState');

// 1. Click Event: Changes box background color
function changeBoxColor() {
  clickCount++;
  clickCountEl.textContent = clickCount;

  currentIndex = (currentIndex + 1) % colorPalette.length;
  const newColor = colorPalette[currentIndex];

  colorBox.style.backgroundColor = newColor;
  colorBox.style.boxShadow = `0 10px 30px -5px ${newColor}80`;
  colorCodeEl.textContent = newColor;
}

colorBox.addEventListener('click', changeBoxColor);

// Accessibility keyboard trigger (Enter or Space)
colorBox.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    changeBoxColor();
  }
});

// 2. Mouseover Event: Display "Mouse is over the box" below it
colorBox.addEventListener('mouseover', function () {
  hoverMessage.textContent = "Mouse is over the box";
  hoverMessage.className = "hover-message active";
  mouseStateEl.textContent = "INSIDE";
  mouseStateEl.className = "info-val state-in";
});

// Mouseleave Event: Restore default status
colorBox.addEventListener('mouseleave', function () {
  hoverMessage.textContent = "Move mouse over the box above";
  hoverMessage.className = "hover-message idle";
  mouseStateEl.textContent = "OUTSIDE";
  mouseStateEl.className = "info-val state-out";
});

// Reset Functionality
function resetBox() {
  currentIndex = 0;
  clickCount = 0;
  clickCountEl.textContent = "0";
  colorBox.style.backgroundColor = colorPalette[0];
  colorBox.style.boxShadow = `0 10px 25px -5px ${colorPalette[0]}80`;
  colorCodeEl.textContent = colorPalette[0];
  hoverMessage.textContent = "Move mouse over the box above";
  hoverMessage.className = "hover-message idle";
  mouseStateEl.textContent = "OUTSIDE";
  mouseStateEl.className = "info-val state-out";
}

