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

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
})