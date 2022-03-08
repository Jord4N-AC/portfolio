/* Mobile Menu */
const body = document.querySelector('body');
const menuIcon = document.querySelector('.fa-bars');
const menuContainer = document.querySelector('#menu-mobile-container');
const closeIcon = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.menu-link-mb');

function display() {
  menuContainer.style.transform = 'translate(0%)';
  body.style.overflow = 'hidden';
}

function disapear() {
  menuContainer.style.transform = 'translate(-100%)';
  // body.style.overflow = 'initial';
}

function disapearEcsResizeClickout(event) {
  if (
    (window.innerWidth > 991)
    || (event.key === 'Escape')
    || (event.target === menuContainer)
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

// Section 2 & PopUp Window

const cardsContent = [
  { //1
    header: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/cards/card1.svg',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Multi Post Stories', 'Keeping track of hundreds  of components website',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_1_popup.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //2
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Profesional Art Printing Data More',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_2&5_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //3
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Data Dashboard Healthcare',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_3&6_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //4
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Website Protfolio',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_4&7_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //5
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Profesional Art Printing Data More',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_2&5_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //6
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Data Dashboard Healthcare',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_3&6_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
  { //7
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Jord4N-AC/portfolio',
    // Popup Window
    headerPopup: ['Profesional Art Printing Data', 'Website Protfolio',],
    descriptionPopup: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    imagePopup: 'images/cards/card_4&7_desktop_light.svg',
    technologiesPopup: ['html', 'bootstrap', 'Ruby on rails'],
    buttonsPopup: ['See Live', 'See Source'],
    iconButtonsPopup: ['images/Icons/see_live_icon.svg', 'images/Icons/see_source_icon.svg',],
  },
];

function a() {
  console.log(cardsContent[0].heaader[0]);
  console.log(cardsContent[0].descriptionPopup[0]);
}
window.addEventListener('click', a);


// [mobile, mobilePopup, desktop, desktopPopup]
const mobile = 0;
const mobilePopup = 1;
const desktop = 2;
const desktopPopup = 3;

function createCard() {
  const worksSection = document.querySelector('#works-section');
  const headerSection = `
        <header id="works-header">
            <h2>My Recent Works</h2>
            <div id="header-line"></div>
        </header>
  `;

  for (let i = cardsContent.length; i >= 1; i -= 1) {
    if (i === 1) {
      const card = `      
        <div id="main-card" class="card${i}">
            <img src="${cardsContent[i - 1].image}" alt="project${i} screenshot">
            <div class="content">
                <h3>${cardsContent[i - 1].header}</h3>
                <p class="p-format card${i}-p">                
                    ${cardsContent[i - 1].description}
                </p>
                <ul class="tag-group">
                    <li class="tag">${cardsContent[i - 1].technologies[0]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[1]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[2]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[3]}</li>
                </ul>
                <a class="btn see-project-btn main-btn" href="#modal-window">
                    ${cardsContent[i - 1].button}
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
            <h3>${cardsContent[i - 1].header}</h3>
            <p class="p-format">
                ${cardsContent[i - 1].description}
            </p>
            <ul class="tag-group">
                <li class="tag">${cardsContent[i - 1].technologies[0]}</li>
                <li class="tag">${cardsContent[i - 1].technologies[1]}</li>
                <li class="tag">${cardsContent[i - 1].technologies[2]}</li>
            </ul>
        </div>
        <a class="btn btn-2 see-project-btn" href="#modal-window">
            ${cardsContent[i - 1].button}
        </a>
    </div>
    `;
    worksSection.insertAdjacentHTML('afterbegin', card);
  }

  worksSection.insertAdjacentHTML('afterbegin', headerSection);
}
createCard();

// PopUp Window
const buttons = document.querySelectorAll('.see-project-btn');
// For changing content
let modalHeaders;
let modalParagraphs;
let popupInd;

function showModalWindow(ind) {
  const cards = document.querySelectorAll('#main-card, .card');

  const modalHtmlContent = `
        <div class="modal-container">
            <div id="modal" class="card1 modal-window">
                <div class="hearder-container">
                    <div class="modal-header">
                        <h3>${cardsContent[0].headerPopup[0]}</h3>
                        <a class="close-btn close-modal-btn" href="#modal-${ind + 1}">&times;</a>
                    </div>
                    <ul class="tag-group">
                        <li class="tag">${cardsContent[ind].technologiesPopup[0]}</li>
                        <li class="tag">${cardsContent[ind].technologiesPopup[1]}</li>
                        <li class="tag">${cardsContent[ind].technologiesPopup[2]}</li>
                    </ul>
                </div>
                <div class="modal-content" class="content">
                    <img id="modal-img" src="${cardsContent[ind].imagePopup}" alt="project${ind + 1} screenshot">
                    <div class="modal-description">                    
                        <p id="modal-p" class="p-format">
                          ${cardsContent[ind].descriptionPopup[0]}
                        </p>
                        <div class="modal-btn-container">
                            <a class="btn modal-btn main-btn modal-btn-1" href="${cardsContent[ind].link}">
                            ${cardsContent[ind].buttonsPopup[0]}
                                <img src="${cardsContent[ind].iconButtonsPopup[0]}" alt="${cardsContent[ind].buttonsPopup[0]} Icon">
                            </a>
                            <a class="btn modal-btn main-btn modal-btn-2" href="${cardsContent[ind].link}">
                            ${cardsContent[ind].buttonsPopup[1]}
                                <img src="${cardsContent[ind].iconButtonsPopup[1]}" alt="${cardsContent[ind].buttonsPopup[1]} Icon">
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>`;

  cards[ind].insertAdjacentHTML('afterbegin', modalHtmlContent);
  body.style.overflow = 'hidden';

  // For changing content
  modalHeaders = document.querySelector('.modal-header h3');
  modalParagraphs = document.querySelector('#modal-p');

  const modalWindow = document.querySelector('.modal-container');
  const closeModaIcon = document.querySelector('.close-modal-btn');

  closeModaIcon.addEventListener('click', () => {
    modalWindow.remove();
    body.style.overflow = 'initial';
  });

  body.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalWindow.remove();
      body.style.overflow = 'initial';
    }
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
      modalWindow.remove();
      body.style.overflow = 'initial';
    }
  });
}

buttons.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    popupInd = ind;
    showModalWindow(ind);

    if (window.innerWidth > 991) {
      modalHeaders.innerHTML = cardsContent[ind].headerPopup[1];
      modalParagraphs.innerHTML = cardsContent[ind].descriptionPopup[1];
    } else {
      modalHeaders.innerHTML = cardsContent[ind].headerPopup[0];
      modalParagraphs.innerHTML = cardsContent[ind].descriptionPopup[0];
    }
  });
});

// Change Content When Resize, Changing content
const cardHeaders = document.querySelectorAll('.card h3');

function updateText() {
  if (window.innerWidth > 991) {
    cardHeaders.forEach((c, ind) => {
      c.innerHTML = cardsContent[ind + 1].headerPopup[1];
      
    });

    modalHeaders.innerHTML = cardsContent[popupInd].headerPopup[1];
    modalParagraphs.innerHTML = cardsContent[popupInd].descriptionPopup[1];
  } else {
    cardHeaders.forEach((c, ind) => {
      c.innerHTML = cardsContent[ind + 1].headerPopup[0];
    });

    modalHeaders.innerHTML = cardsContent[popupInd].headerPopup[0];
    modalParagraphs.innerHTML = cardsContent[popupInd].descriptionPopup[0];
  }
}

window.addEventListener('resize', updateText);
