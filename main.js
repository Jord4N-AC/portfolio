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

const cardsContent = {
  images: {
    m_d_popup: [
      [
        'images/cards/card1.svg', 'images/cards/card_1_popup.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_2&5_desktop_light.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_3&6_desktop_light.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_4&7_desktop_light.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_2&5_desktop_light.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_3&6_desktop_light.svg'
      ],
      [
        'images/cards/card2-7_mob_2&5_desk_dark.svg',
        'images/cards/card_4&7_desktop_light.svg'
      ]
    ]
  },
  header: {
    m_d_popup: [
      [
        'Multi-Post Stories',
        'Multi Post Stories',
        'Keeping track of hundreds  of components website'
      ],
      ['Profesional Art Printing Data', 'Profesional Art Printing Data More'],
      ['Profesional Art Printing Data', 'Data Dashboard Healthcare'],
      ['Profesional Art Printing Data', 'Website Protfolio'],
      ['Profesional Art Printing Data', 'Profesional Art Printing Data More'],
      ['Profesional Art Printing Data', 'Data Dashboard Healthcare'],
      ['Profesional Art Printing Data', 'Website Protfolio']
    ]
  }, 
  paragraph: {
    m_d_popup: [
      [
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
      ],
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard'
    ]
  },
  tags: {
    m_d_popup: [
      [
        ['css', 'html', 'bootstrap', 'Ruby'],
        ['html', 'bootstrap', 'Ruby on rails']
      ],      
      ['html', 'bootstrap', 'Ruby'],
      ['html', 'bootstrap', 'Ruby'],
      ['html', 'bootstrap', 'Ruby'],
      ['html', 'bootstrap', 'Ruby'],
      ['html', 'bootstrap', 'Ruby'],
      ['html', 'bootstrap', 'Ruby']
    ]
  },
  buttons: {
    m_d_popup: {
      text: ['See Project', 'See Live', 'See Source'],
      icon: [
        'images/Icons/see_live_icon.svg',
        'images/Icons/see_source_icon.svg'
      ]
    }
  }
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
            <img src="${cardsContent.images.m_d_popup[i - 1][0]}" alt="project${i} screenshot">
            <div class="content">
                <h3>${cardsContent.header.m_d_popup[i - 1][0]}</h3>
                <p id="card${i}-p" class="p-format">
                    ${cardsContent.paragraph.m_d_popup[i - 1][0]}
                </p>
                <ul class="tag-group">
                    <li class="tag">${cardsContent.tags.m_d_popup[i - 1][0][0]}</li>
                    <li class="tag">${cardsContent.tags.m_d_popup[i - 1][0][1]}</li>
                    <li class="tag">${cardsContent.tags.m_d_popup[i - 1][0][2]}</li>
                    <li class="tag">${cardsContent.tags.m_d_popup[i - 1][0][3]}</li>
                </ul>
                <a class="btn see-project-btn main-btn" href="#modal-window">
                    ${cardsContent.buttons.m_d_popup.text[0]}
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
            <h3>${cardsContent.header.m_d_popup[i - 1][0]}</h3>
            <p class="p-format">
                ${cardsContent.paragraph.m_d_popup[i - 1]}
            </p>
            <ul class="tag-group">
                <li class="tag">${cardsContent.tags.m_d_popup[i - 1][0]}</li>
                <li class="tag">${cardsContent.tags.m_d_popup[i - 1][1]}</li>
                <li class="tag">${cardsContent.tags.m_d_popup[i - 1][2]}</li>
            </ul>
        </div>
        <a class="btn btn-2 see-project-btn" href="#modal-window">
            ${cardsContent.buttons.m_d_popup.text[0]}
        </a>
    </div>
    `;
    worksSection.insertAdjacentHTML('afterbegin', card);
  }

  worksSection.insertAdjacentHTML('afterbegin', header);
}
createCard();



