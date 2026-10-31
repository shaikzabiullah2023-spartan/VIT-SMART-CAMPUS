/**
 * CSI3029 - Front End Design and Testing (Lab)
 * Portfolio Manifest: All 42 Lab Assessments
 * Author: SHAIK ZABIULLAH (Reg. No. 23MIC0007), VIT Vellore
 *
 * Plain JS object attached to window so it loads seamlessly via <script> tags
 * over file:// protocol, local servers, GitHub Pages, and Netlify with zero CORS issues.
 */

window.ASSESSMENTS = [
  // ==========================================
  // UNIT I: HTML BASICS (Q01 - Q08)
  // ==========================================
  {
    q: 1,
    slug: "q01",
    title: "Local Web Server Configuration & Setup",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Web Server", "Setup", "HTTP"],
    question: "Install a local web server in your personal laptop and submit the configuration and working. Submit the PDF screenshot.",
    requirements: [
      "Install and configure a local web server (XAMPP / WAMP / Python http.server / Live Server)",
      "Verify server listening on local port (e.g., localhost:80 or localhost:8000)",
      "Serve a test document from root directory with HTTP 200 response",
      "Document configuration commands, architecture, and working proof"
    ],
    files: ["index.html", "server-guide.html"],
    entry: "assessments/q01/index.html",
    preview: "assessments/q01/preview.svg",
    dependsOn: null,
    notes: "Demonstrates practical local hosting via Python, Node, and XAMPP Apache environments with interactive server status simulation."
  },
  {
    q: 2,
    slug: "q02",
    title: "First Basic HTML Program (Welcome to VIT)",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Basics", "Text", "Intro"],
    question: "Using the editor (Sublime/Notepad++) create your first HTML basic program to print Welcome to VIT in browser, submit the PDF screenshot output.",
    requirements: [
      "Use basic HTML document structure (<!DOCTYPE html>, <html>, <head>, <title>, <body>)",
      "Print the message 'Welcome to VIT' clearly in browser",
      "Include editor mockup demonstrating writing code in text editors like Sublime Text or Notepad++"
    ],
    files: ["index.html"],
    entry: "assessments/q02/index.html",
    preview: "assessments/q02/preview.svg",
    dependsOn: null,
    notes: "Clean starter HTML page with dual-view editor mockup simulating Sublime Text and rendered browser canvas."
  },
  {
    q: 3,
    slug: "q03",
    title: "Personal Profile Webpage with HTML Elements",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Profile", "Table", "List", "Links"],
    question: "Create a simple personal profile webpage using basic HTML elements. Requirements: add a page title; display your name as the main heading (<h1>); include a profile image; write a short introduction using paragraphs; create an unordered list of your hobbies; add a table showing your educational qualifications; include a hyperlink to your favorite website; add a footer with your email address.",
    requirements: [
      "Add a page title in <head>",
      "Display your name as main heading (<h1>)",
      "Include a profile image",
      "Short introduction using <p> paragraphs",
      "Unordered list (<ul>) of hobbies",
      "Table (<table>) showing educational qualifications (Degree, Institution, Year, Percentage)",
      "Hyperlink (<a>) to favorite website",
      "Footer (<footer>) with contact email address"
    ],
    files: ["index.html"],
    entry: "assessments/q03/index.html",
    preview: "assessments/q03/preview.svg",
    dependsOn: null,
    notes: "Authentic student portfolio profile representing Shaik Zabiullah (23MIC0007), VIT Vellore."
  },
  {
    q: 4,
    slug: "q04",
    title: "Student Profile with Nested Lists",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Nested Lists", "Profile"],
    question: "Create a web page displaying a student's profile using nested lists. Requirements: add the title 'Student Profile'; display the student's name; create a nested unordered list with this structure: Programming Languages (C, Python, Java) and Hobbies (Reading, Playing Chess, Music); add a footer with your name.",
    requirements: [
      "Add title 'Student Profile'",
      "Display student name prominently",
      "Create nested <ul>: Programming Languages -> C, Python, Java",
      "Create nested <ul>: Hobbies -> Reading, Playing Chess, Music",
      "Add footer with student's name"
    ],
    files: ["index.html"],
    entry: "assessments/q04/index.html",
    preview: "assessments/q04/preview.svg",
    dependsOn: null,
    notes: "Demonstrates strict hierarchical multi-level list formatting in valid HTML5."
  },
  {
    q: 5,
    slug: "q05",
    title: "HTML Text Formatting & Scientific Notation",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Formatting", "Subscript", "Superscript"],
    question: "Create an HTML webpage that displays: a main heading 'HTML Text Formatting'; a paragraph introducing HTML; make the word HTML bold; make the word HyperText italic; underline the phrase Markup Language; highlight the word important; display the formula H₂O and x² using subscript and superscript. Tags to use: <h1>, <p>, <b>, <i>, <u>, <mark>, <sub>, <sup>.",
    requirements: [
      "Main heading <h1> 'HTML Text Formatting'",
      "Paragraph <p> introducing HTML",
      "Make word 'HTML' bold using <b>",
      "Make word 'HyperText' italic using <i>",
      "Underline phrase 'Markup Language' using <u>",
      "Highlight word 'important' using <mark>",
      "Display chemical formula H₂O using <sub>",
      "Display mathematical expression x² using <sup>"
    ],
    files: ["index.html"],
    entry: "assessments/q05/index.html",
    preview: "assessments/q05/preview.svg",
    dependsOn: null,
    notes: "Exact semantic text tag usage meeting all 8 mandated HTML tags."
  },
  {
    q: 6,
    slug: "q06",
    title: "Student Academic Profile with Formulas",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Profile", "Math", "Chemistry"],
    question: "Create a web page that displays a student's profile using various HTML text formatting tags. The page should include: Student Name, Department, College Name, Short Biography, CGPA (highlighted), Mathematical formula x² + y² = z², Chemical formula H₂O.",
    requirements: [
      "Display Student Name, Department, and College Name",
      "Write Short Biography",
      "Highlight CGPA using <mark>",
      "Render mathematical formula: x² + y² = z² with <sup>",
      "Render chemical formula: H₂O with <sub>"
    ],
    files: ["index.html"],
    entry: "assessments/q06/index.html",
    preview: "assessments/q06/preview.svg",
    dependsOn: null,
    notes: "Combines academic credentials with formatted equations in a polished presentation."
  },
  {
    q: 7,
    slug: "q07",
    title: "Nature Gallery Using <div> Containers (No CSS)",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Div", "Gallery", "No-CSS"],
    question: "Create a simple image gallery using <div> containers. Create a webpage with the title 'Nature Gallery'. Add a main <div> to hold the gallery. Inside it, create four separate <div> sections. Each <div> should contain one image, a heading and a short description. Arrange the images vertically (no CSS required).",
    requirements: [
      "Title 'Nature Gallery'",
      "Main wrapper <div> container",
      "Four separate vertical child <div> sections",
      "Each section contains: 1 image, 1 heading, and short description",
      "Arranged vertically purely by natural HTML block flow without external CSS"
    ],
    files: ["index.html"],
    entry: "assessments/q07/index.html",
    preview: "assessments/q07/preview.svg",
    dependsOn: null,
    notes: "Pure HTML block flow with inline SVG vector landscapes ensuring zero broken images."
  },
  {
    q: 8,
    slug: "q08",
    title: "Centered Profile Card using <div> and Border",
    unit: "Unit I: HTML Basics",
    unitId: 1,
    tags: ["HTML", "Card", "Div", "Alignment"],
    question: "Use the <div> tag to design a simple profile card containing an image and text. Create an HTML webpage that contains one outer <div> as the profile card. Display: profile image, Student Name, Department, College Name. Add a border around the card. Center the content inside the <div>.",
    requirements: [
      "Outer <div> serving as card container",
      "Profile image of student",
      "Student Name, Department, College Name",
      "Visible border surrounding card",
      "Content centered inside the <div>"
    ],
    files: ["index.html"],
    entry: "assessments/q08/index.html",
    preview: "assessments/q08/preview.svg",
    dependsOn: null,
    notes: "Complies with fundamental HTML layout and attributes for clean card presentation."
  },

  // ==========================================
  // UNIT II: HTML LAYOUT BASIC (Q09 - Q12)
  // ==========================================
  {
    q: 9,
    slug: "q09",
    title: "VIT University Horizontal Navigation Menu (<div> Only)",
    unit: "Unit II: HTML Layout Basic",
    unitId: 2,
    tags: ["HTML", "Layout", "Navigation", "Multi-page"],
    question: "Create a simple horizontal navigation menu using only HTML and <div> tags. Design a webpage that contains: a heading displaying 'VIT University'; a horizontal navigation bar created using <div> tags; the navigation menu should contain these items (each link must open a new page): Home, About, Courses, Gallery, Contact; below the navigation menu, display a welcome message: 'Welcome to VIT University Official Website.'",
    requirements: [
      "Heading displaying 'VIT University'",
      "Horizontal navigation bar built using <div> and <a> tags",
      "Navigation links: Home, About, Courses, Gallery, Contact",
      "Each menu item navigates to its own dedicated page within the directory",
      "Welcome message: 'Welcome to VIT University Official Website.'",
      "Back navigation supported on all sub-pages"
    ],
    files: ["index.html", "about.html", "courses.html", "gallery.html", "contact.html"],
    entry: "assessments/q09/index.html",
    preview: "assessments/q09/preview.svg",
    dependsOn: null,
    notes: "Fully linked 5-page portal navigation working seamlessly inside iframe."
  },
  {
    q: 10,
    slug: "q10",
    title: "Student Portal Vertical Sidebar Navigation",
    unit: "Unit II: HTML Layout Basic",
    unitId: 2,
    tags: ["HTML", "Sidebar", "Layout", "Multi-page", "Portal"],
    question: "Create a vertical sidebar navigation menu using HTML <div> tags. Develop a webpage with this layout: display the title 'Student Portal'; on the left side, create a vertical navigation menu using <div> tags with the options Dashboard, Profile, Attendance, Marks, Settings; on the right side, display the text 'Welcome to the VIT Student Portal Dashboard'. (Each menu option opens its own page.)",
    requirements: [
      "Display title 'Student Portal'",
      "Left vertical sidebar using <div> tags",
      "5 sidebar options: Dashboard, Profile, Attendance, Marks, Settings",
      "Right content area showing active view message",
      "Each menu option opens its own dedicated sub-page"
    ],
    files: ["index.html", "profile.html", "attendance.html", "marks.html", "settings.html"],
    entry: "assessments/q10/index.html",
    preview: "assessments/q10/preview.svg",
    dependsOn: null,
    notes: "Multi-page student portal with synchronized sidebar active state."
  },
  {
    q: 11,
    slug: "q11",
    title: "Structural Page Layout with <div> Only (No CSS)",
    unit: "Unit II: HTML Layout Basic",
    unitId: 2,
    tags: ["HTML", "Layout", "No-CSS", "Div"],
    question: "Write an HTML program to create the following structure using only the <div> tag (without using CSS): a HEADER across the top; below it, a LEFT MENU column on the left and a CONTENT area on the right; a FOOTER across the bottom. Use only HTML tags. Use multiple <div> elements. Display the text: HEADER, LEFT MENU, CONTENT, FOOTER. Do not use CSS. Save the file as layout1.html.",
    requirements: [
      "Use only HTML tags and <div> elements",
      "Top HEADER block",
      "Middle section with LEFT MENU and CONTENT areas",
      "Bottom FOOTER block",
      "Strictly zero CSS (no <style>, no inline styles, no external css)",
      "Saved as layout1.html (accessible via index.html)"
    ],
    files: ["layout1.html", "index.html"],
    entry: "assessments/q11/index.html",
    preview: "assessments/q11/preview.svg",
    dependsOn: null,
    notes: "Strict adherence to zero-CSS constraint using HTML table/div semantic fallback structure."
  },
  {
    q: 12,
    slug: "q12",
    title: "Semantic Website Layout Using HTML <table>",
    unit: "Unit II: HTML Layout Basic",
    unitId: 2,
    tags: ["HTML", "Table", "Layout", "Semantic"],
    question: "Use the table tag and design the same website layout as like below: a full-width <header> bar on top, a <nav> bar beneath it, then a middle row where a <section> block sits above an <article> block on the left and a tall <aside> spans the right side, and finally a full-width <footer> bar. Insert some text and images as you wish and create a meaningful layout. (Use a <table> for the layout; colour each region distinctly.)",
    requirements: [
      "Use <table> layout with colspan and rowspan",
      "Full-width <header> across top row",
      "Full-width <nav> across second row",
      "Middle section: <section> above <article> on left, tall <aside> spanning both rows on right",
      "Full-width <footer> along the bottom row",
      "Distinct color coding for each region with informative content"
    ],
    files: ["index.html"],
    entry: "assessments/q12/index.html",
    preview: "assessments/q12/preview.svg",
    dependsOn: null,
    notes: "Faithfully reproduces classic table-based grid layout with colorful semantic wireframing."
  },

  // ==========================================
  // UNIT III: HTML LAYOUT - 2 (Q13 - Q20)
  // ==========================================
  {
    q: 13,
    slug: "q13",
    title: "E-Commerce Shopping Website Header",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "CSS", "Flexbox", "Header", "E-Commerce"],
    question: "Design the header section of an online shopping website using HTML and CSS. Create a header that contains: Website Logo on the left (text logo or image placeholder); Delivery Location displaying 'Deliver to' and 'Chennai, Tamil Nadu'; Search Bar in the center consisting of a Category dropdown, a Search input box and a Search button with a search icon or text; User Account section displaying 'Hello, Guest' and 'Account & Lists'; Returns & Orders section; Shopping Cart with a cart icon (or text) and item count. Arrange all items in a single horizontal row.",
    requirements: [
      "Website Logo on left",
      "Delivery location: 'Deliver to' | 'Chennai, Tamil Nadu'",
      "Center search bar: Category dropdown + input box + search button",
      "User Account: 'Hello, Guest' | 'Account & Lists'",
      "Returns & Orders section",
      "Shopping Cart with icon and item count badge",
      "Single horizontal row layout with responsive flex alignment"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q13/index.html",
    preview: "assessments/q13/preview.svg",
    dependsOn: null,
    notes: "Pixel-perfect Amazon-inspired header with search suggestions and responsive overflow handling."
  },
  {
    q: 14,
    slug: "q14",
    title: "University Online Admission Portal Header",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "CSS", "Header", "Navigation", "University"],
    question: "Design the header section of a university admission portal using HTML and CSS. Display the university logo on the left side. Display the university name: 'Any University – Online Admission Portal'. Add a horizontal navigation menu on the right with: Home, Admissions, Programs, Scholarships, Contact. Include an 'Apply Now' button at the end of the navigation bar. Use CSS to: align all elements in a single horizontal row; apply a background color to the header; add suitable padding and spacing between menu items; change the menu item color when the mouse hovers over them.",
    requirements: [
      "University logo and institution title on left",
      "Horizontal navigation: Home, Admissions, Programs, Scholarships, Contact",
      "'Apply Now' prominent call-to-action button",
      "Single horizontal row layout",
      "Custom background color, padding, and spacing",
      "Hover transitions on nav items and CTA button"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q14/index.html",
    preview: "assessments/q14/preview.svg",
    dependsOn: null,
    notes: "Elegant higher education portal header with institutional crest and smooth transitions."
  },
  {
    q: 15,
    slug: "q15",
    title: "Dynamic Smart Search Engine Header",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "CSS", "Header", "Search", "Dropdown"],
    question: "Create the header section of a Dynamic Search Engine webpage using HTML and CSS. Display the website title 'Smart Search Engine' on the left side of the header. On the right side, include: a Search text box with the placeholder 'Search products, services, or articles...'; a Category drop-down list (All Categories, Electronics, Books, Clothing, Groceries); a Price Range drop-down list (Any Price, Under ₹500, ₹500 – ₹2,000, Above ₹2,000); a Search button. Arrange all elements horizontally using CSS. Apply suitable styling: header background color, white title text, proper spacing and alignment, rounded corners for input fields and button, hover effect for the Search button.",
    requirements: [
      "Title 'Smart Search Engine' in crisp white text",
      "Search input with placeholder text",
      "Category dropdown: All Categories, Electronics, Books, Clothing, Groceries",
      "Price range dropdown: Any Price, Under ₹500, ₹500 – ₹2,000, Above ₹2,000",
      "Search button with hover animation",
      "Rounded input pill design with proper spacing and horizontal alignment"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q15/index.html",
    preview: "assessments/q15/preview.svg",
    dependsOn: null,
    notes: "Multi-parameter filter search header with custom select styling and focus glow."
  },
  {
    q: 16,
    slug: "q16",
    title: "Online Learning Header (<style> Tag CSS)",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "CSS", "Style Tag", "Education"],
    question: "Create the header section of a static online learning website using HTML and <style> tag CSS. Display the website logo/title 'LearnSphere Academy'. Add a horizontal navigation menu with: Home, Courses, Instructors, Resources, Contact. Include an 'Enroll Now' button on the right side of the header.",
    requirements: [
      "Website logo/title: 'LearnSphere Academy'",
      "Horizontal navigation: Home, Courses, Instructors, Resources, Contact",
      "'Enroll Now' button on right side of header",
      "All CSS implemented exclusively via document <style> tag"
    ],
    files: ["index.html"],
    entry: "assessments/q16/index.html",
    preview: "assessments/q16/preview.svg",
    dependsOn: null,
    notes: "Clean self-contained document with internal stylesheet and modern EdTech styling."
  },
  {
    q: 17,
    slug: "q17",
    title: "GameZone Header & 70% Viewport Image Slider",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "CSS", "Gaming", "Hero Slider", "Fixed Nav"],
    question: "Design the Header and Image Slider section of a Gaming Website using HTML and CSS. Create a header that includes: a website logo with the text 'GameZone'; a horizontal navigation menu with Home, Games, Tournaments, News, Contact; a 'Play Now' button aligned to the right. Below the header, create an image slider (banner section) that contains: a large background image related to gaming; a heading 'Level Up Your Gaming Experience'; a subheading 'Join exciting tournaments and explore the latest games.'; an 'Explore Games' button. Apply CSS to: keep the header fixed at the top; arrange the navigation items horizontally; style the buttons with hover effects; make the banner occupy approximately 70% of the browser height; center the heading, subheading and button over the background image.",
    requirements: [
      "Fixed header at top with logo 'GameZone'",
      "Horizontal navigation: Home, Games, Tournaments, News, Contact",
      "'Play Now' button with neon glow hover effect",
      "Hero banner occupying ~70vh height",
      "Gaming artwork backdrop with dark vignette overlay",
      "Centered headline 'Level Up Your Gaming Experience', subheading, and 'Explore Games' button"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q17/index.html",
    preview: "assessments/q17/preview.svg",
    dependsOn: null,
    notes: "High-octane esports gaming landing view with cyber aesthetics and animated sliding banners."
  },
  {
    q: 18,
    slug: "q18",
    title: "About Me Portfolio Article (Inline CSS Only)",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "Inline CSS", "Portfolio", "Profile"],
    question: "Create a webpage that displays an 'About Me' article for your personal portfolio using HTML and Inline CSS only. Add the heading 'My Personal Portfolio'. Create an article section containing: your profile image; your name as a main heading; a short introduction (4–5 sentences) about yourself. Include the sections: Education, Technical Skills, Projects, Career Goal. Apply different text formatting using inline CSS, such as font size, font family, font color, background color, text alignment, font weight (bold), font style (italic), text decoration (underline), margins and padding. Style the profile image using inline CSS by setting width and height, border, and border radius. Add a horizontal line (<hr>) between major sections. Display the entire article neatly in the center of the webpage with appropriate spacing.",
    requirements: [
      "Strictly Inline CSS on every element (no <style> or external css)",
      "Heading 'My Personal Portfolio'",
      "Profile image styled with width, height, border, and border-radius",
      "Name as main heading with 4-5 sentence biography",
      "Sections: Education, Technical Skills, Projects, Career Goal",
      "Use font-size, font-family, color, background-color, text-align, bold, italic, underline, margins, padding",
      "Horizontal rules (<hr>) separating sections and centered container"
    ],
    files: ["index.html"],
    entry: "assessments/q18/index.html",
    preview: "assessments/q18/preview.svg",
    dependsOn: null,
    notes: "Mastery of inline style attributes formatted cleanly for Shaik Zabiullah (23MIC0007)."
  },
  {
    q: 19,
    slug: "q19",
    title: "Hospital Management 2x2 Grid (Inline CSS)",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "Inline CSS", "Hospital", "Grid Layout"],
    question: "Create a webpage for a Hospital Management System using <div> tags and inline CSS. Display the title 'Hospital Management System' at the top. Create four colored blocks arranged in a 2×2 layout. The blocks should display Doctors, Patients, Appointments, Pharmacy, with necessary images.",
    requirements: [
      "Title 'Hospital Management System' at top",
      "Four distinctly colored blocks in a 2x2 layout",
      "Modules: Doctors, Patients, Appointments, Pharmacy",
      "Accompanying medical illustrations/icons for each module",
      "All layout and card styling achieved through inline CSS"
    ],
    files: ["index.html"],
    entry: "assessments/q19/index.html",
    preview: "assessments/q19/preview.svg",
    dependsOn: null,
    notes: "2x2 dashboard matrix showcasing healthcare modules with color-coded cards."
  },
  {
    q: 20,
    slug: "q20",
    title: "VIT Book Haven Footer (Internal <style> Only)",
    unit: "Unit III: HTML Layout – 2",
    unitId: 3,
    tags: ["HTML", "Internal CSS", "Footer", "Bookstore"],
    question: "Create a webpage with a footer using HTML <div> tags and an internal <style> tag (do not use inline CSS). The footer should include: Store Name: VIT Book Haven; Quick Links: Home, Books, Authors, Contact; Social media links; Email: support@bookhaven.com; Copyright: © 2026 Book Haven. All Rights Reserved.",
    requirements: [
      "Store Name: 'VIT Book Haven'",
      "Quick Links: Home, Books, Authors, Contact",
      "Social media interactive links",
      "Email: support@bookhaven.com",
      "Copyright notice: © 2026 Book Haven. All Rights Reserved.",
      "Internal <style> tag styling only (no inline CSS)"
    ],
    files: ["index.html"],
    entry: "assessments/q20/index.html",
    preview: "assessments/q20/preview.svg",
    dependsOn: null,
    notes: "Comprehensive bookstore footer with multi-column layout, social pills, and internal CSS."
  },

  // ==========================================
  // UNIT IV: CSS BACKGROUND / LAYOUTS (Q21 - Q22)
  // ==========================================
  {
    q: 21,
    slug: "q21",
    title: "Smart Hospital Appointment Portal Homepage",
    unit: "Unit IV: CSS Background / Layouts",
    unitId: 4,
    tags: ["HTML5", "CSS3", "Hospital", "Cards", "Box Shadows"],
    question: "Smart Hospital Appointment Portal. A newly established Smart Hospital wants a homepage that creates a professional first impression. The hospital management wants patients to easily identify important sections such as Emergency Services, Doctor Consultation, Health Packages, and Contact Information. Design the homepage using HTML5 and CSS3 with these requirements: create a hero banner with an attractive background image or gradient; design four information cards for the services using different border styles, rounded corners and box shadows; highlight the hospital name and slogan using CSS text effects such as text-shadow, text-transform, letter-spacing and appropriate font styling; apply different background colors to distinguish each service section; ensure the page has a consistent color theme suitable for a healthcare website.",
    requirements: [
      "Hero banner with gradient/background styling",
      "Four service cards: Emergency Services, Doctor Consultation, Health Packages, Contact Information",
      "Different border styles (solid, dashed, groove, double), rounded corners, and elevated box-shadows",
      "CSS text effects: text-shadow, uppercase text-transform, letter-spacing on hospital branding",
      "Different background colors distinguishing each card section",
      "Consistent clean clinical medical theme"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q21/index.html",
    preview: "assessments/q21/preview.svg",
    dependsOn: null,
    notes: "Professional medical portal with typography treatments and interactive hover depths."
  },
  {
    q: 22,
    slug: "q22",
    title: "Responsive Online Newspaper (CSS Multi-Column)",
    unit: "Unit IV: CSS Background / Layouts",
    unitId: 4,
    tags: ["HTML5", "CSS3", "Newspaper", "Multi-Column", "Responsive"],
    question: "Design a responsive Online Newspaper webpage using HTML5 and CSS3. Your webpage should include: a header with the newspaper name and date; at least six news articles with headings and paragraphs; use CSS Multiple Column Layout (column-count, column-gap and column-rule) to arrange the articles into three columns; highlight the main headline using appropriate CSS styling; ensure the layout changes to a single column on mobile devices using media queries.",
    requirements: [
      "Masthead with newspaper name ('The Daily Chronicle') and formatted date",
      "Highlighted lead headline with editorial typography",
      "At least 6 distinct news articles with headings and copy",
      "CSS Multiple Column properties: column-count: 3, column-gap, column-rule",
      "Responsive media query collapsing to single column on mobile viewports (< 768px)"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q22/index.html",
    preview: "assessments/q22/preview.svg",
    dependsOn: null,
    notes: "Authentic broadsheet layout utilizing native CSS3 multi-column rendering and drop caps."
  },

  // ==========================================
  // UNIT V: FORMS, INPUT TYPES & MEDIA (Q23 - Q27)
  // ==========================================
  {
    q: 23,
    slug: "q23",
    title: "Employee Registration Page with HTML5 & Video",
    unit: "Unit V: HTML Form Elements, Input Types and Media Elements",
    unitId: 5,
    tags: ["HTML5", "Forms", "Validation", "Video", "Media"],
    question: "Design an Employee Registration Web Page using HTML5 that includes: a registration form with the fields Full Name, Employee ID, Email Address, Password and Confirm Password, Date of Birth, Gender (radio buttons), Department (drop-down list), Skills (checkboxes), Mobile Number, Upload Profile Photo. Use appropriate HTML5 input types such as email, password, date, tel, file, etc. Include HTML5 validation using attributes like required, placeholder, pattern, maxlength and minlength. Embed a welcome video using the <video> element with playback controls. Add Submit and Reset buttons.",
    requirements: [
      "Form fields: Full Name, Employee ID, Email, Password, Confirm Password",
      "Date of Birth (date), Gender (radio), Department (select), Skills (checkboxes)",
      "Mobile Number (tel with pattern validation), Upload Profile Photo (file)",
      "HTML5 validation: required, placeholder, pattern, minlength, maxlength",
      "Embedded <video> with playback controls and graceful fallback",
      "Submit and Reset action buttons"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q23/index.html",
    preview: "assessments/q23/preview.svg",
    dependsOn: null,
    notes: "Enterprise HR onboarding portal with built-in video orientation and robust constraint validation."
  },
  {
    q: 24,
    slug: "q24",
    title: "Student Login Page with Audio Instructions",
    unit: "Unit V: HTML Form Elements, Input Types and Media Elements",
    unitId: 5,
    tags: ["HTML5", "Forms", "Audio", "Login", "Media"],
    question: "Design a Student Login Web Page using HTML5 that includes: a login form containing Username or Email Address, Password, Remember Me (checkbox), User Role (Student/Faculty using radio buttons). Include Forgot Password and Create New Account hyperlinks. Use suitable HTML5 input types and validation attributes. Embed an audio clip using the <audio> element with playback controls to explain the login instructions. Include Login and Clear buttons.",
    requirements: [
      "Username / Email Address field",
      "Password field with security attributes",
      "Remember Me checkbox",
      "User Role selection (Student / Faculty radio buttons)",
      "Forgot Password and Create New Account links",
      "Embedded <audio> player with playback controls and fallback",
      "Login and Clear buttons"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q24/index.html",
    preview: "assessments/q24/preview.svg",
    dependsOn: null,
    notes: "Baseline login interface extended with JavaScript validation in Q29."
  },
  {
    q: 25,
    slug: "q25",
    title: "National Technical Symposium Registration Portal",
    unit: "Unit V: HTML Form Elements, Input Types and Media Elements",
    unitId: 5,
    tags: ["HTML5", "Forms", "Video", "Audio", "Symposium"],
    question: "Design an HTML5 web page for the National Technical Symposium Registration Portal using appropriate HTML5 Form Elements, Input Types and Media Elements. Your web page should include: Participant Name, Register Number, College Name, Email ID, Mobile Number; Date of Birth using an appropriate input type; Gender using radio buttons; Department using a drop-down list; Technical Skills using checkboxes; Upload Student ID Card using the appropriate file input; Event Date using the date input; Submit and Reset buttons; an embedded introductory promotional video about the symposium; an audio welcome message for participants. Use suitable HTML5 validation attributes such as required, pattern, minlength, maxlength and placeholder wherever applicable.",
    requirements: [
      "Participant Name, Register Number, College Name, Email ID, Mobile Number",
      "Date of Birth (date), Event Date (date), Gender (radio), Department (dropdown)",
      "Technical Skills checkboxes and Student ID Card file upload",
      "Embedded promo <video> and welcome <audio> players",
      "HTML5 attributes: required, pattern, minlength, maxlength, placeholder",
      "Submit and Reset action buttons"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q25/index.html",
    preview: "assessments/q25/preview.svg",
    dependsOn: null,
    notes: "Flagship symposium portal serving as foundation for JavaScript regex validation in Q30."
  },
  {
    q: 26,
    slug: "q26",
    title: "Complete 20-Field Patient Registration Form",
    unit: "Unit V: HTML Form Elements, Input Types and Media Elements",
    unitId: 5,
    tags: ["HTML5", "CSS3", "Forms", "Grid", "Healthcare"],
    question: "Design and develop a Patient Registration Form using HTML5 and CSS3. The form should include all appropriate HTML5 input types and be professionally styled. The form must include: 1. Patient Name (text) 2. Email Address (email) 3. Password (password) 4. Contact Number (tel) 5. Age (number) 6. Date of Birth (date) 7. Appointment Time (time) 8. Appointment Date & Time (datetime-local) 9. Personal Website/Reference (url) 10. Search Doctor (search) 11. Favorite Consultation Color Theme (color) 12. Medical Record Upload (file) 13. Pain Level (range) 14. Gender (radio) 15. Known Allergies (checkbox) 16. Blood Group (select) 17. Address (textarea) 18. Hidden Patient ID (hidden) 19. Submit and Reset buttons (submit, reset) 20. Image Button (image) for online payment or confirmation. CSS requirements: apply an attractive background (color, gradient or image); style the form using the CSS Box Model (margin, padding, border); use rounded corners and shadow effects; align all form elements neatly using Flexbox or CSS Grid.",
    requirements: [
      "Includes all 20 specific HTML5 form inputs specified in syllabus",
      "Modern CSS Grid multi-column responsive layout",
      "Box model styling: margin, padding, borders, shadows, rounded corners",
      "Live output preview displays current slider/color choices",
      "Submit, reset, and custom image button (<input type='image'>)"
    ],
    files: ["index.html", "style.css"],
    entry: "assessments/q26/index.html",
    preview: "assessments/q26/preview.svg",
    dependsOn: null,
    notes: "Tour-de-force showcasing all HTML5 input primitives in a clinical intake dashboard."
  },
  {
    q: 27,
    slug: "q27",
    title: "Multi-Step Shopping Cart Checkout & Payment Flow",
    unit: "Unit V: HTML Form Elements, Input Types and Media Elements",
    unitId: 5,
    tags: ["HTML5", "CSS3", "E-Commerce", "Checkout", "Multi-page"],
    question: "Design a Shopping Cart Checkout and Payment webpage using HTML5 and CSS3 with the following requirements. Forms can be displayed one by one using links in separate pages. Part A – Customer & Delivery Details: Customer Name (text), Email Address (email), Mobile Number (tel), Delivery Address (textarea), City (text), State (select), PIN Code (number), Delivery Date (date). Part B – Payment Details: Payment Method (radio buttons: Credit Card, Debit Card, UPI, Net Banking, Cash on Delivery), Card Holder Name (text), Card Number (password or text with placeholder), Expiry Date (month), CVV (password), UPI ID (text), Terms and Conditions (checkbox). Part C – Cart Summary: display a cart summary section containing Product Name, Quantity, Price, Total Amount, and 'Place Order' and 'Cancel' buttons.",
    requirements: [
      "Part A: Customer & Delivery Details form with state selection and date picker",
      "Part B: Comprehensive Payment Details with dynamic payment method tabs",
      "Part C: Cart Summary showing line items, tax, total, Place Order and Cancel",
      "Separate linked HTML files (part-a.html, part-b.html, part-c.html)",
      "Persistent state transfer across steps and progress stepper bar"
    ],
    files: ["index.html", "part-a.html", "part-b.html", "part-c.html", "style.css"],
    entry: "assessments/q27/index.html",
    preview: "assessments/q27/preview.svg",
    dependsOn: null,
    notes: "Full 3-step checkout funnel with step progress indicator and validation."
  },

  // ==========================================
  // UNIT VI: JS BASICS PRACTICE 1 (Q28 - Q29)
  // ==========================================
  {
    q: 28,
    slug: "q28",
    title: "Teacher Student Marks Calculator (Total & Average)",
    unit: "Unit VI: JavaScript Basics Practice 1",
    unitId: 6,
    tags: ["JavaScript", "Math", "DOM", "Calculator"],
    question: "A school wants a simple web page where a teacher can enter the marks of three subjects. The application should calculate the total and average marks when the Calculate button is clicked. Develop an HTML form with JavaScript to: accept marks for three subjects; calculate the total marks; calculate the average marks; display the results on the same page.",
    requirements: [
      "Input fields for 3 distinct subjects",
      "Validation ensuring numeric inputs between 0 and 100",
      "Calculate button triggering JS arithmetic logic",
      "Calculate Total Marks (Subject 1 + Subject 2 + Subject 3)",
      "Calculate Average Marks (Total / 3) and Letter Grade",
      "Dynamic in-place result card on the same page"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q28/index.html",
    preview: "assessments/q28/preview.svg",
    dependsOn: null,
    notes: "Grade computation tool with visual progress meters and distinction badges."
  },
  {
    q: 29,
    slug: "q29",
    title: "Student Login with JavaScript Regex Validation",
    unit: "Unit VI: JavaScript Basics Practice 1",
    unitId: 6,
    tags: ["JavaScript", "Regex", "Validation", "Login", "BuildsOn"],
    question: "Use the JavaScript for the login question (Q24, the Student Login page) and check whether the username and password are empty or not; validate the fields with appropriate rules using regular expressions.",
    requirements: [
      "Extends Q24 Student Login with interactive JavaScript",
      "Check username and password empty states with instant visual feedback",
      "Regex validation for Username (alphanumeric, 4-20 chars)",
      "Regex validation for Password (min 8 chars, 1 uppercase, 1 lowercase, 1 number)",
      "Displays descriptive error or success alerts in real time"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q29/index.html",
    preview: "assessments/q29/preview.svg",
    dependsOn: "Q24",
    notes: "Includes 'Builds on Q24' banner and client-side password strength meter."
  },

  // ==========================================
  // UNIT VII: JS REGEX & MOUSE EVENTS (Q30 - Q36)
  // ==========================================
  {
    q: 30,
    slug: "q30",
    title: "Symposium Portal with JS Arrays & Regex Validation",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Array", "Regex", "Symposium", "BuildsOn"],
    question: "For the Symposium registration form (Q25). JavaScript requirements. 1. Array: store all the selected Technical Skills in a JavaScript array; display the participant's Name, Department and the list of selected skills after successful form submission in tabular format. 2. Regular Expressions: validate these fields using JavaScript regular expressions: Participant Name (only alphabets and spaces allowed); Register Number (must begin with REG followed by exactly six digits, e.g. REG123456); Email ID (valid email format); Mobile Number (exactly 10 digits). 3. If any validation fails, display an appropriate error message. Otherwise, display a confirmation message along with the participant details.",
    requirements: [
      "Extends Q25 National Technical Symposium registration form",
      "Stores selected skill checkboxes dynamically into a JavaScript Array",
      "Regex: Participant Name (/^[A-Za-z ]+$/)",
      "Regex: Register Number (/^REG[0-9]{6}$/)",
      "Regex: Email ID valid format (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/)",
      "Regex: Mobile Number exactly 10 digits (/^[0-9]{10}$/)",
      "Displays error alerts on failure; renders styled table with array skills on success"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q30/index.html",
    preview: "assessments/q30/preview.svg",
    dependsOn: "Q25",
    notes: "Demonstrates JS array manipulation and comprehensive regex validation table rendering."
  },
  {
    q: 31,
    slug: "q31",
    title: "VIT Technical Workshop Registration (Email Regex & Checkbox)",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Regex", "Checkbox", "Validation", "VIT"],
    question: "A university is conducting a technical workshop registration. Students must enter a valid VIT email ID and select at least one technical interest before submitting the form. The available interests are: Web Development, Artificial Intelligence, Cyber Security, Cloud Computing. Develop an HTML page with JavaScript to: 1. accept the student's VIT email ID; 2. validate the email using a regular expression so that it follows the format username@vit.ac.in; 3. ensure that at least one checkbox is selected; 4. display an appropriate success or error message based on the validation.",
    requirements: [
      "Accept student's institutional email address",
      "Regex validates strict VIT email domain: /^[a-zA-Z0-9._%+-]+@vit\\.ac\\.in$/i",
      "Checkbox interests: Web Development, AI, Cyber Security, Cloud Computing",
      "Enforce minimum 1 checkbox selection",
      "Dynamic alert card showing success badge or specific field error messages"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q31/index.html",
    preview: "assessments/q31/preview.svg",
    dependsOn: null,
    notes: "Domain-specific pattern enforcement with visual interest tag selection."
  },
  {
    q: 32,
    slug: "q32",
    title: "Online Employee Registration (EMP Regex & Radio Check)",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Regex", "Radio", "Corporate", "Validation"],
    question: "A company is developing an online employee registration portal. Each employee must enter a valid Employee ID and select their employment type before the registration is accepted. Employee ID format: EMP followed by exactly four digits (example: EMP1234). Employment types: Full-Time, Part-Time, Intern. Develop an HTML page with JavaScript to: 1. accept the Employee ID; 2. validate the Employee ID using a regular expression; 3. ensure that one radio button is selected; 4. display appropriate validation messages for both the Employee ID and the employment type before submitting the form.",
    requirements: [
      "Accept Employee ID text input",
      "Validate ID format: /^EMP\\d{4}$/ (EMP + 4 digits)",
      "Employment Type radio group: Full-Time, Part-Time, Intern",
      "Ensure one radio option is actively chosen",
      "Present distinct validation error messages or success confirmation"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q32/index.html",
    preview: "assessments/q32/preview.svg",
    dependsOn: null,
    notes: "Corporate onboarding validation with live pattern tester and badge preview."
  },
  {
    q: 33,
    slug: "q33",
    title: "Button Mouseover & Mouseleave Event Handling",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Mouse Events", "DOM", "Hover"],
    question: "Create a webpage using JavaScript mouse event handling. When the user moves the mouse over a button, change the text displayed on the webpage to 'Welcome to VIT!' and restore the original text when the mouse leaves the button.",
    requirements: [
      "Interactive button element",
      "Add mouseover event listener to change page text to 'Welcome to VIT!'",
      "Add mouseleave / mouseout event listener to restore default text",
      "Visual transition and event monitor counter"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q33/index.html",
    preview: "assessments/q33/preview.svg",
    dependsOn: null,
    notes: "Fundamental DOM mouse event demonstration with live event telemetry."
  },
  {
    q: 34,
    slug: "q34",
    title: "Interactive Color-Changing Box (Click & Mousemove)",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Mouse Events", "Color", "Click"],
    question: "Create a webpage using JavaScript mouse event handling. Display a colored box that changes its background color when the user clicks on it. When the mouse moves over the box, display the message 'Mouse is over the box' below it.",
    requirements: [
      "Prominent styled colored box element",
      "Click event listener cycling/generating new background colors",
      "Mouseover / mousemove listener displaying 'Mouse is over the box'",
      "Mouseleave listener restoring prompt or idle status",
      "Displays active HEX/RGB color value and click count"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q34/index.html",
    preview: "assessments/q34/preview.svg",
    dependsOn: null,
    notes: "Dual-event handling displaying real-time coordinate logging and hue transitions."
  },
  {
    q: 35,
    slug: "q35",
    title: "Interactive E-Commerce Product Card with Hover & Click",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Mouse Events", "Product Card", "E-Commerce"],
    question: "Create a JavaScript-based interactive product card that responds to mouse events. When the user moves the mouse over the product image, change its appearance and display additional product information. When the mouse leaves the image, restore the original appearance. Also implement a mouse-click event on a 'View Details' button to display the product price and availability.",
    requirements: [
      "Product Card featuring product image, title, and initial teaser",
      "Mouseover on image: transforms image (zoom/shadow) and reveals specs badge",
      "Mouseleave on image: smoothly restores default appearance",
      "Mouse click on 'View Details' button: reveals price and in-stock inventory count",
      "Option to toggle or reset card state"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q35/index.html",
    preview: "assessments/q35/preview.svg",
    dependsOn: null,
    notes: "High-end product showcase card with smooth CSS transitions driven by DOM mouse events."
  },
  {
    q: 36,
    slug: "q36",
    title: "Interactive Traffic Signal Simulation (Hover States)",
    unit: "Unit VII: JavaScript Regular Expressions & Mouse Events",
    unitId: 7,
    tags: ["JavaScript", "Mouse Events", "Traffic Signal", "Interactive"],
    question: "Create an interactive traffic signal using HTML, CSS and JavaScript. When the user moves the mouse over each signal (Red, Yellow or Green), highlight that signal and display an appropriate message such as 'STOP,' 'READY,' or 'GO.' When the mouse leaves, restore the original appearance. Use JavaScript mouse event handling to implement the interaction.",
    requirements: [
      "Traffic light housing with Red, Yellow, and Green signal bulbs",
      "Mouseover Red: illuminates red with intense glow and displays 'STOP'",
      "Mouseover Yellow: illuminates yellow with glow and displays 'READY'",
      "Mouseover Green: illuminates green with glow and displays 'GO'",
      "Mouseleave: dims bulbs back to idle state and clears prompt",
      "Smooth radial gradient lighting realism"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q36/index.html",
    preview: "assessments/q36/preview.svg",
    dependsOn: null,
    notes: "Realistic illuminated signal with realistic glow physics and audio-tactile feedback."
  },

  // ==========================================
  // UNIT VIII: KEYBOARD EVENT HANDLING (Q37 - Q42)
  // ==========================================
  {
    q: 37,
    slug: "q37",
    title: "Student Search Input with Enter & Escape Key Handling",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Keyboard Events", "Search", "Keydown"],
    question: "Create a Student Search webpage with a text input box. Use JavaScript keyboard event handling to: display the key pressed by the user below the input box; when the user presses Enter, display the message 'Searching for student…'; when the user presses Escape, clear the input field and message.",
    requirements: [
      "Student Search text input box",
      "Keydown event displays current key pressed and keyCode/key string",
      "Pressing Enter triggers search alert: 'Searching for student…'",
      "Pressing Escape clears the input text box and resets status message",
      "Keyboard shortcut helper tags"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q37/index.html",
    preview: "assessments/q37/preview.svg",
    dependsOn: null,
    notes: "Clear keyboard hook implementation with visual keycap badges."
  },
  {
    q: 38,
    slug: "q38",
    title: "ATM Secure PIN Entry Simulation (Numeric Guard & Enter)",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Keyboard Events", "ATM", "Security", "Keydown"],
    question: "Create a webpage that simulates an ATM PIN entry screen with a text box for entering a PIN. Using JavaScript keyboard event handling: allow the user to enter numbers into the PIN field; display 'PIN Entry Started' when the user presses a key; when the Enter key is pressed, display 'PIN Submitted Successfully'; display a warning message if a non-numeric key is entered.",
    requirements: [
      "ATM PIN text/password input box",
      "Detect first keypress and notify 'PIN Entry Started'",
      "Numeric guard: block non-numeric keys and display warning alert",
      "Enter key press validates 4-6 digit PIN and displays 'PIN Submitted Successfully'",
      "Realistic ATM screen styling with on-screen virtual keypad fallback"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q38/index.html",
    preview: "assessments/q38/preview.svg",
    dependsOn: null,
    notes: "Financial ATM simulation with strict event.preventDefault() for non-digit entries."
  },
  {
    q: 39,
    slug: "q39",
    title: "Product Search with Dynamic Color Change & Enter Query",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Keyboard Events", "Dynamic Search", "CSS"],
    question: "Create a webpage with a Product Search input box using JavaScript keyboard event handling. Detect keyboard input using an appropriate keyboard event. When the user types, display the entered text below the input box. Change the input box background color when the user starts typing. If the user presses Enter, display 'Searching for: [entered text]'. Use CSS to style the input box and result message.",
    requirements: [
      "Product Search styled input field",
      "Detect keyboard input via 'input' / 'keydown' events",
      "Echo entered text in real time below the input field",
      "Dynamically alter input background color once typing begins",
      "Pressing Enter triggers formatted query banner: 'Searching for: [entered text]'"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q39/index.html",
    preview: "assessments/q39/preview.svg",
    dependsOn: null,
    notes: "Reactive search interface with real-time live typing feedback and styled query chips."
  },
  {
    q: 40,
    slug: "q40",
    title: "Online Exam Question Interface (Click & Enter Submission)",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Events", "Exam", "Click", "Keydown"],
    question: "Create an Online Exam Question Interface using HTML, CSS and JavaScript. Implement the following event handling: use a mouse click event to select an answer option and highlight the selected option; use a keyboard event to allow the user to press Enter to submit the selected answer; display a message such as 'Answer Submitted Successfully' after submission; use a mouse-over event to highlight the Submit button.",
    requirements: [
      "Multiple-choice question with 4 selectable answer cards",
      "Click event: selects chosen option and applies highlighted border/glow",
      "Mouseover event: highlights and scales Submit button",
      "Keyboard Enter event: submits chosen answer and shows 'Answer Submitted Successfully'",
      "Option to review or try next question"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q40/index.html",
    preview: "assessments/q40/preview.svg",
    dependsOn: null,
    notes: "Computer-based testing (CBT) portal combining click selection, hover affordance, and Enter key submission."
  },
  {
    q: 41,
    slug: "q41",
    title: "Campus Gallery Navigation via Arrow Keys & Enter",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Keyboard Events", "Gallery", "Campus", "Arrow Keys"],
    question: "Create a webpage that displays a campus image. Use JavaScript keyboard event handling to control the image: press Right Arrow → display the next campus image; press Left Arrow → display the previous campus image; press Enter → display the message 'Image Selected' below the image. Use the keydown event to detect keyboard actions.",
    requirements: [
      "Displays high-quality campus SVG landmark artwork",
      "Keydown Right Arrow (->): navigates to next campus landmark",
      "Keydown Left Arrow (<-): navigates to previous campus landmark",
      "Keydown Enter: displays confirmation banner 'Image Selected'",
      "Visual slide counter, thumbnails, and on-screen keyboard guide"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q41/index.html",
    preview: "assessments/q41/preview.svg",
    dependsOn: null,
    notes: "Features VIT Vellore campus landmarks (Technology Tower, Main Building, Library, Anna Auditorium)."
  },
  {
    q: 42,
    slug: "q42",
    title: "Travel Photo Gallery (N, P & Spacebar Keyboard Control)",
    unit: "Unit VIII: JavaScript Keyboard Event Handling Practice",
    unitId: 8,
    tags: ["JavaScript", "Keyboard Events", "Travel", "Hotkeys"],
    question: "Create a simple Travel Photo Gallery webpage containing an image. Press N → change the displayed image to the next destination; press P → change the displayed image to the previous destination; press Spacebar → display the name of the current destination below the image. Use JavaScript keyboard event handling to implement the interactions.",
    requirements: [
      "Travel gallery viewport with destination scene",
      "Press 'N' or 'n' key -> navigate to Next destination",
      "Press 'P' or 'p' key -> navigate to Previous destination",
      "Press Spacebar -> display destination name and location card below image",
      "Hotkey cheat sheet and smooth image transitions"
    ],
    files: ["index.html", "style.css", "script.js"],
    entry: "assessments/q42/index.html",
    preview: "assessments/q42/preview.svg",
    dependsOn: null,
    notes: "Worldwide travel exploration deck featuring Kyoto, Swiss Alps, Ooty, Santorini, and Taj Mahal."
  }
];

// Helper functions for easy querying
window.getAssessmentBySlug = function(slug) {
  return window.ASSESSMENTS.find(a => a.slug === slug || a.q === parseInt(slug.replace(/\D/g, ''), 10));
};

window.getAssessmentByNumber = function(num) {
  return window.ASSESSMENTS.find(a => a.q === parseInt(num, 10));
};

window.UNITS = [
  { id: 1, name: "Unit I: HTML Basics", count: 8, range: "Q01 - Q08", accent: "#3B82F6", icon: "code" },
  { id: 2, name: "Unit II: HTML Layout Basic", count: 4, range: "Q09 - Q12", accent: "#06B6D4", icon: "layout" },
  { id: 3, name: "Unit III: HTML Layout – 2", count: 8, range: "Q13 - Q20", accent: "#8B5CF6", icon: "grid" },
  { id: 4, name: "Unit IV: CSS Background / Layouts", count: 2, range: "Q21 - Q22", accent: "#EC4899", icon: "palette" },
  { id: 5, name: "Unit V: Forms, Input Types & Media", count: 5, range: "Q23 - Q27", accent: "#F59E0B", icon: "file-text" },
  { id: 6, name: "Unit VI: JavaScript Basics Practice 1", count: 2, range: "Q28 - Q29", accent: "#10B981", icon: "terminal" },
  { id: 7, name: "Unit VII: JS Regex & Mouse Events", count: 7, range: "Q30 - Q36", accent: "#F97316", icon: "mouse-pointer" },
  { id: 8, name: "Unit VIII: JS Keyboard Event Handling", count: 6, range: "Q37 - Q42", accent: "#6366F1", icon: "keyboard" }
];

