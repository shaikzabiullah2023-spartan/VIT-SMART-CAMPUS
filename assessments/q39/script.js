/**
 * CSI3029 Assessment Q39: Product Search with Dynamic Color Change & Enter Query
 * Real-time Keyboard Detection & Dynamic UI Transformation
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const searchInput = document.getElementById('productSearchInput');
const liveTypingOutput = document.getElementById('liveTypingOutput');
const searchResultBanner = document.getElementById('searchResultBanner');
const searchResultText = document.getElementById('searchResultText');

// 1. Detect keyboard input using 'input' event for real-time echo & color alteration
searchInput.addEventListener('input', function () {
  const query = this.value;

  if (query.length > 0) {
    // Dynamically change background color of input box
    this.classList.add('is-typing');

    // Display entered text in real time below input box
    liveTypingOutput.textContent = query;
    liveTypingOutput.className = 'typing-display active';
  } else {
    // Reset background color and echo when empty
    this.classList.remove('is-typing');
    liveTypingOutput.textContent = '[Waiting for keystrokes...]';
    liveTypingOutput.className = 'typing-display idle';
    searchResultBanner.style.display = 'none';
  }
});

// 2. Keyboard 'keydown' event: detect Enter key to trigger search message
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = this.value.trim();

    if (query) {
      // Display 'Searching for: [entered text]'
      searchResultText.textContent = `Searching for: "${query}"`;
      searchResultBanner.style.display = 'flex';
    } else {
      searchResultText.textContent = 'Searching for: [All Products]';
      searchResultBanner.style.display = 'flex';
    }
  }
});

