/**
 * CSI3029 Assessment Q41: Campus Gallery Navigation via Arrow Keys & Enter
 * Demonstrates ArrowRight, ArrowLeft and Enter keydown events
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const landmarks = [
  {
    title: "Technology Tower (TT)",
    zone: "Academic Complex",
    svg: `<svg viewBox="0 0 600 280" class="landmark-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyTT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0F172A"/><stop offset="100%" stop-color="#1E293B"/></linearGradient>
        <linearGradient id="glassTT" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#38BDF8"/><stop offset="100%" stop-color="#0284C7"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyTT)"/>
      <!-- Sun/Moon Glow -->
      <circle cx="480" cy="70" r="35" fill="#FBBF24" opacity="0.2"/>
      <circle cx="480" cy="70" r="22" fill="#FBBF24" opacity="0.7"/>
      <!-- Ground -->
      <rect x="0" y="240" width="600" height="40" fill="#047857"/>
      <!-- Technology Tower Main Pillar Structure -->
      <rect x="220" y="40" width="160" height="200" rx="4" fill="#334155" stroke="#475569" stroke-width="2"/>
      <rect x="240" y="55" width="120" height="185" fill="url(#glassTT)" opacity="0.85"/>
      <!-- Window Grids -->
      <line x1="240" y1="90" x2="360" y2="90" stroke="#0C4A6E" stroke-width="2"/>
      <line x1="240" y1="125" x2="360" y2="125" stroke="#0C4A6E" stroke-width="2"/>
      <line x1="240" y1="160" x2="360" y2="160" stroke="#0C4A6E" stroke-width="2"/>
      <line x1="240" y1="195" x2="360" y2="195" stroke="#0C4A6E" stroke-width="2"/>
      <line x1="280" y1="55" x2="280" y2="240" stroke="#0C4A6E" stroke-width="2"/>
      <line x1="320" y1="55" x2="320" y2="240" stroke="#0C4A6E" stroke-width="2"/>
      <!-- Spire / Dome -->
      <polygon points="300,15 285,40 315,40" fill="#38BDF8"/>
      <!-- Side Wings -->
      <rect x="150" y="110" width="70" height="130" fill="#1E293B" stroke="#334155"/>
      <rect x="380" y="110" width="70" height="130" fill="#1E293B" stroke="#334155"/>
      <!-- Label -->
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">TECHNOLOGY TOWER (TT)</text>
    </svg>`
  },
  {
    title: "Main Building & Fountain (MB)",
    zone: "Administrative Zone",
    svg: `<svg viewBox="0 0 600 280" class="landmark-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyMB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#111827"/><stop offset="100%" stop-color="#1F2937"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyMB)"/>
      <rect x="0" y="235" width="600" height="45" fill="#065F46"/>
      <!-- Main Colonial Architecture Facade -->
      <rect x="120" y="70" width="360" height="165" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
      <!-- Central Pediment / Portico -->
      <polygon points="300,30 200,70 400,70" fill="#DC2626"/>
      <!-- Columns -->
      <rect x="230" y="70" width="16" height="165" fill="#E2E8F0"/>
      <rect x="270" y="70" width="16" height="165" fill="#E2E8F0"/>
      <rect x="314" y="70" width="16" height="165" fill="#E2E8F0"/>
      <rect x="354" y="70" width="16" height="165" fill="#E2E8F0"/>
      <!-- Main Entrance Arch -->
      <path d="M280,180 A20,20 0 0,1 320,180 L320,235 L280,235 Z" fill="#991B1B"/>
      <!-- Fountain -->
      <ellipse cx="300" cy="245" rx="55" ry="14" fill="#0284C7"/>
      <path d="M300,240 Q300,205 285,215 Q300,205 315,215" stroke="#38BDF8" stroke-width="3" fill="none"/>
      <text x="300" y="268" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">MAIN ADMINISTRATIVE BLOCK</text>
    </svg>`
  },
  {
    title: "Periyar Central Library",
    zone: "Learning Commons",
    svg: `<svg viewBox="0 0 600 280" class="landmark-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyLIB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#090D16"/><stop offset="100%" stop-color="#1E1B4B"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyLIB)"/>
      <rect x="0" y="240" width="600" height="40" fill="#064E3B"/>
      <!-- Modern Cylindrical Circular Library Architecture -->
      <path d="M160,80 C160,80 300,50 440,80 L440,240 L160,240 Z" fill="#4338CA"/>
      <!-- Tiered Glazed Glass Ring -->
      <path d="M180,105 C180,105 300,85 420,105 L420,155 C420,155 300,135 180,155 Z" fill="#6366F1" opacity="0.8"/>
      <path d="M190,175 C190,175 300,160 410,175 L410,225 C410,225 300,210 190,225 Z" fill="#818CF8" opacity="0.7"/>
      <!-- Center Knowledge Symbol -->
      <circle cx="300" cy="115" r="18" fill="#FBBF24"/>
      <polygon points="300,105 290,122 310,122" fill="#1E1B4B"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">PERIYAR CENTRAL LIBRARY</text>
    </svg>`
  },
  {
    title: "Dr. B.R. Ambedkar & Anna Auditorium",
    zone: "Cultural Centre",
    svg: `<svg viewBox="0 0 600 280" class="landmark-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyAUD" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#022C22"/><stop offset="100%" stop-color="#064E3B"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyAUD)"/>
      <rect x="0" y="240" width="600" height="40" fill="#065F46"/>
      <!-- Massive Curved Aerodynamic Roof Structure -->
      <path d="M120,120 Q300,20 480,120 L480,240 L120,240 Z" fill="#F59E0B"/>
      <!-- Auditorium Glass Portal Entrance -->
      <rect x="180" y="140" width="240" height="100" rx="6" fill="#1E293B" stroke="#FDE68A" stroke-width="2"/>
      <rect x="200" y="155" width="200" height="85" fill="#38BDF8" opacity="0.6"/>
      <polygon points="300,90 280,120 320,120" fill="#FFFFFF"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">ANNA CONVOCATION AUDITORIUM</text>
    </svg>`
  }
];

let currentIndex = 0;

const imageDisplay = document.getElementById('imageDisplay');
const landmarkTitle = document.getElementById('landmarkTitle');
const landmarkIndex = document.getElementById('landmarkIndex');
const landmarkZone = document.getElementById('landmarkZone');
const selectionAlert = document.getElementById('selectionAlert');

function renderCurrentLandmark() {
  const item = landmarks[currentIndex];
  imageDisplay.innerHTML = item.svg;
  landmarkTitle.textContent = item.title;
  landmarkIndex.textContent = `${currentIndex + 1} of ${landmarks.length}`;
  landmarkZone.textContent = item.zone;

  // Reset selection status on navigation
  selectionAlert.textContent = "Press Enter to select this campus landmark";
  selectionAlert.className = "selection-banner idle";
}

// 1. Arrow Navigation Handler
function navigate(direction) {
  currentIndex = (currentIndex + direction + landmarks.length) % landmarks.length;
  renderCurrentLandmark();
}

// 2. Enter Key Selection Handler
function selectCurrentLandmark() {
  const item = landmarks[currentIndex];
  selectionAlert.textContent = `✓ Image Selected: ${item.title} (${item.zone})`;
  selectionAlert.className = "selection-banner selected";
}

// 3. Keyboard Event Listener (keydown)
window.addEventListener('keydown', function (e) {
  // ArrowRight: Next campus landmark
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    navigate(1);
  }
  // ArrowLeft: Previous campus landmark
  else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    navigate(-1);
  }
  // Enter: Select current image
  else if (e.key === 'Enter') {
    e.preventDefault();
    selectCurrentLandmark();
  }
});

// Initial Render
renderCurrentLandmark();

