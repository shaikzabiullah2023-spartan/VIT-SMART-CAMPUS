# VERDANT — The Future of Sustainable Living
## Small Choices. Lasting Impact.

[![React](https://img.shields.io/badge/React-19.3-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-ca4245.svg)](https://reactrouter.com/)
[![Recharts](https://img.shields.io/badge/Recharts-Analytics-22c55e.svg)](https://recharts.org/)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()

> **VERDANT** is a high-end, responsive multi-page digital platform that connects conscious citizens with audited eco-friendly products, interactive environmental footprint telemetry, editorial journalism, and collaborative community habit challenges.

---

## 🌿 Brand Identity & Design System

- **Brand**: VERDANT
- **Tagline**: *Small Choices. Lasting Impact.*
- **Domain**: Sustainability, Eco-Friendly Lifestyle & Green Commerce
- **Color Palette**:
  - **Deep Forest Green** (`#153D2B`): Primary grounding color representing ancient canopies
  - **Sage Green** (`#A8B99A`): Soothing organic accents and progress indicators
  - **Soft Cream** (`#F6F4EA`): Warm, gentle background honoring unbleached recycled paper
  - **Warm White** (`#FFFFFF`): Clean card surfaces and content cards
  - **Earth Brown** (`#92765A`): Terrestrial typography accents and artisan roots
  - **Charcoal** (`#252B26`): High-legibility editorial text
- **Typography**:
  - Headings: *Playfair Display* (Editorial serif elegance)
  - Body: *Plus Jakarta Sans* (Clean, modern geometric sans-serif)

---

## 🚀 Key Pages & Architecture

### 1. Home (`/`)
- Hero banner with asymmetric collage: *"Live Better. Leave a Lighter Footprint."*
- Quick action CTA buttons: **Explore Marketplace** & **Calculate Your Impact**
- Real-time sustainability telemetry:
  - 14,280+ Products Discovered
  - 58,400+ Sustainable Swaps Completed
  - 32,900+ Community Members
  - 142 Tonnes Estimated Waste Avoided
- Curated Featured Eco-Essentials grid with real-time rating and price cards
- The 4 Sustainability Pillars (*Radical Transparency*, *Zero Planned Obsolescence*, *100% Carbon-Neutral Delivery*, *2% Planet Pledge*)
- Interactive Community Habit Challenges preview
- Authentic community impact stories and testimonials
- *The Sunday Sprout* newsletter subscription section

### 2. Eco Marketplace (`/marketplace`)
- Complete eco-friendly shopping experience with 14 realistic demo products
- Product categories:
  - Sustainable Fashion (Organic Linen, Himalayan Hemp, Khadi Cotton)
  - Home and Living (Terracotta Water Carafes, Natural Pine Soy Candles)
  - Personal Care (Cold-Pressed Botanical Shampoo Bars, Brass Safety Razors)
  - Reusable Essentials (Insulated Stainless Bento Boxes, Binchotan Charcoal, Cork Mats)
  - Eco-Friendly Technology (Bamboo Acoustic Speakers, Solar Powerbanks, Wheat-Straw Mice)
- Real-time keyword search across titles, descriptions, and materials
- Dynamic price range slider (₹500 to ₹7,000)
- Sorting: Featured, Price Low-High, Price High-Low, Highest Rated, Most Reviewed
- "In Stock Only" toggle filter
- Direct **Add to Cart** with reactive cart badge and drawer open

### 3. Product Details (`/product/:id`)
- High-resolution product image gallery with thumbnail switcher
- INR (`₹`) pricing with discount percentage calculations
- Verified Ecological Impact callout (e.g. *Saves 2,400L fresh water*)
- Quantity adjuster and instant Add to Cart integration
- Certified materials breakdown list & lifecycle sustainability notes
- Accordions for *Certified Materials & Ingredients*, *Lifelong Benefits & Longevity*, and *Zero-Plastic Delivery & Ethical Returns*
- Related products recommendations from the same category
- Social share button with clipboard link copy toast

### 4. Personal Impact Calculator (`/impact`)
- Real-time environmental footprint modeling engine:
  - Daily commute distance & transportation mode (Walking/Bike, Transit, EV, Petrol)
  - Monthly power consumption (kWh) & Solar clean share (%)
  - Single-use plastic bottles, takeout trays, and carry bags per week
  - Primary dietary lifestyle (100% Plant-Based, Vegetarian, Flexitarian, Regular Meat)
  - Shopping habits (Mindful / Slow vs Frequent)
- Real-time computed metrics:
  - Estimated annual carbon footprint (Tonnes of CO₂e)
  - Annual plastic waste generated (kg & item count)
  - Water footprint (thousands of liters)
- **Interactive Recharts Visualizations**:
  - Donut chart showing category-wise emissions breakdown (Transport, Electricity, Diet, Goods, Plastic)
  - Bar chart benchmarking user footprint against Indian national average, global average, and 2050 net-zero targets
- Dynamic, personalized recommendations tailored to the user's highest emission driver
- Reset button to restore defaults and clear methodology disclosure

### 5. The Green Journal (`/journal`)
- Premium editorial magazine platform
- Featured cover essay with full-width photography, read time, and author profile
- Category filtering (*Sustainable Fashion*, *Zero-Waste Living*, *Eco-Friendly Tech*, *Conscious Consumerism*, *Climate Action*)
- Search bar filtering across article titles, excerpts, and tags
- 6 in-depth realistic essays with reading time metrics

### 6. Journal Article Reading Experience (`/journal/:id`)
- Full editorial layout with pull quotes, section headings, and structured takeaway boxes
- Author credential bio banner
- Reading progress indicator and bookmarking feature
- Social sharing with toast feedback
- "Continue Reading" related essay recommendations

### 7. Community & Green Challenges (`/community`)
- Weekly green habit challenges (*Zero-Waste Lunchbox Week*, *Plant-Powered Plate Odyssey*, *Low-Carbon Commute Quest*, *The 30-Day Wardrobe Pause*)
- Interactive **Join Challenge** and daily task checklist with persistence in `localStorage`
- Real-time Eco-Points accumulator and unlocked badge shelf (*Early Adopter*, *Seed Sower*, *Tiffin Master*, *Green Gourmet*, *Pedal Pioneer*, *Circular Stylist*)
- Confetti celebration upon finishing all tasks in a challenge!
- Monthly community leaderboard with demo members, rankings, points, and avatars
- Community stories submission form with instant live feed posting

### 8. About Us (`/about`)
- The VERDANT mission, vision, and core philosophy
- 4 Core Values with custom iconography
- Multidisciplinary team bios (Material scientists, agroforesters, environmental economists)
- Company milestones timeline (2024 to 2026)

### 9. Contact & Support (`/contact`)
- Interactive contact form with category selector (Support, Artisan Partnerships, Press, General)
- Client-side validation with error states
- Loading submission animation and success confirmation with reset
- Studio location in Bengaluru, direct contact emails, and operating hours
- Searchable FAQ accordion covering brand auditing, packaging, carbon neutrality, and return policies

---

## 🛍️ Interactive Shopping Cart System (`CartDrawer`)

- Slide-in side drawer accessible from anywhere on the site
- Visual free-shipping progress bar (*"Add ₹X more for Zero-Plastic Free Delivery"*)
- Quantity increment / decrement / item removal
- Optional **₹49 Verified Mangrove Reforestation Offset** toggle
- Subtotal, Shipping, and Grand Total calculation in INR (`₹`)
- Simulated Eco-Checkout workflow with animated order ID generation, carbon offset certification, and celebratory confetti!
- Persistent cart state across browser sessions via `localStorage`

---

## 🛠️ Technology Stack & Dependencies

| Tool | Purpose |
|---|---|
| **React 19** | Modern component-based user interface |
| **Vite 8** | High-performance build tool and hot module replacement |
| **Tailwind CSS v4** | Modern utility-first CSS with `@theme` token definitions |
| **React Router v7** | Declarative client-side routing with `ScrollToTop` |
| **Lucide React** | Consistent, lightweight vector iconography |
| **Recharts** | Declarative SVG data visualizations for impact metrics |
| **Canvas Confetti** | Delightful micro-interactions for completions and checkout |

---

## 💻 Local Development & Launch Instructions

### 1. Navigate to Project Directory
```powershell
cd C:\Users\useR\.gemini\antigravity\scratch\verdant
```

### 2. Start the Development Server
```powershell
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Build for Production
```powershell
npm run build
```

---

## 📁 Project Directory Structure

```
C:\Users\useR\.gemini\antigravity\scratch\verdant\
│
├── index.html                     # HTML5 entry with Google Fonts (Playfair + Plus Jakarta)
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite config with React & Tailwind v4 plugins
├── README.md                      # Comprehensive project documentation
│
└── src/
    ├── main.jsx                   # React root entry point
    ├── App.jsx                    # Root component with routing, layout & providers
    ├── index.css                  # Tailwind v4 theme, fonts, custom glassmorphism styles
    │
    ├── components/
    │   ├── Navbar.jsx             # Sticky glassmorphism header & mobile navigation
    │   ├── Footer.jsx             # Comprehensive footer with links, badges & newsletter
    │   ├── ProductCard.jsx        # Product card with price, eco-badge, rating & cart CTA
    │   ├── CategoryFilter.jsx     # Horizontal scrollable category pill selector
    │   ├── SearchBar.jsx          # Search input with live icon & clear button
    │   ├── CartDrawer.jsx         # Slide-in cart, free shipping bar & checkout simulator
    │   ├── Newsletter.jsx         # Editorial newsletter signup with validation
    │   ├── StatisticsCard.jsx     # Metric card with label, value & subtext
    │   ├── ChallengeCard.jsx      # Interactive challenge card with task checklist
    │   └── ImpactChart.jsx        # Recharts Donut & Benchmark Bar charts
    │
    ├── context/
    │   ├── CartContext.jsx        # Shopping cart state & localStorage persistence
    │   ├── ChallengeContext.jsx   # Challenge progress, points, badges & persistence
    │   └── ToastContext.jsx       # Global toast notification queue
    │
    ├── data/
    │   ├── products.js            # 14 realistic eco-friendly products in INR
    │   ├── articles.js            # 6 in-depth editorial articles
    │   ├── challenges.js          # Community challenges, leaderboard & stories
    │   ├── stats.js               # Sustainability metrics & 4 pillars
    │   ├── team.js                # Mission, values, team bios & timeline milestones
    │   └── faq.js                 # Categorized frequently asked questions
    │
    └── utils/
        └── formatters.js          # Currency (INR ₹), date & number formatting utilities
```
