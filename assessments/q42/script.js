/**
 * CSI3029 Assessment Q42: Travel Photo Gallery with Hotkeys
 * Keydown Detection for 'N' (Next), 'P' (Previous), and 'Spacebar' (Reveal Location)
 * Author: SHAIK ZABIULLAH (23MIC0007), VIT Vellore
 */

const destinations = [
  {
    name: "Kyoto · Fushimi Inari Shrine",
    country: "Japan · East Asia",
    details: "Famous for its thousands of vermilion torii gates winding through ancient cedar forests.",
    svg: `<svg viewBox="0 0 600 280" class="travel-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyKyoto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4C1D95"/><stop offset="60%" stop-color="#BE185D"/><stop offset="100%" stop-color="#FDE047"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyKyoto)"/>
      <!-- Sun -->
      <circle cx="300" cy="150" r="45" fill="#EF4444" opacity="0.9"/>
      <!-- Mount Fuji Silhouette -->
      <polygon points="300,100 180,240 420,240" fill="#312E81"/>
      <polygon points="300,100 260,146 340,146" fill="#FFFFFF"/>
      <rect x="0" y="235" width="600" height="45" fill="#1E1B4B"/>
      <!-- Torii Gate Foreground -->
      <rect x="180" y="80" width="240" height="18" rx="4" fill="#DC2626"/>
      <path d="M160,82 Q300,70 440,82 L440,94 Q300,82 160,94 Z" fill="#991B1B"/>
      <rect x="195" y="112" width="210" height="12" fill="#DC2626"/>
      <!-- Pillars -->
      <rect x="220" y="94" width="20" height="150" fill="#DC2626"/>
      <rect x="360" y="94" width="20" height="150" fill="#DC2626"/>
      <rect x="216" y="225" width="28" height="20" fill="#0F172A"/>
      <rect x="356" y="225" width="28" height="20" fill="#0F172A"/>
      <!-- Sakura petals -->
      <circle cx="120" cy="80" r="4" fill="#FBCFE8"/>
      <circle cx="150" cy="110" r="5" fill="#F472B6"/>
      <circle cx="480" cy="90" r="4" fill="#FBCFE8"/>
      <circle cx="510" cy="130" r="5" fill="#F472B6"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">FUSHIMI INARI · KYOTO</text>
    </svg>`
  },
  {
    name: "Matterhorn · Zermatt Alpine Peak",
    country: "Switzerland · Central Europe",
    details: "Iconic jagged pyramid summit rising 4,478 meters above snowbound alpine meadows.",
    svg: `<svg viewBox="0 0 600 280" class="travel-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skySwiss" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0284C7"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skySwiss)"/>
      <!-- Alpine Peaks -->
      <polygon points="300,40 160,230 440,230" fill="#475569"/>
      <polygon points="300,40 240,120 340,120" fill="#FFFFFF"/>
      <polygon points="300,40 340,120 300,230" fill="#64748B"/>
      <!-- Side Ridge -->
      <polygon points="170,120 60,240 280,240" fill="#334155"/>
      <polygon points="170,120 130,165 210,165" fill="#E2E8F0"/>
      <!-- Snow field -->
      <rect x="0" y="230" width="600" height="50" fill="#F8FAFC"/>
      <!-- Pine Trees -->
      <polygon points="90,190 75,235 105,235" fill="#064E3B"/>
      <polygon points="130,180 110,235 150,235" fill="#047857"/>
      <polygon points="490,185 470,235 510,235" fill="#064E3B"/>
      <!-- Swiss Chalet -->
      <rect x="270" y="210" width="50" height="30" fill="#78350F"/>
      <polygon points="295,190 260,212 330,212" fill="#FEF08A"/>
      <rect x="290" y="222" width="10" height="18" fill="#451A03"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A">MATTERHORN · SWISS ALPS</text>
    </svg>`
  },
  {
    name: "Ooty Nilgiri Tea Hills & Blue Mountains",
    country: "Tamil Nadu · India",
    details: "Misty emerald tea plantations nestled in the high-altitude Western Ghats Biosphere Reserve.",
    svg: `<svg viewBox="0 0 600 280" class="travel-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyOoty" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#064E3B"/><stop offset="100%" stop-color="#6EE7B7"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyOoty)"/>
      <ellipse cx="300" cy="80" rx="40" ry="40" fill="#FEF08A" opacity="0.4"/>
      <!-- Rolling Hills -->
      <path d="M0,130 Q150,80 300,140 Q450,200 600,120 L600,280 L0,280 Z" fill="#065F46"/>
      <path d="M0,170 Q200,120 400,180 Q500,210 600,160 L600,280 L0,280 Z" fill="#047857"/>
      <path d="M0,210 Q180,180 360,220 Q480,240 600,200 L600,280 L0,280 Z" fill="#059669"/>
      <!-- Tea Rows Contour lines -->
      <path d="M40,230 Q180,205 340,235" stroke="#10B981" stroke-width="2" fill="none"/>
      <path d="M60,245 Q220,225 400,250" stroke="#10B981" stroke-width="2" fill="none"/>
      <!-- Tall Eucalyptus -->
      <line x1="500" y1="110" x2="500" y2="240" stroke="#78350F" stroke-width="3"/>
      <ellipse cx="500" cy="115" rx="14" ry="30" fill="#064E3B"/>
      <line x1="530" y1="130" x2="530" y2="240" stroke="#78350F" stroke-width="3"/>
      <ellipse cx="530" cy="135" rx="12" ry="25" fill="#065F46"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ECFDF5">OOTY · NILGIRI BLUE MOUNTAINS</text>
    </svg>`
  },
  {
    name: "Santorini Caldera & Blue Dome",
    country: "Cyclades Islands · Greece",
    details: "Perched high above the Aegean Sea, renowned for white cubic architecture and cobalt church domes.",
    svg: `<svg viewBox="0 0 600 280" class="travel-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGreece" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0284C7"/><stop offset="100%" stop-color="#E0F2FE"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyGreece)"/>
      <circle cx="500" cy="60" r="30" fill="#FBBF24"/>
      <!-- Deep Blue Aegean Sea -->
      <rect x="0" y="160" width="600" height="120" fill="#0369A1"/>
      <line x1="100" y1="180" x2="250" y2="180" stroke="#38BDF8" stroke-width="2"/>
      <line x1="320" y1="200" x2="480" y2="200" stroke="#38BDF8" stroke-width="2"/>
      <!-- White Cliffside Village -->
      <polygon points="0,110 220,130 280,280 0,280" fill="#78350F"/>
      <!-- White Houses -->
      <rect x="80" y="130" width="80" height="60" fill="#FFFFFF" rx="2"/>
      <rect x="140" y="100" width="90" height="70" fill="#F8FAFC" rx="2"/>
      <!-- Blue Dome Church -->
      <path d="M165,100 A25,25 0 0,1 215,100 Z" fill="#2563EB"/>
      <rect x="187" y="70" width="6" height="12" fill="#FFFFFF"/>
      <line x1="184" y1="74" x2="196" y2="74" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Windmill -->
      <circle cx="45" cy="140" r="18" fill="#FFFFFF"/>
      <polygon points="45,115 35,140 55,140" fill="#FDE68A"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#F8FAFC">OIA · SANTORINI CALDERA</text>
    </svg>`
  },
  {
    name: "Taj Mahal Monument of Love",
    country: "Agra, Uttar Pradesh · India",
    details: "UNESCO World Heritage ivory-white marble mausoleum on the right bank of the Yamuna River.",
    svg: `<svg viewBox="0 0 600 280" class="travel-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyTaj" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A044E"/><stop offset="50%" stop-color="#C026D3"/><stop offset="100%" stop-color="#FDE047"/></linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#skyTaj)"/>
      <rect x="0" y="215" width="600" height="65" fill="#701A75"/>
      <!-- Taj Plinth Base -->
      <rect x="160" y="195" width="280" height="20" fill="#FDF4FF"/>
      <!-- Main Dome Structure -->
      <rect x="220" y="115" width="160" height="80" fill="#FDF4FF"/>
      <!-- Central Arch (Iwan) -->
      <path d="M260,195 L260,140 A20,20 0 0,1 340,140 L340,195 Z" fill="#4A044E"/>
      <!-- Grand Onion Dome -->
      <path d="M270,115 Q260,65 300,45 Q340,65 330,115 Z" fill="#FFFFFF"/>
      <line x1="300" y1="35" x2="300" y2="45" stroke="#FBBF24" stroke-width="2"/>
      <!-- Minarets -->
      <rect x="170" y="70" width="12" height="125" fill="#FFFFFF"/>
      <polygon points="176,55 168,70 184,70" fill="#FFFFFF"/>
      <rect x="418" y="70" width="12" height="125" fill="#FFFFFF"/>
      <polygon points="424,55 416,70 432,70" fill="#FFFFFF"/>
      <!-- Reflection Pool -->
      <rect x="250" y="215" width="100" height="65" fill="#3B0764"/>
      <path d="M280,240 Q300,225 320,240" stroke="#F472B6" stroke-width="1.5" fill="none"/>
      <text x="300" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#FDF4FF">TAJ MAHAL · AGRA</text>
    </svg>`
  }
];

