/* Mobile Menu */
const body = document.querySelector('body');
const menuIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#menu-mobile');
const closeIcon = document.querySelector('#close-menu-btn');
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
window.addEventListener('resize', disapearEcsAndResize);

menuLinks.forEach((link) => {
  link.addEventListener('click', disapear);
});

// Section 2
// &
// PopUp Window

const cardsContent = [
  // ('') empty values mean there no content for that Part
  // Content in some array follows this order
  // [mobile, mobilePopup, desktop, desktopPopup]
  {
    header: [
      'Multi-Post Stories', 'Multi Post Stories',
      'Multi-Post Stories', 'Keeping track of hundreds  of components website',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      'images/cards/card1.svg', 'images/cards/card_1_popup.svg',
      'images/cards/card1.svg', 'images/cards/card_1_popup.svg',
    ],
    technologies: [
      ['css', 'html', 'bootstrap', 'Ruby'], ['html', 'bootstrap', 'Ruby on rails'],
      ['css', 'html', 'bootstrap', 'Ruby'], ['html', 'bootstrap', 'Ruby on rails'],
    ],
    buttons: {
      text: ['See Project', 'See Live', 'See Source'],
      icon: [
        'images/Icons/see_live_icon.svg',
        'images/Icons/see_source_icon.svg',
      ],
      links: [
        'https://github.com/Jord4N-AC/portfolio',
      ],
    },
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Profesional Art Printing Data More', 'Profesional Art Printing Data More',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_2&5_desktop_light.svg',
      '', 'images/cards/card_2&5_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Data Dashboard Healthcare', 'Data Dashboard Healthcare',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_3&6_desktop_light.svg',
      '', 'images/cards/card_3&6_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Website Protfolio', 'Website Protfolio',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_4&7_desktop_light.svg',
      '', 'images/cards/card_4&7_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Profesional Art Printing Data More', 'Profesional Art Printing Data More',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_2&5_desktop_light.svg',
      '', 'images/cards/card_2&5_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Data Dashboard Healthcare', 'Data Dashboard Healthcare',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_3&6_desktop_light.svg',
      '', 'images/cards/card_3&6_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    header: [
      'Profesional Art Printing Data', 'Profesional Art Printing Data',
      'Website Protfolio', 'Website Protfolio',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    ],
    image: [
      '', 'images/cards/card_4&7_desktop_light.svg',
      '', 'images/cards/card_4&7_desktop_light.svg',
    ],
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
];

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

  for (let i = 7; i >= 1; i -= 1) {
    if (i === 1) {
      const card = `      
        <div id="main-card" class="card${i}">        
            <img src="${cardsContent[i - 1].image[mobile]}" alt="project${i} screenshot">
            <div class="content">
                <h3>${cardsContent[i - 1].header[mobile]}</h3>
                <p class="p-format card${i}-p">                
                    ${cardsContent[i - 1].description[mobile]}
                </p>
                <ul class="tag-group">
                    <li class="tag">${cardsContent[i - 1].technologies[mobile][0]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[mobile][1]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[mobile][2]}</li>
                    <li class="tag">${cardsContent[i - 1].technologies[mobile][3]}</li>
                </ul>
                <a class="btn see-project-btn main-btn" href="#modal-window">
                    ${cardsContent[0].buttons.text[0]}
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
            <h3>${cardsContent[i - 1].header[mobile]}</h3>
            <p class="p-format">
                ${cardsContent[i - 1].description[mobile]}
            </p>
            <ul class="tag-group">
                <li class="tag">${cardsContent[i - 1].technologies[0]}</li>
                <li class="tag">${cardsContent[i - 1].technologies[1]}</li>
                <li class="tag">${cardsContent[i - 1].technologies[2]}</li>
            </ul>
        </div>
        <a class="btn btn-2 see-project-btn" href="#modal-window">
            ${cardsContent[0].buttons.text[0]}
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
                        <h3>${cardsContent[ind].header[mobilePopup]}</h3>
                        <a class="close-btn close-modal-btn" href="#modal-${ind + 1}">&times;</a>
                    </div>
                    <ul class="tag-group">
                        <li class="tag">${cardsContent[0].technologies[mobilePopup][0]}</li>
                        <li class="tag">${cardsContent[0].technologies[mobilePopup][1]}</li>
                        <li class="tag">${cardsContent[0].technologies[mobilePopup][2]}</li>
                    </ul>
                </div>
                <div class="modal-content" class="content">                
                    <img id="modal-img" src="${cardsContent[ind].image[mobilePopup]}" alt="project${ind + 1} screenshot">
                    <div class="modal-description">                    
                        <p id="modal-p" class="p-format">
                          ${cardsContent[ind].description[mobilePopup]}
                        </p>
                        <div class="modal-btn-container">                        
                            <a class="btn modal-btn main-btn modal-btn-1" href="${cardsContent[0].buttons.links[0]}">
                            ${cardsContent[0].buttons.text[1]}
                                <img src="${cardsContent[0].buttons.icon[0]}" alt="${cardsContent[0].buttons.text[1]} Icon">
                            </a>
                            <a class="btn modal-btn main-btn modal-btn-2" href="${cardsContent[0].buttons.links[0]}">
                            ${cardsContent[0].buttons.text[2]}
                                <img src="${cardsContent[0].buttons.icon[1]}" alt="${cardsContent[0].buttons.text[2]} Icon">
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
      modalHeaders.innerHTML = cardsContent[ind].header[desktopPopup];
      modalParagraphs.innerHTML = cardsContent[ind].description[desktopPopup];
    } else {
      modalHeaders.innerHTML = cardsContent[ind].header[mobilePopup];
      modalParagraphs.innerHTML = cardsContent[ind].description[mobilePopup];
    }
  });
});

// Change Content When Resize, Changing content
const cardHeaders = document.querySelectorAll('.card h3');

function updateText() {
  if (window.innerWidth > 991) {
    cardHeaders.forEach((c, ind) => {
      c.innerHTML = cardsContent[ind + 1].header[desktop];
    });

    modalHeaders.innerHTML = cardsContent[popupInd].header[desktopPopup];
    modalParagraphs.innerHTML = cardsContent[popupInd].description[desktopPopup];
  } else {
    cardHeaders.forEach((c, ind) => {
      c.innerHTML = cardsContent[ind + 1].header[mobile];
    });

    modalHeaders.innerHTML = cardsContent[popupInd].header[mobilePopup];
    modalParagraphs.innerHTML = cardsContent[popupInd].description[mobilePopup];
  }
}

window.addEventListener('resize', updateText);
