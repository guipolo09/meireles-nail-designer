/* abre e fecha menu */
const nav = document.querySelector("header nav");
const togle = document.querySelectorAll("nav .togle");

for (const element of togle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* links */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar a sombra do header */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/* Testimonial Carousel */

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* Scroll Reveal */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { interval: 100 }
);

/* botao voltar para o top */

const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
