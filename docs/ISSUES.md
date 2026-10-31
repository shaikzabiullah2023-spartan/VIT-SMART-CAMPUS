# CSI3029 Portfolio – Known Issues, Discrepancies & Resolutions
### Course: CSI3029 – Front End Design and Testing (Lab)
**Author:** SHAIK ZABIULLAH (23MIC0007), VIT Vellore  

---

## 1. Syllabus Numbering Discrepancies & Resolutions

During curriculum review of the syllabus questions in Section 6, two explicit numbering cross-references were identified that diverge from sequential numbering:

### Discrepancy A: Question 29 ("Builds on 23rd Question")
- **Syllabus Text:**  
  *“For the 23rd question (User name and password authentication using HTML form). JavaScript requirements: 1. check whether user name and password are empty or not; 2. validation using regular expression (user name and password); 3. if correct, display successful alert; otherwise, appropriate error alert.”*
- **Discrepancy Analysis:**  
  In the sequential question list, the Student Login page with Username & Password is **Question 24** (Unit V), whereas Question 23 is the Employee Registration Form with HTML5 inputs and video.
- **Resolution:**  
  Question 29 is implemented to extend the **Student Login Form (Q24)** with real-time JavaScript regex validation, an empty-state validator, and password strength evaluation. A prominent banner stating `Builds on Q24` is rendered atop `assessments/q29/index.html` to clearly explain the reference.

### Discrepancy B: Question 30 ("Builds on Q:24")
- **Syllabus Text:**  
  *“For the Symposium registration form (Q:24). JavaScript requirements. 1. Array: store all the selected Technical Skills in a JavaScript array; display the participant's Name, Department and the list of selected skills after successful form submission in tabular format. 2. Regular Expressions: validate these fields using JavaScript regular expressions: Participant Name, Register Number (REG followed by 6 digits), Email ID, Mobile Number. 3. If any validation fails, display an appropriate error message...”*
- **Discrepancy Analysis:**  
  In the sequential question list, the National Technical Symposium Registration Form is **Question 25** (Unit V), whereas Question 24 is the Student Login page.
- **Resolution:**  
  Question 30 is implemented to extend the **Symposium Registration Portal (Q25)** with native JavaScript array manipulation for multi-selected skills and strict regex validators for Name, REG number (`/^REG\d{6}$/`), Email, and 10-digit Mobile. A banner stating `Builds on Q25` is rendered atop `assessments/q30/index.html`.

---

## 2. Browser Security Policies over `file://` Protocol

### Issue: Local `fetch()` CORS Restrictions
Modern browsers (Chromium, Gecko, WebKit) enforce strict Same-Origin Policies that block `fetch()` or `XMLHttpRequest` calls directed at local file URIs (`file:///`), throwing `TypeError: Failed to fetch` or `Cross-Origin Request Blocked`.

### Architectural Resolution:
1. **Global Manifest Object:**  
   The primary data source `data/assessments.js` is loaded via a classic HTML `<script>` tag rather than an asynchronous `fetch('assessments.json')`. This exposes `window.ASSESSMENTS` and `window.UNITS` synchronously and globally across `index.html`, `assessments.html`, and `assessment.html`.
2. **Double-Click Compatibility:**  
   The entire site is 100% operational when double-clicked directly from Windows File Explorer, macOS Finder, or Linux Nautilus without launching an HTTP daemon.
3. **Graceful Code Loading:**  
   When navigating the **Code** tab over `file://`, the template attempts to fetch the file contents. If the browser blocks the local fetch, the system detects the security constraint and presents a friendly fallback card with an "Open Raw File" direct link and instructions to start a local server if full syntax inspection is desired.

---

## 3. External Resource Autonomy & Media Fallbacks

### Issue: Network Latency, Firewalls & Hotlink Rot
External sample audio/video links (e.g. W3Schools Big Buck Bunny or SoundHelix MP3s) or unpinned CDN stylesheets can fail due to campus firewall restrictions, offline lab settings, or third-party server downtime.

### Architectural Resolution:
1. **Zero External CSS/JS Dependencies:**  
   No CDNs (no Bootstrap, Tailwind, jQuery, Prism, or FontAwesome) are loaded. All styling is self-contained.
2. **Local SVG Artwork Engine:**  
   All photographs, campus buildings, landmarks, traffic signals, and electronic devices are created as local, hand-crafted SVG vector graphics in `/assessments/qXX/`. This ensures crisp display at 4K resolution and 0ms loading time offline.
3. **Audio/Video Media Fallbacks:**  
   In Q23 (video) and Q24 (audio), public sample media URLs are embedded alongside HTML5 `<track>` fallbacks and informative local standby player cards that ensure the layout never breaks if offline.

---

## 4. Assessment Isolation & Sandbox Protections

### Issue: Style & Script Leakage Across Assessments
If 42 different HTML documents share a single global DOM or execution context, conflicting styles (e.g., student reset rules like `* { margin: 0; }` or Q11 zero-CSS rules) would pollute the site shell, navigation bar, or neighboring demos.

### Architectural Resolution:
- The universal workspace (`assessment.html`) renders every demo inside a dedicated `<iframe>` equipped with `sandbox="allow-scripts allow-forms allow-same-origin"` and `loading="lazy"`.
- This creates an impenetrable boundary: each assessment executes in its own isolated document lifecycle while still allowing student JavaScript, form submissions, and DOM animations to run safely.

