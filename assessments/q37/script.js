/**
 * CSI3029 Assessment Q37: Student Search with Enter & Escape Key Handling
 * JavaScript Keydown Event Monitoring & Hotkey Handling
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const inputEl = document.getElementById('studentSearchInput');
const pressedKeyVal = document.getElementById('pressedKeyVal');
const pressedKeyCode = document.getElementById('pressedKeyCode');
const searchMessage = document.getElementById('searchMessage');
const clearBtn = document.getElementById('clearBtn');

// Detect keyboard input on the search text box
inputEl.addEventListener('keydown', function (e) {
  // 1. Display the key pressed value below the text box
  pressedKeyVal.textContent = e.key === ' ' ? 'Space' : e.key;
  pressedKeyCode.textContent = e.code;

  // 2. If the user presses the 'Enter' key: display 'Searching for student…'
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = inputEl.value.trim();
    if (query) {
      searchMessage.textContent = `Searching for student: "${query}"…`;
    } else {
      searchMessage.textContent = 'Searching for student…';
    }
    searchMessage.className = 'search-msg active';
  }

  // 3. If the user presses the 'Escape' key: clear the text box and the message
  if (e.key === 'Escape') {
    e.preventDefault();
    clearSearch();
  }
});

function clearSearch() {
  inputEl.value = '';
  searchMessage.textContent = 'Input and message cleared';
  searchMessage.className = 'search-msg cleared';
  pressedKeyVal.textContent = 'Escape';
  pressedKeyCode.textContent = 'Escape';

  setTimeout(() => {
    searchMessage.textContent = 'Waiting for keyboard input...';
    searchMessage.className = 'search-msg idle';
  }, 1200);
}

clearBtn.addEventListener('click', clearSearch);

