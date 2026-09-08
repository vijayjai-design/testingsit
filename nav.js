document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       TOP PRIMARY NAVIGATION
    ============================== */

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


    /* ==============================
       TOP SECONDARY NAVIGATION
    ============================== */

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


    /* ==============================
       LEFT PRIMARY NAVIGATION
    ============================== */

    const leftPrimary =
        document.getElementById(
            "left-primary-navigation"
        );

    if (leftPrimary) {

        leftPrimary.innerHTML = `
            <nav class="left-nav">

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


    /* ==============================
       LEFT SECONDARY NAVIGATION
    ============================== */

    const leftSecondary =
        document.getElementById(
            "left-secondary-navigation"
        );

    if (leftSecondary) {

        leftSecondary.innerHTML = `
            <nav class="left-nav">

                <a href="hobbies.html">
                    Hobbies
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </nav>
        `;
    }


    /* ==============================
       CURRENT PAGE
    ============================== */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();

    if (!currentPage) {
        currentPage = "index.html";
    }


    const links =
        document.querySelectorAll(
            ".primary-nav a, " +
            ".secondary-nav a, " +
            ".left-nav a"
        );


    links.forEach(function (link) {

        const page =
            link
                .getAttribute("href")
                .split("/")
                .pop();

        if (page === currentPage) {
            link.classList.add("active");
        }

    });

});
