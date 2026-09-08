document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       PRIMARY TOP NAVIGATION
    ====================================== */

    const primaryContainer =
        document.getElementById(
            "primary-navigation"
        );


    if (primaryContainer) {

        primaryContainer.innerHTML = `

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



    /* =====================================
       SECONDARY NAVIGATION
    ====================================== */

    const secondaryContainer =
        document.getElementById(
            "secondary-navigation"
        );


    if (secondaryContainer) {

        secondaryContainer.innerHTML = `

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



    /* =====================================
       LEFT PRIMARY NAVIGATION
    ====================================== */

    const sideNavigation =
        document.getElementById(
            "side-navigation"
        );


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

            </nav>

        `;

    }



    /* =====================================
       LEFT SECONDARY NAVIGATION
    ====================================== */

    const sideSecondary =
        document.getElementById(
            "side-secondary-navigation"
        );


    if (sideSecondary) {

        sideSecondary.innerHTML = `

            <nav class="side-navigation">

                <a href="hobbies.html">
                    Hobbies
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </nav>

        `;

    }



    /* =====================================
       CURRENT PAGE HIGHLIGHT
    ====================================== */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {

        currentPage = "index.html";

    }


    const navigationLinks =
        document.querySelectorAll(

            ".primary-navigation a, " +

            ".secondary-navigation a, " +

            ".side-navigation a"

        );


    navigationLinks.forEach(
        function (link) {


            const page =
                link
                    .getAttribute("href")
                    .split("/")
                    .pop();


            if (page === currentPage) {

                link.classList.add("active");

            }

        }
    );

});