let currentIndex = 0;

const travelScene = document.getElementById('travelScene');
const slideIndicator = document.getElementById('slideIndicator');
const destinationCard = document.getElementById('destinationCard');
const destName = document.getElementById('destName');
const destCountry = document.getElementById('destCountry');

function renderScene() {
  const item = destinations[currentIndex];
  travelScene.innerHTML = item.svg;
  slideIndicator.textContent = `Destination ${currentIndex + 1} of ${destinations.length}`;

  // Reset destination display state until Spacebar is pressed
  destinationCard.className = "destination-card idle";
  destName.textContent = "Press Spacebar to identify location";
  destCountry.textContent = "Travel discovery awaiting hotkey trigger...";
}

// 1. Hotkey Navigation Handler (N / n -> Next; P / p -> Previous)
function navigateDestination(direction) {
  currentIndex = (currentIndex + direction + destinations.length) % destinations.length;
  renderScene();
}

// 2. Spacebar Reveal Handler
function revealCurrentDestination() {
  const item = destinations[currentIndex];
  destName.textContent = item.name;
  destCountry.textContent = `${item.country} — ${item.details}`;
  destinationCard.className = "destination-card revealed";
}

// 3. Keyboard Event Listener (keydown)
window.addEventListener('keydown', function (e) {
  // N or n: Next Destination
  if (e.key === 'N' || e.key === 'n') {
    e.preventDefault();
    navigateDestination(1);
  }
  // P or p: Previous Destination
  else if (e.key === 'P' || e.key === 'p') {
    e.preventDefault();
    navigateDestination(-1);
  }
  // Spacebar: Reveal destination name below image
  else if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    revealCurrentDestination();
  }
});

// Initial Render
renderScene();

