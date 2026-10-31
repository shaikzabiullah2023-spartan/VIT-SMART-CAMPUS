/**
 * VIT SMART CAMPUS – GALLERY & KEYBOARD HOTKEYS ENGINE (gallery.js)
 * Campus Landmarks, Global Travel, and Nature Gallery with keyboard event hooks
 * Author: Shaik Zabiullah (23MIC0007), VIT Vellore
 */

// 1. Campus Landmarks Data
const CAMPUS_LANDMARKS = [
  {
    title: "Technology Tower (TT)",
    zone: "Academic Complex",
    desc: "Iconic central engineering hub housing smart computing laboratories, lecture halls, and faculty chambers.",
    icon: "🏢",
    bg: "linear-gradient(135deg, #1e3a8a, #0369a1)"
  },
  {
    title: "Main Administrative Building (MB)",
    zone: "Heritage Core",
    desc: "Colonial-inspired administrative headquarters featuring the grand central fountain and convocation courtyard.",
    icon: "🏛️",
    bg: "linear-gradient(135deg, #991b1b, #dc2626)"
  },
  {
    title: "Periyar Central Library",
    zone: "Learning Commons",
    desc: "Modern multi-tier circular research facility housing over 300,000 volumes, e-journals, and 24/7 digital study zones.",
    icon: "📚",
    bg: "linear-gradient(135deg, #312e81, #4f46e5)"
  },
  {
    title: "Dr. B.R. Ambedkar & Anna Auditorium",
    zone: "Cultural Center",
    desc: "State-of-the-art 4,000-seat acoustic auditorium for international symposiums, cultural fests, and graduations.",
    icon: "🎭",
    bg: "linear-gradient(135deg, #b45309, #f59e0b)"
  }
];

// 2. Global Travel Destinations Data
const TRAVEL_DESTINATIONS = [
  {
    name: "Kyoto · Fushimi Inari Shrine",
    country: "Japan · East Asia",
    details: "Ancient mountain trail bordered by over 10,000 vermilion Shinto torii gates through tranquil cedar forests.",
    icon: "⛩️",
    bg: "linear-gradient(135deg, #831843, #be185d)"
  },
  {
    name: "Matterhorn · Zermatt Alpine Peak",
    country: "Switzerland · Central Europe",
    details: "The legendary 4,478m pyramid peak overlooking snowbound ski valleys and traditional wooden alpine chalets.",
    icon: "🏔️",
    bg: "linear-gradient(135deg, #0369a1, #0284c7)"
  },
  {
    name: "Ooty Nilgiri Tea Hills",
    country: "Tamil Nadu · India",
    details: "Misty emerald tea plantations and fragrant eucalyptus forests across the high Western Ghats biosphere.",
    icon: "🌿",
    bg: "linear-gradient(135deg, #064e3b, #047857)"
  },
  {
    name: "Oia Caldera & Blue Domes",
    country: "Santorini · Greece",
    details: "Cliffside whitewashed cubic villas and cobalt church domes perched high above the Aegean Sea sunset.",
    icon: "⛪",
    bg: "linear-gradient(135deg, #1d4ed8, #3b82f6)"
  },
  {
    name: "Taj Mahal Monument of Love",
    country: "Agra, Uttar Pradesh · India",
    details: "UNESCO World Heritage ivory-white marble mausoleum on the Yamuna riverbank, flanked by symmetry reflection pools.",
    icon: "🕌",
    bg: "linear-gradient(135deg, #701a75, #a21caf)"
  }
];

let currentCampusIndex = 0;
let currentTravelIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderCampusSlide();
  renderTravelSlide();
  initGalleryKeyEvents();
});

/* --------------------------------------------------------------------------
   CAMPUS GALLERY (Q41: ArrowLeft, ArrowRight, Enter)
   -------------------------------------------------------------------------- */
function renderCampusSlide() {
  const item = CAMPUS_LANDMARKS[currentCampusIndex];
  const stage = document.getElementById('campusImageStage');
  const titleEl = document.getElementById('campusTitle');
  const zoneEl = document.getElementById('campusZone');
  const descEl = document.getElementById('campusDesc');
  const indicatorEl = document.getElementById('campusIndicator');
  const selectionBanner = document.getElementById('campusSelectionBanner');

  if (!stage) return;

  stage.style.background = item.bg;
  stage.innerHTML = `<span style="font-size: 80px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));">${item.icon}</span>`;
  
  if (titleEl) titleEl.textContent = item.title;
  if (zoneEl) zoneEl.textContent = item.zone;
  if (descEl) descEl.textContent = item.desc;
  if (indicatorEl) indicatorEl.textContent = `${currentCampusIndex + 1} of ${CAMPUS_LANDMARKS.length}`;
  
  if (selectionBanner) {
    selectionBanner.textContent = 'Press Enter or click "Select" to confirm';
    selectionBanner.className = 'alert alert-info';
    selectionBanner.style.display = 'none';
  }
}

