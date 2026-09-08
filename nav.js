document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // PRIMARY NAVIGATION
    // ==========================================

    const primaryNavigation =
        document.getElementById("primary-navigation");

    if (primaryNavigation) {

        primaryNavigation.innerHTML = `
            <nav class="primary-nav">

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


    // ==========================================
    // SECONDARY NAVIGATION
    // ==========================================

    const secondaryNavigation =
        document.getElementById("secondary-navigation");

    if (secondaryNavigation) {

        secondaryNavigation.innerHTML = `
            <nav class="secondary-nav">

                <a href="hobbies.html">
                    Hobbies
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </nav>
        `;

    }


    // ==========================================
    // HIGHLIGHT CURRENT PAGE
    // ==========================================

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    const navLinks =
        document.querySelectorAll(
            ".primary-nav a, .secondary-nav a"
        );


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
