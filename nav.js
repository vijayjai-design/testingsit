document.addEventListener("DOMContentLoaded", function () {

    /*
    ========================================
    PRIMARY TOP NAVIGATION
    ========================================
    */

    const topNavigation =
        document.getElementById("top-navigation");


    if (topNavigation) {

        topNavigation.innerHTML = `

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

            <nav class="secondary-navigation">

                <a href="hobbies.html">
                    Hobbies
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </nav>

        `;

    }



    /*
    ========================================
    LEFT SIDE NAVIGATION
    ========================================
    */

    const sideNavigation =
        document.getElementById("side-navigation");


    if (sideNavigation) {

        sideNavigation.innerHTML = `

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

                <a href="hobbies.html">
                    Hobbies
                </a>

            </nav>

        `;

    }



    /*
    ========================================
    SHOW CURRENT PAGE
    ========================================
    */

    let currentPage =
        window.location.pathname.split("/").pop();


    /*
    GitHub Pages may return nothing
    when index.html is opened.
    */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage = "index.html";

    }



    /*
    Find every navigation link
    */

    const navigationLinks =
        document.querySelectorAll(
            ".primary-navigation a, .side-navigation a"
        );


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        /*
        Highlight current page
        */

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
