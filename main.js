const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll("#header .toggle");
const links  = document.querySelectorAll("#header ul li a");

function showMenu() {
  nav.classList.toggle('show');
}

toggle.forEach(element => {
  element.addEventListener('click', showMenu)
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
})

// for (const element of toggle)

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
}

/* Testemonial corrusel*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true
});


/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .text, #home .image
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .logo, footer
  `,
  {
    interval: 100
  }
)


/* Back top top */


function backToTop() {
  const backToTopButton = document.querySelector(".back-top-top");
  if (window.scrollY > 200) {
    backToTopButton.classList.add('show')
  }
  else {
    backToTopButton.classList.remove("show")
  }
}



window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
})