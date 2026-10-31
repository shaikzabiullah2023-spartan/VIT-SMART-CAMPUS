# CSI3029 – Front End Design and Testing (Lab) Portfolio
### 42 Lab Assessments · One Master Front-End Portfolio

**Student:** SHAIK ZABIULLAH  
**Registration Number:** 23MIC0007  
**Institution:** Vellore Institute of Technology (VIT), Vellore  
**Course Code:** CSI3029 – Front End Design and Testing (Lab)  
**Academic Year:** 2025–2026  

---

## 🌟 Executive Project Summary

This project is a bespoke, production-grade portfolio website engineered specifically to showcase all **42 laboratory assessments** across 8 curriculum units for the course **CSI3029 – Front End Design and Testing (Lab)** at VIT Vellore.

Unlike generic student portfolios or static template dumps, this platform is conceived as **"The Modern Developer's Lab Notebook"**: a unified, interactive engineering workbench. Each assessment lives in its own isolated directory as a standalone HTML5 application, rendered inside a sandboxed viewport with live device toggles, requirements checklists, hand-crafted syntax-highlighted code inspection, and vector output previews.

The platform is designed to be **100% offline-first**, requiring **zero build steps, zero package managers, and zero runtime dependencies**. It executes seamlessly when double-clicked directly from the local file system (`file://`) and deploys out-of-the-box to static web hosts such as GitHub Pages and Netlify.

---

## 🛠️ Technical Stack & Architectural Constraints

| Layer | Technology | Rationale & Constraint Compliance |
|---|---|---|
| **Markup** | Semantic HTML5 | Pure standards-compliant HTML5. Strict semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`). Zero frameworks. |
| **Styling** | Modern CSS3 (Variables, Flexbox, Grid) | Custom glassmorphism design tokens, CSS custom properties (`--bg-primary`, `--accent-primary`), responsive containers, CSS canvas aurora background, custom scrollbars, gradient focus indicators, and `prefers-reduced-motion` compliance. |
| **Logic & Events** | Vanilla ES6+ JavaScript | Hand-written logic without third-party libraries (no jQuery, no React, no Prism.js). Hand-crafted token syntax highlighter, global `Ctrl+K` command palette, dynamic regex validators, and DOM event dispatchers. |
| **Isolation** | Sandboxed `<iframe>` | Each assessment runs in an isolated frame (`sandbox="allow-scripts allow-forms allow-same-origin"`) to ensure local CSS/JS does not leak into the parent application or neighboring assessments. |
| **Data Engine** | Manifest Array (`data/assessments.js`) | Single source of truth loaded as a global browser object via `<script>` tag. This eliminates browser CORS security blocks that occur when using `fetch()` over the `file://` protocol. |
| **Assets & Media** | Local Inline & External SVG Vector Art | 100% vector-rendered illustrations (VIT campus buildings, world travel landmarks, traffic signals, electronic gadgets) ensuring crisp display at any DPI, zero broken images, and complete offline autonomy. |
| **Fonts** | Google Fonts with System Fallbacks | *Space Grotesk* (display headlines), *Inter* (body typography), and *JetBrains Mono* (code badges and line numbers) with reliable sans-serif and monospace system fallbacks. |

---

## 🎯 Why This Project Should Exist

1. **Pedagogical Integrity:** Standard course submissions often scatter 42 loose `.html` files in unorganized directories. This portfolio elevates academic coursework to professional engineering caliber.
2. **Unified Demonstration & Code Verifiability:** Evaluators can inspect the live running demo, the exact verified source code running inside the demo, and visual output side-by-side in one window without opening multiple tabs or developer tools.
3. **Strict Constraint Preservation:** Special academic requirements (e.g. Q7 and Q11 using zero CSS; Q18 and Q19 using inline CSS only; Q16 and Q20 using internal `<style>` only; Q12 using HTML `<table>` layouts) are strictly respected in their respective student workspaces without contaminating the surrounding modern shell.
4. **Zero-Friction Local Execution:** Double-clicking `index.html` immediately runs the entire suite without installing Node.js, running `npm install`, or configuring local web server certificates.
5. **Extensibility & Data-Driven Modularity:** Adding a 43rd assessment requires only a new folder and a single manifest object in `data/assessments.js`—no modifications to site templates, navigation scripts, or search indices.

---

## 🗺️ Site Map & Directory Architecture

