/* Mobile Menu */
const mobileMenu = document.querySelector('#menu-mobile');
const closeIcon = document.querySelector('#closebtn');
const menuLinks = document.querySelectorAll('.menu-link-mb');


function disapear() {
  mobileMenu.style.width = '0%';
  mobileMenu.style.display = 'none';
}

closeIcon.addEventListener('click', disapear);
menuLinks.forEach(link => {
  link.addEventListener('click', disapear);
});

// console.log(menuLinks);