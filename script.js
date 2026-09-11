/* =========================================================
   MOHAMMED SALMAN — AVIATION PORTFOLIO JS
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.classList.add("hide");

    }, 2800);

});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* Cursor Hover */

const hoverElements = document.querySelectorAll(
    "a, button, .about-card, .skill-pills span"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "50px";
        cursorRing.style.height = "50px";
        cursorRing.style.borderColor = "#5bdcff";

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "32px";
        cursorRing.style.height = "32px";
        cursorRing.style.borderColor = "rgba(99,221,255,.7)";

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".about-card, .skill, .timeline-item, .boarding-pass, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "opacity .8s ease, transform .8s ease";

    revealObserver.observe(element);

});


/* =========================================================
   SKILL BARS
========================================================= */

const skills = document.querySelectorAll(".skill");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.3
    }
);


skills.forEach((skill) => {

    skillObserver.observe(skill);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2,8,18,.9)";

    } else {

        navbar.style.background = "rgba(2,8,18,.55)";

    }

});


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   PARALLAX AVIATION EFFECT
========================================================= */

const heroPhoto = document.querySelector(".hero-photo-area");

document.addEventListener("mousemove", (e) => {

    if (!heroPhoto) return;

    const x = (window.innerWidth / 2 - e.clientX) / 80;
    const y = (window.innerHeight / 2 - e.clientY) / 80;

    heroPhoto.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================================================
   RANDOM AVIATION LIGHTS
========================================================= */

const sky = document.querySelector(".sky-background");

function createLight() {

    const light = document.createElement("span");

    light.style.position = "absolute";
    light.style.width = "3px";
    light.style.height = "3px";
    light.style.borderRadius = "50%";

    light.style.background = "#65ddff";

    light.style.boxShadow =
        "0 0 10px #65ddff, 0 0 20px #65ddff";

    light.style.left =
        Math.random() * 100 + "%";

    light.style.top =
        Math.random() * 100 + "%";

    light.style.opacity =
        Math.random() * .7 + .2;

    light.style.animation =
        `lightBlink ${Math.random() * 3 + 2}s infinite`;

    sky.appendChild(light);

}


for (let i = 0; i < 35; i++) {

    createLight();

}


/* =========================================================
   DYNAMIC LIGHT ANIMATION
========================================================= */

const dynamicStyle = document.createElement("style");

dynamicStyle.innerHTML = `

@keyframes lightBlink {

    0%, 100% {
        opacity: .1;
        transform: scale(.5);
    }

    50% {
        opacity: 1;
        transform: scale(1.5);
    }

}

`;

document.head.appendChild(dynamicStyle);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.style.color = "#8ba5bf";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#5bdcff";

        }

    });

});


/* =========================================================
   SMOOTH BUTTON MOVEMENT
========================================================= */

document.querySelectorAll("a[href^='#']").forEach((link) => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(`
========================================
     MOHAMMED SALMAN
     AVIATION PROFESSIONAL
========================================

STATUS: READY FOR TAKEOFF ✈
SYSTEM: ONLINE
PROFILE: MS-026

========================================
`);