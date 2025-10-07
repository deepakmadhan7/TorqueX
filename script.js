// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

const sr = ScrollReveal({
  distance: "85px",
  duration: 1800,
});

sr.reveal(".hero h1", { delay: 300, origin: "left" });
sr.reveal(".hero p", { delay: 300, origin: "left" });
sr.reveal(".hero .herobuttons", { delay: 300, origin: "left" });
sr.reveal(".aboutsection h1", { delay: 300, origin: "top" });
sr.reveal(".aboutsection .about .aboutleft", {
  delay: 300,
  origin: "left",
});
sr.reveal(".aboutsection .about .aboutright", {
  delay: 300,
  origin: "top",
});
sr.reveal(".sponserssection h1", { delay: 300, origin: "top" });
sr.reveal(".sponserssection .sponsers-container .sponser-card", {
  delay: 300,
  origin: "bottom",
});
sr.reveal(".contactsection h1", {
  delay: 300,
  origin: "top",
});
sr.reveal(".contactsection .contact .map", {
  delay: 100,
  origin: "bottom",
});
sr.reveal(".contactsection .contact .locations", {
  delay: 100,
  origin: "bottom",
});
let currentSlide = 0;
    const slides = document.querySelectorAll("#carousel img");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
