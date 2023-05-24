/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId, close) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    cross = document.getElementById(close);

  // Validate that variables exist
  if (toggle && nav && cross) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
      cross.addEventListener('click', () => {
        nav.classList.remove('show-menu');
      });
    });
  }
};
showMenu('nav-toggle', 'nav-menu', 'close');

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

//////////////////////////////////////////////////

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const header2 = document.querySelector('.header_2');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
    header2.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    header2.classList.remove('scrolled');
  }
});
