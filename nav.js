document.addEventListener("DOMContentLoaded", function () {


    /*
    =======================================
    PRIMARY NAVIGATION — TOP
    =======================================
    */

    const primaryNav =
        document.getElementById("primary-nav");


    if (primaryNav) {

        primaryNav.innerHTML = `

            <nav class="top-primary-nav">

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



    /*
    =======================================
    SECONDARY NAVIGATION — TOP
    =======================================
    */

    const secondaryNav =
        document.getElementById("secondary-nav");


    if (secondaryNav) {

        secondaryNav.innerHTML = `

            <nav class="top-secondary-nav">

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
    =======================================
    PRIMARY NAVIGATION — LEFT
    =======================================
    */

    const leftPrimary =
        document.getElementById("left-primary-nav");


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



    /*
    =======================================
    SECONDARY NAVIGATION — LEFT
    =======================================
    */

    const leftSecondary =
        document.getElementById(
            "left-secondary-nav"
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



    /*
    =======================================
    HIGHLIGHT CURRENT PAGE
    =======================================
    */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (currentPage === "") {

        currentPage = "index.html";

    }


    const allNavigationLinks =
        document.querySelectorAll(

            ".top-primary-nav a, " +
            ".top-secondary-nav a, " +
            ".left-nav a"

        );


    allNavigationLinks.forEach(
        function (link) {


            const linkPage =
                link
                    .getAttribute("href")
                    .split("/")
                    .pop();


            if (linkPage === currentPage) {

                link.classList.add("active");

            }

        }
    );

});
