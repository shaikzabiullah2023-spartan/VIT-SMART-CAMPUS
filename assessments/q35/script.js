/**
 * CSI3029 Assessment Q35: Interactive E-Commerce Product Card
 * Mouseover Specs Reveal & Click-to-View Details Handling
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const imageWrapper = document.getElementById('imageWrapper');
const productImageContainer = document.getElementById('productImageContainer');
const specsOverlay = document.getElementById('specsOverlay');
const viewDetailsBtn = document.getElementById('viewDetailsBtn');
const detailsOutput = document.getElementById('detailsOutput');

let isDetailsOpen = false;

// 1. Mouseover Event: Enlarge image slightly & display specifications
imageWrapper.addEventListener('mouseover', function () {
  productImageContainer.classList.add('enlarged');
  specsOverlay.classList.add('visible');
});

// 2. Mouseleave Event: Reset image appearance and hide specifications
imageWrapper.addEventListener('mouseleave', function () {
  productImageContainer.classList.remove('enlarged');
  specsOverlay.classList.remove('visible');
});

// 3. Click Event: Toggle price & availability details below card
viewDetailsBtn.addEventListener('click', function () {
  isDetailsOpen = !isDetailsOpen;
  
  if (isDetailsOpen) {
    detailsOutput.style.display = 'flex';
    viewDetailsBtn.querySelector('span').textContent = 'Hide Details';
    viewDetailsBtn.querySelector('svg').style.transform = 'rotate(180deg)';
  } else {
    detailsOutput.style.display = 'none';
    viewDetailsBtn.querySelector('span').textContent = 'View Details';
    viewDetailsBtn.querySelector('svg').style.transform = 'rotate(0deg)';
  }
});

