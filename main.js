/* Mobile Menu */
const body = document.querySelector('body');
const menuIcon = document.querySelector('.fa-bars');
const menuContainer = document.querySelector('#menu-mobile-container');
const closeIcon = document.querySelector('#closebtn');
const menuLinks = document.querySelectorAll('.menu-link-mb');


function display() {
  menuContainer.style.transform = 'translate(0%)';
  body.style.overflow = 'hidden';
}

function disapear() {
  menuContainer.style.transform = 'translate(-100%)';
  body.style.overflow = 'initial';
}

function disapearEcsResizeClickout(event) {
  if (
    (window.innerWidth > 991) ||
    (event.key === 'Escape') ||
    (event.target === menuContainer)
    ) {
    disapear();
  }
}

menuIcon.addEventListener('click', display);
closeIcon.addEventListener('click', disapear);
body.addEventListener('keyup', disapearEcsResizeClickout);
window.addEventListener('resize', disapearEcsResizeClickout);
window.addEventListener('click', disapearEcsResizeClickout);

menuLinks.forEach((link) => {
  link.addEventListener('click', disapear);
});
