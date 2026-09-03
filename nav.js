// navigation.js

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("nav");

  nav.className = "main-nav";

  nav.innerHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        <a href="index.html">Vijay Jairam</a>
      </div>

      <div class="nav-links">
        <a href="index.html">About Me</a>
        <a href="personal.html">Personal</a>
        <a href="education.html">Education</a>
        <a href="experience.html">Experience</a>
      </div>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);
});
