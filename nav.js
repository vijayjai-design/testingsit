document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // TOP NAVIGATION BAR
    // ==============================

    const topNav = document.getElementById("top-navigation");

    if (topNav) {

        topNav.innerHTML = `
            <nav class="primary-navigation">

                <a href="index.html">
                    About Me
                </a>

                <a href="personal.html">
                    Personal
                </a>

                <a href="education.html">
                    Education
                </a>

                <a href="experience.html">
                    Experience
                </a>

            </nav>
        `;

    }


    // ==============================
    // LEFT NAVIGATION
    // ==============================

    const sideNav = document.getElementById("side-navigation");

    if (sideNav) {

        sideNav.innerHTML = `
            <nav class="side-navigation">

                <a href="index.html">
                    About Me
                </a>

                <a href="personal.html">
                    Personal
                </a>

                <a href="education.html">
                    Education
                </a>

                <a href="experience.html">
                    Experience
                </a>

            </nav>
        `;

    }


    // ==============================
    // CURRENT PAGE HIGHLIGHT
    // ==============================

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    const links = document.querySelectorAll(
        ".primary-navigation a, .side-navigation a"
    );


    links.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
