/* Mobile Menu */
const body = document.querySelector('body');
const menuIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#menu-mobile');
const closeIcon = document.querySelector('.closebtn');
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

function disapearEcsAndResize(event) {
  if (
    (window.innerWidth > 991)
    || (event.key === 'Escape')) {
    disapear();
  }
}

menuIcon.addEventListener('click', display);
closeIcon.addEventListener('click', disapear);
body.addEventListener('keyup', disapearEcsAndResize);
menuLinks.forEach((link) => {
  link.addEventListener('click', disapear);
});
window.addEventListener('resize', disapearEcsAndResize);

// Section 2
// &
// PopUp Window

const cardsContent = {
  images: {
    card_1: 'images/cards/card1.svg',
    card_1_popup: 'images/cards/card_1_popup.svg',
    card_2and5: 'images/cards/card_2&5_desktop_light.svg',
    card_3and6: 'images/cards/card_3&6_desktop_light.svg',
    card_4and7: 'images/cards/card_4&7_desktop_light.svg',
    sl_btn: 'images/Icons/see_live_icon.svg',
    ss_btn: 'images/Icons/see_source_icon.svg'
  },
  header: {
    mobile: [
      'Multi-Post Stories', 
      'Profesional Art Printing Data'
    ],
    desktop: [
      'Multi-Post Stories',
      'Profesional Art Printing Data More',
      'Data Dashboard Healthcare',
      'Website Protfolio'
    ],
    popup_mobile: 'Multi Post Stories',
    popup_desktop: 'Keeping track of hundreds  of components website'
  }, 
  paragraph: {
    card_1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    card_2_7: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    popup_mobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    popup_desktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  tags: {
    cards: ['css', 'html', 'bootstrap', 'Ruby']
  },
  buttons: [
    'See Project', 'See Live', 'See Source'
  ]
};

function createCard() {
  const worksSection = document.querySelector('#works-section');
  const header = `
        <header id="works-header">
            <h2>My Recent Works</h2>
            <div id="header-line"></div>
        </header>
  `;

  for(let i = 7; i >= 1; i -= 1) {
    if(i === 1) {
      const card = `
        <div id="main-card" class="card${i}">
            <img src="${cardsContent.images.card_1}" alt="project${i} screenshot">
            <div class="content">
                <h3>${cardsContent.header.mobile[0]}</h3>
                <p id="card${i}-p" class="p-format">
                    ${cardsContent.paragraph.card_1}
                </p>
                <ul class="tag-group">
                    <li class="tag">${cardsContent.tags.cards[0]}</li>
                    <li class="tag">${cardsContent.tags.cards[1]}</li>
                    <li class="tag">${cardsContent.tags.cards[2]}</li>
                    <li class="tag">${cardsContent.tags.cards[3]}</li>
                </ul>
                <a class="btn see-project-btn main-btn" href="#main-card">
                    ${cardsContent.buttons[0]}
                </a>
            </div>
        </div>
      `;
      worksSection.insertAdjacentHTML('afterbegin', card);
      break;
    } 

    const card = `
    <div id="c${i}" class="card${i} card">
        <div class="content">
            <h3>${cardsContent.header.mobile[1]}</h3>
            <p class="p-format">
                ${cardsContent.paragraph.card_2_7}
            </p>
            <ul class="tag-group">
                <li class="tag">${cardsContent.tags.cards[0]}</li>
                <li class="tag">${cardsContent.tags.cards[1]}</li>
                <li class="tag">${cardsContent.tags.cards[2]}</li>
            </ul>
        </div>
        <a class="btn btn-2 see-project-btn" href="#c${i}">
            ${cardsContent.buttons[0]}
        </a>
    </div>
    `;
    worksSection.insertAdjacentHTML('afterbegin', card);
  }

  worksSection.insertAdjacentHTML('afterbegin', header);
}

createCard();

// Modal
const buttons = document.querySelectorAll('.see-project-btn');

// function showModalWindow(ind) {
//   const cards = document.querySelectorAll('#main-card, .card');
//   const modalWindow = `
//         <div id="modal-container">
//         </div>
//   `;
 
//   console.log(cards[ind]);

//   cards[ind].insertAdjacentHTML('afterbegin', modalWindow);
// }

// buttons.forEach((btn, ind) => {
//   btn.addEventListener('click', () => {
//     showModalWindow(ind);
//   });
// });