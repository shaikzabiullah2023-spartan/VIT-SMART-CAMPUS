# Guide: Adding a New Assessment (e.g. Q43)
### Course: CSI3029 – Front End Design and Testing (Lab)
**Author:** SHAIK ZABIULLAH (23MIC0007), VIT Vellore  

---

## 💡 Overview

The portfolio is engineered with a **zero-code-change architecture**: adding a 43rd assessment requires **only creating a folder with your solution files and adding a single entry to the manifest**. You do **not** need to touch `index.html`, `assessments.html`, `assessment.html`, or any core JavaScript code.

---

## Step 1: Create the Assessment Directory & Files

Create a new folder in `assessments/` named `q43/`:
```bash
assessments/q43/
├── index.html        # Main student solution entry point
├── style.css         # Optional scoped stylesheet (if permitted by question)
├── script.js        # Optional JavaScript logic (if required)
├── preview.svg       # Local vector output screenshot (850x500px recommended)
└── meta.json         # Metadata record
```

### 1.1 Solution Template (`assessments/q43/index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assessment Q43 - Title Here</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>CSI3029 Assessment Q43</h1>
    <p>Student Solution Implementation.</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### 1.2 Metadata Record (`assessments/q43/meta.json`)
```json
{
  "q": 43,
  "slug": "q43",
  "title": "Title of the Assessment",
  "unit": "Unit VIII: JavaScript Keyboard Event Handling Practice",
  "unitId": 8,
  "status": "PASS",
  "author": "SHAIK ZABIULLAH (23MIC0007)"
}
```

---

## Step 2: Register in `data/assessments.js`

Open `data/assessments.js` and append a new object to the `window.ASSESSMENTS` array:

```javascript
{
  q: 43,
  slug: "q43",
  title: "Interactive Canvas Drag & Drop Physics",
  unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
  unitId: 8,
  tags: ["JavaScript", "HTML5 Canvas", "Physics", "Mouse Events"],
  question: "Full text of the laboratory assessment question from the course syllabus.",
  requirements: [
    "HTML5 Canvas viewport with dynamic scaling",
    "Pointerdown, pointermove, and pointerup drag physics",
    "Collision detection against canvas bounds",
    "Velocity damping and momentum on release"
  ],
  files: ["index.html", "style.css", "script.js"],
  entry: "assessments/q43/index.html",
  preview: "assessments/q43/preview.svg",
  dependsOn: null,
  notes: "Standalone physics engine implemented with requestAnimationFrame."
}
```

---

## Step 3: Verify in Your Browser

Open or refresh `index.html` in your browser:
1. **Landing Page:** Animated stat counter automatically updates to **43 Assessments**.
2. **Catalog Page (`assessments.html`):** The new assessment appears in the card grid, responds to unit/tag filters, and is indexed in real-time search.
3. **Command Palette (<kbd>Ctrl</kbd> + <kbd>K</kbd>):** Immediately searchable by number ("43"), title, tags, or question keywords.
4. **Assessment Viewer (`assessment.html?q=43` or `#/q43`):**
   - Renders Question tab with your checklist.
   - Loads your live solution inside the sandboxed browser frame.
   - Code tab parses and highlights `index.html`, `style.css`, and `script.js` with line numbers and copy buttons.
   - Previous/Next buttons seamlessly link Q42 ↔ Q43.

**No other configuration, compilation, or build step is required!**

