# 🚀 DevSpace - Responsive Navbar with Hamburger Menu

A modern, fully responsive navigation bar built with vanilla HTML, CSS, and JavaScript. This project was developed as part of the **Web Development Track (Task 21)**, focusing on responsive design, media queries, and toggle interactions.

## 📌 Features
- **Responsive Design:** Displays a horizontal navbar on desktop and collapses into a sleek hamburger menu on mobile devices (Breakpoint: `768px`).
- **Smooth Animations:** 
  - CSS `cubic-bezier` transitions for a smooth slide-in menu effect.
  - Hamburger icon smoothly transforms into an 'X' (close icon) when opened.
- **Modern UI/UX:** Includes a sticky navbar with a glassmorphism effect (`backdrop-filter: blur`), smooth scrolling, and hover animations.
- **Accessibility (a11y):** Implements `aria-label` and `aria-expanded` attributes for screen readers.
- **Smart Interactions (JS):** 
  - Menu closes when a link is clicked.
  - Menu closes when clicking outside (on the overlay).
  - Prevents background body scrolling when the mobile menu is open.
- **Complete Page Structure:** Includes Hero, About, Services, and Contact sections to demonstrate actual scrolling and navigation.

## 🛠️ Tools & Technologies Used
- **HTML5:** Semantic structure.
- **CSS3:** Flexbox, CSS Variables, Media Queries, Transitions, CSS Grid (for sections).
- **JavaScript (ES6):** DOM Manipulation, Event Listeners, Class toggling.
- **Icons:** FontAwesome (via CDN).

## 🧠 Approach

1. **HTML Structure:** Used semantic tags like `<header>`, `<nav>`, `<main>`, and `<section>`. Added unique IDs to sections for smooth anchor link navigation.
2. **CSS Styling (Mobile-First concept applied via media queries):** 
   - Used CSS Variables (`:root`) for easy color theming (e.g., `--primary-color`).
   - Implemented `@media (max-width: 768px)` to hide the horizontal menu, show the hamburger button, and position the mobile menu off-screen (`right: -100%`).
3. **Animations:** Used `transition` on the `right` property to slide the mobile menu in (`right: 0`). The hamburger icon uses `transform: rotate()` and `translateY()` to create the 'X' effect.
4. **JavaScript Logic:** Instead of manipulating inline styles, I used `classList.toggle('active')` to trigger CSS transitions. Added an overlay div to handle outside clicks and a scroll listener to add a shadow to the navbar when scrolling down.

## 💻 Deployment Configuration

This is a static website and requires no build step.
- **Recommended Hosting:** GitHub Pages, Netlify, or Vercel.
- **Build Command:** None (Leave blank).
- **Publish Directory:** `/` (Root directory).
- **Deployment Steps (Netlify):**
  1. Connect your GitHub repository to Netlify.
  2. Select the main branch.
  3. Click "Deploy".

## ⏪ Rollback Evidence (Template)

*Note: Since this is a static site, here is how rollbacks are handled in a production environment:*
- **Vercel/Netlify:** In the deployments dashboard, go to "Deploys", find the last stable version, and click **"Rollback to this deploy"**.
- **Git Method:** If a bug is introduced, I can revert the commit using: `git revert <commit-hash>` and push the changes to trigger a new stable deploy.
*(Insert a screenshot here of your Netlify/Vercel deployment history showing previous successful builds).*

---

## 🎤 Interview Questions & Answers

**1. How do media queries change layout at different widths?**
> Media queries use the `@media` rule to apply CSS only when specific viewport conditions are met. By using `max-width: 768px`, I can override desktop styles—changing the flex direction from row to column and hiding/showing specific elements—ensuring the UI remains usable and visually appealing on smaller screens without breaking the layout.

**2. How would you animate a menu opening?**
> Instead of changing `display: none` to `display: block` (which breaks animations), I position the mobile menu off-screen using `right: -100%`. When the `.active` class is added via JavaScript, I change it to `right: 0`. By adding `transition: right 0.4s ease-in-out`, the browser smoothly animates the menu sliding into view. I also use `cubic-bezier` for a more natural, bouncy feel.

**3. Why toggle a class instead of inline styles?**
> Toggling a class (`.active`) separates styling logic (CSS) from behavior logic (JS). It keeps the JavaScript clean and allows the CSS engine to handle transitions natively. If I used inline styles (e.g., `element.style.right = '0'`), it becomes extremely difficult to manage media queries, animations, and hover states, and it clutters the DOM.

## 📈 Outcome
This project strengthened my understanding of responsive web design, particularly the interaction between CSS media queries and JavaScript DOM manipulation. I successfully implemented a smooth, animated mobile navigation pattern that is standard in modern web development.