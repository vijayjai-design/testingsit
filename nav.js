document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("nav");

  nav.className = "main-nav";

  nav.innerHTML = `
    <div class="nav-container">

      <a href="index.html" class="nav-link">
        About Me
      </a>

      <a href="personal.html" class="nav-link">
        Personal
      </a>

      <a href="education.html" class="nav-link">
        Education
      </a>

      <a href="experience.html" class="nav-link">
        Experience
      </a>

    </div>
  `;

  nav.style.width = "100%";
  nav.style.backgroundColor = "#1a1a1a";
  nav.style.borderBottom = "1px solid #444";
  nav.style.position = "sticky";
  nav.style.top = "0";
  nav.style.zIndex = "1000";

  const navContainer = nav.querySelector(".nav-container");

  navContainer.style.display = "flex";
  navContainer.style.alignItems = "center";
  navContainer.style.justifyContent = "flex-start";
  navContainer.style.gap = "30px";
  navContainer.style.padding = "18px 30px";

  const links = nav.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontFamily = "Arial, sans-serif";
    link.style.fontSize = "16px";
    link.style.fontWeight = "bold";
    link.style.transition = "color 0.2s ease";

    link.addEventListener("mouseenter", function () {
      link.style.color = "#aaaaaa";
    });

    link.addEventListener("mouseleave", function () {
      link.style.color = "white";
    });
  });

  // Put the navigation at the TOP of the page
  document.body.prepend(nav);
});
