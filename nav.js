document.addEventListener("DOMContentLoaded", function () {

    const primary = document.getElementById("primary-navigation");
    const secondary = document.getElementById("secondary-navigation");

    if (primary) {
        primary.innerHTML = `
            <a href="index.html">About Me</a>
            <a href="personal.html">Personal</a>
            <a href="education.html">Education</a>
            <a href="experience.html">Experience</a>
        `;
    }

    if (secondary) {
        secondary.innerHTML = `
            <a href="hobbies.html">Hobbies</a>
            <a href="contact.html">Contact</a>
        `;
    }

});