function nextCampusImage() {
  currentCampusIndex = (currentCampusIndex + 1) % CAMPUS_LANDMARKS.length;
  renderCampusSlide();
}

function prevCampusImage() {
  currentCampusIndex = (currentCampusIndex - 1 + CAMPUS_LANDMARKS.length) % CAMPUS_LANDMARKS.length;
  renderCampusSlide();
}

function selectCampusImage() {
  const item = CAMPUS_LANDMARKS[currentCampusIndex];
  const banner = document.getElementById('campusSelectionBanner');
  if (banner) {
    banner.textContent = `✓ Image Selected: ${item.title} (${item.zone})`;
    banner.className = 'alert alert-success';
    banner.style.display = 'flex';
  }
  window.showToast?.(`Selected: ${item.title}`, 'success');
}

/* --------------------------------------------------------------------------
   TRAVEL GALLERY (Q42: N, P, Spacebar)
   -------------------------------------------------------------------------- */
function renderTravelSlide() {
  const item = TRAVEL_DESTINATIONS[currentTravelIndex];
  const stage = document.getElementById('travelImageStage');
  const indicatorEl = document.getElementById('travelIndicator');
  const destCard = document.getElementById('travelDestCard');
  const destName = document.getElementById('travelDestName');
  const destCountry = document.getElementById('travelDestCountry');

  if (!stage) return;

  stage.style.background = item.bg;
  stage.innerHTML = `<span style="font-size: 80px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));">${item.icon}</span>`;
  
  if (indicatorEl) indicatorEl.textContent = `Destination ${currentTravelIndex + 1} of ${TRAVEL_DESTINATIONS.length}`;

  // Hide destination card until spacebar is pressed
  if (destCard) {
    destCard.className = 'card' ;
    destCard.style.borderColor = 'var(--border-light)';
  }
  if (destName) destName.textContent = 'Press Spacebar or click "Reveal" to identify location';
  if (destCountry) destCountry.textContent = 'Destination awaiting hotkey reveal...';
}

function nextTravelDestination() {
  currentTravelIndex = (currentTravelIndex + 1) % TRAVEL_DESTINATIONS.length;
  renderTravelSlide();
}

function prevTravelDestination() {
  currentTravelIndex = (currentTravelIndex - 1 + TRAVEL_DESTINATIONS.length) % TRAVEL_DESTINATIONS.length;
  renderTravelSlide();
}

function revealTravelDestination() {
  const item = TRAVEL_DESTINATIONS[currentTravelIndex];
  const destCard = document.getElementById('travelDestCard');
  const destName = document.getElementById('travelDestName');
  const destCountry = document.getElementById('travelDestCountry');

  if (destName) destName.textContent = `${item.name}`;
  if (destCountry) destCountry.textContent = `${item.country} — ${item.details}`;
  if (destCard) {
    destCard.style.borderColor = 'var(--brand-cyan)';
    destCard.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.25)';
  }
  window.showToast?.(`Discovered: ${item.name}`, 'info');
}

/* --------------------------------------------------------------------------
   GLOBAL KEYBOARD EVENT LISTENER
   -------------------------------------------------------------------------- */
function initGalleryKeyEvents() {
  window.addEventListener('keydown', (e) => {
    // Only capture hotkeys if user is not typing in a text field
    const activeTag = document.activeElement.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
      return;
    }

    // Campus Gallery Hotkeys
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextCampusImage();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevCampusImage();
    } else if (e.key === 'Enter') {
      const campusStage = document.getElementById('campusImageStage');
      if (campusStage) {
        e.preventDefault();
        selectCampusImage();
      }
    }

    // Travel Gallery Hotkeys
    if (e.key === 'N' || e.key === 'n') {
      e.preventDefault();
      nextTravelDestination();
    } else if (e.key === 'P' || e.key === 'p') {
      e.preventDefault();
      prevTravelDestination();
    } else if (e.key === ' ' || e.code === 'Space') {
      const travelStage = document.getElementById('travelImageStage');
      if (travelStage) {
        e.preventDefault();
        revealTravelDestination();
      }
    }
  });
}

// Global Expose
window.nextCampusImage = nextCampusImage;
window.prevCampusImage = prevCampusImage;
window.selectCampusImage = selectCampusImage;
window.nextTravelDestination = nextTravelDestination;
window.prevTravelDestination = prevTravelDestination;
window.revealTravelDestination = revealTravelDestination;

