document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
        <nav class="nav-container">

            <a href="#about" class="nav-name">
                Vijay Jairam
            </a>

            <div class="nav-links">

                <a href="#about" data-section="about">
                    About Me
                </a>

                <a href="#personal" data-section="personal">
                    Personal
                </a>

                <a href="#education" data-section="education">
                    Education
                </a>

                <a href="#experience" data-section="experience">
                    Experience
                </a>

            </div>

        </nav>
    `;


    /*
    ----------------------------------------
    SMOOTH NAVIGATION
    ----------------------------------------
    */

    const navLinks = document.querySelectorAll(
        ".nav-links a, .nav-name"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = link.getAttribute("href");

            if (targetID.startsWith("#")) {

                event.preventDefault();

                const targetSection =
                    document.querySelector(targetID);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    /*
    ----------------------------------------
    ACTIVE NAVIGATION LINK
    ----------------------------------------
    */

    const sections = document.querySelectorAll(
        "#about, #personal, #education, #experience"
    );

    const menuLinks = document.querySelectorAll(
        ".nav-links a"
    );


    function updateActiveNavigation() {

        let currentSection = "about";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection = section.id;

            }

        });


        menuLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.dataset.section === currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();

});
