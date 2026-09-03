// navigation.js

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");

  nav.className = "main-nav";

  nav.innerHTML = `
    <div class="nav-container">
      <a class="nav-brand" href="index.html">Vijay Jairam</a>

      <div class="nav-links">
        <a href="index.html">About Me</a>
        <a href="personal.html">Personal</a>
        <a href="education.html">Education</a>
        <a href="experience.html">Experience</a>
      </div>
    </div>
  `;

  document.body.prepend(nav);
});