```
verdant/
├── index.html                   # Modern landing page (Hero, Bento Grid, Live Demos, Stats)
├── assessments.html             # Catalog page (Grid/Table view, real-time search, unit filters)
├── assessment.html              # Dynamic universal workspace template (?q=XX or #/qXX)
├── about.html                   # Course specifications, student profile, and architecture guide
├── 404.html                     # Custom themed 404 error page
├── css/
│   ├── themes.css               # Design tokens, color system, unit accents, dark/light modes
│   ├── main.css                 # Base resets, typography, layout, aurora canvas, scroll progress
│   ├── components.css           # Navbar, Bento cards, browser frame, tabs, device toggles
│   └── syntax.css               # Code viewer styles, line numbers, hand-written syntax colors
├── js/
│   ├── theme.js                 # Dark/light theme engine with localStorage persistence
│   ├── highlighter.js           # Hand-written zero-dependency syntax highlighter (HTML/CSS/JS)
│   ├── command-palette.js       # Universal Ctrl+K search modal with keyboard navigation
│   └── app.js                   # Landing page counters, typewriter effect, scroll tracking
├── data/
│   └── assessments.js           # Central manifest array defining all 42 assessments
├── assessments/
│   ├── q01/ ... q42/            # 42 isolated assessment workspaces
│   │   ├── index.html           # Standalone student solution entry point
│   │   ├── style.css            # Scoped stylesheet (where permitted)
│   │   ├── script.js           # Scoped JavaScript logic (where required)
│   │   ├── preview.svg          # High-resolution vector output screenshot
│   │   └── meta.json            # Assessment metadata and PASS status
└── docs/
    ├── README.md                # Master documentation and quick-start guide (this file)
    ├── ISSUES.md                # Syllabus numbering reconciliation and protocol notes
    ├── ADDING-AN-ASSESSMENT.md  # 3-step guide for seamless future expansion
    └── TEST-REPORT.md           # Comprehensive 42-question verification and test matrix
```

---

## 🚀 How to Run Locally

### Option 1: Direct Double-Click (Zero Setup Required)
Because the data engine is loaded via standard browser `<script>` tag rather than dynamic `fetch()` requests, the site has **zero CORS restrictions**.
1. Navigate to the project root folder: `verdant/`.
2. Double-click `index.html` (or right-click -> *Open with* -> Google Chrome / Microsoft Edge / Mozilla Firefox / Safari).
3. The portfolio will launch immediately with full search, navigation, dark/light mode toggles, and live demo execution.

### Option 2: Python Built-In HTTP Server
If you prefer running through a local HTTP server:
```bash
# Navigate to project directory
cd path/to/verdant

# Python 3
python -m http.server 8000

# Open in your browser:
# http://localhost:8000
```

### Option 3: Node.js / npx
```bash
npx serve .
# Open http://localhost:3000
```

### Option 4: PHP Built-In Server
```bash
php -S localhost:8000
```

---

## 🌐 Deployment to GitHub Pages or Netlify

The repository uses exclusively relative asset paths (`./css/...`, `./data/...`, `./assessments/...`).

### Deploying to GitHub Pages:
1. Push this directory to a GitHub repository (e.g. `https://github.com/username/csi3029-portfolio`).
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Set branch to `main` (or `master`) and directory to `/ (root)`. Click **Save**.
5. Your portfolio is live at `https://username.github.io/csi3029-portfolio/`.

