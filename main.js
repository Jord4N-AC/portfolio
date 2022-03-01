/* Mobile Menu */
const body = document.querySelector('body');
const menuIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#menu-mobile');
const closeIcon = document.querySelector('#closebtn');
const menuLinks = document.querySelectorAll('.menu-link-mb');


function display() {
  mobileMenu.style.width = '100%';
  mobileMenu.style.transform = 'translate(0%)';
  body.style.overflow = 'hidden';
}

function disapear() {
  mobileMenu.style.width = '0%';
  mobileMenu.style.transform = 'translate(-100%)';
  body.style.overflow = 'initial';
}

menuIcon.addEventListener('click', display);
closeIcon.addEventListener('click', disapear);
menuLinks.forEach(link => {
  link.addEventListener('click', disapear);
});

console.log(menuIcon);