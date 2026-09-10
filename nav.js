/* ==========================================
   CENTRAL NAVIGATION DATA
========================================== */

const navItems = {

    primary: [

        {
            label: "About Me",
            url: "index.html#about"
        },

        {
            label: "Education",
            url: "index.html#education"
        },

        {
            label: "Experience",
            url: "index.html#experience"
        },

        {
            label: "Personal",
            url: "index.html#personal"
        },

        {
            label: "Hobbies",
            url: "hobbies.html"
        }

    ],


    secondary: [

        {
            label: "Resume",
            url: "resume.pdf"
        },

        {
            label: "Contact",
            url: "mailto:your-email@example.com"
        },

        {
            label: "Iowa State University",
            url: "https://www.iastate.edu/"
        }

    ]

};


/* ==========================================
   CREATE TOP NAVIGATION BARS
========================================== */

function renderTopNav() {

    const primaryContainer =
        document.getElementById(
            "primary-nav-top"
        );


    const secondaryContainer =
        document.getElementById(
            "secondary-nav-top"
        );


    /* PRIMARY */

    if (primaryContainer) {

        const primaryLinks =
            navItems.primary

                .map(
                    item =>
                        `<li>
                            <a href="${item.url}">
                                ${item.label}
                            </a>
                        </li>`
                )

                .join("");


        primaryContainer.innerHTML =

            `<ul class="nav-horizontal-list">

                ${primaryLinks}

            </ul>`;

    }


    /* SECONDARY */

    if (secondaryContainer) {

        const secondaryLinks =
            navItems.secondary

                .map(
                    item =>
                        `<li>
                            <a href="${item.url}">
                                ${item.label}
                            </a>
                        </li>`
                )

                .join("");


        secondaryContainer.innerHTML =

            `<ul class="nav-horizontal-list">

                ${secondaryLinks}

            </ul>`;

    }

}


/* ==========================================
   CREATE LEFT NAVIGATION
========================================== */

function renderSideNav() {

    const sideContainer =
        document.getElementById(
            "side-nav-container"
        );


    if (!sideContainer) {

        return;

    }


    const renderList = (items) =>

        items

            .map(
                item =>
                    `<li>
                        <a href="${item.url}">
                            ${item.label}
                        </a>
                    </li>`
            )

            .join("");


    sideContainer.innerHTML = `

        <nav>

            <div class="side-nav-group">

                <h4>
                    Primary Navigation
                </h4>

                <ul>

                    ${renderList(
                        navItems.primary
                    )}

                </ul>

            </div>


            <div class="side-nav-group">

                <h4>
                    Secondary Navigation
                </h4>

                <ul>

                    ${renderList(
                        navItems.secondary
                    )}

                </ul>

            </div>

        </nav>

    `;

}


/* ==========================================
   START NAVIGATION
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderTopNav();

        renderSideNav();

    }
);