### Deploying to Netlify:
1. Drag and drop the `verdant` folder onto the [Netlify Drop](https://app.netlify.com/drop) page.
2. The portfolio builds instantly with zero configuration.

---

## 📋 Comprehensive Curriculum Overview (42 Assessments)

### Unit I: HTML Basics (Q01 – Q08)
- **Q01:** Local Web Server Configuration (XAMPP/WAMP/Python server documentation)
- **Q02:** First HTML Basic Program ("Welcome to VIT")
- **Q03:** Simple Personal Profile Webpage (Hobbies, qualifications table, hyperlinks)
- **Q04:** Student Profile Webpage with Nested Lists (Ordered and unordered hierarchies)
- **Q05:** HTML Text Formatting & Scientific Notation (`<sup>`, `<sub>`, chemical formulas)
- **Q06:** Academic Profile with Mathematical & Scientific Formulas ($H_2SO_4$, $a^2+b^2$)
- **Q07:** Nature Gallery Using `<div>` Containers (**Strictly No CSS**)
- **Q08:** Centered Profile Card using `<div>` and HTML Border Attributes

### Unit II: HTML Layout Basic (Q09 – Q12)
- **Q09:** VIT University Horizontal Navigation Menu (5 linked sub-pages: Home, About, Courses, Gallery, Contact)
- **Q10:** Student Portal Vertical Sidebar (5 linked sub-pages: Dashboard, Profile, Attendance, Marks, Settings)
- **Q11:** Structural Page Layout with `<div>` Only (**Strictly No CSS**, `layout1.html`)
- **Q12:** Semantic Website Layout Using HTML `<table>` (Header, Left Menu, Content, Footer)

### Unit III: HTML Layout – 2 (Q13 – Q20)
- **Q13:** E-Commerce Shopping Website Header (Logo, search bar, cart, categories)
- **Q14:** University Admission Portal Header (Logo, announcement ticker, login/register buttons)
- **Q15:** Dynamic Smart Search Engine Header (Logo, input with search & voice icons, quick filters)
- **Q16:** Online Learning Platform Header (**Document `<style>` Tag Only**)
- **Q17:** GameZone Header & 70% Viewport Image Slider (Sticky nav, hero carousel)
- **Q18:** About Me Portfolio Article (**Inline CSS Only**)
- **Q19:** Hospital Management 2x2 Services Grid (**Inline CSS Only**)
- **Q20:** VIT Book Haven Multi-Column Footer (**Internal `<style>` Tag Only**)

### Unit IV: CSS Background / Layouts (Q21 – Q22)
- **Q21:** Smart Hospital Appointment Booking Portal (Doctor cards, booking modal, CSS grid)
- **Q22:** Responsive Online Newspaper (CSS Multi-Column layout, drop-caps, pull quotes)

### Unit V: HTML Form Elements & Media (Q23 – Q27)
- **Q23:** Employee Registration Form with HTML5 Controls & Embedded Video
- **Q24:** Student Login Page with Embedded Audio Instructions
- **Q25:** National Technical Symposium Registration Portal (Multi-field form)
- **Q26:** Complete 20-Field Patient Registration Form (20 distinct HTML5 input types)
- **Q27:** Multi-Step Shopping Cart Checkout Flow (Part A: Cart, Part B: Shipping, Part C: Payment)

### Unit VI: JavaScript Basics Practice 1 (Q28 – Q29)
- **Q28:** Teacher Student Marks Calculator (Total, average, grade determination, validation)
- **Q29:** Student Login with JavaScript Regex Validation (**Builds on Q24**)

### Unit VII: JavaScript Regular Expressions & Mouse Events (Q30 – Q36)
- **Q30:** Symposium Registration with JS Arrays & Regex Validation (**Builds on Q25**)
- **Q31:** VIT Technical Workshop Registration (Email regex `@vit.ac.in` & checkbox check)
- **Q32:** Online Employee Registration (EMP ID regex `/^EMP\d{4}$/` & radio button validation)
- **Q33:** Button Mouseover & Mouseleave Event Handling ("Welcome to VIT!" text swap)
- **Q34:** Interactive Color-Changing Box (Click cycles color; hover displays "Mouse is over the box")
- **Q35:** Interactive E-Commerce Product Card (Image hover zoom/specs; click reveals price & stock)
- **Q36:** Interactive Traffic Signal Simulation (Hover Red/Yellow/Green triggers STOP/READY/GO)

### Unit VIII: JavaScript Keyboard Event Handling Practice (Q37 – Q42)
- **Q37:** Student Search Input with Enter & Escape Key Handling (Live key display, Enter to search, Esc to clear)
- **Q38:** ATM Secure PIN Entry Simulation (Numeric guard blocks non-digits, Enter submits 4-digit PIN)
- **Q39:** Product Search with Dynamic Background Color Shift & Enter Query Dispatch
- **Q40:** Online Exam CBT Question Interface (Click selects answer, hover highlights submit, Enter submits)
- **Q41:** VIT Campus Landmarks Gallery via Arrow Keys & Enter (`ArrowRight`, `ArrowLeft`, `Enter`)
- **Q42:** Global Wanderlust Travel Gallery (`N`/`n` Next, `P`/`p` Previous, `Spacebar` reveals location)

---

## ⌨️ Global Keyboard Shortcuts

| Shortcut | Action | Scope |
|---|---|---|
| <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>Cmd</kbd> + <kbd>K</kbd> | Open Universal Command Palette | Anywhere on the site |
| <kbd>←</kbd> (Left Arrow) | Navigate to Previous Assessment | Assessment viewer |
| <kbd>→</kbd> (Right Arrow) | Navigate to Next Assessment | Assessment viewer |
| <kbd>Esc</kbd> | Close Command Palette or Modals | Modals and search overlays |
| <kbd>T</kbd> | Toggle Dark / Light Theme | Navbar theme button |

---

## 🔒 Code Verification & Documentation Integrity
All source files displayed in the **Code** tab are loaded directly from the running solution files. When modifying an assessment file in `assessments/qXX/`, both the live demo and the code tab update synchronously, ensuring source code and running code never drift apart.

---

**Academic Verification:**  
*Course Coordinator:* CSI3029 Faculty, School of Information Technology and Engineering (SITE), VIT Vellore  
*Author:* **Shaik Zabiullah (23MIC0007)**
