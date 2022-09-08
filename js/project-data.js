const projectData = [
  {
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio01.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio02.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio03.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio01.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio02.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
  {
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    image: 'card_portfolio03.jpg',
    liveVersion: 'liveVersion',
    linkSource: 'linkSource',
  },
];

const popModal = document.querySelector('.popup');
const hero = document.querySelector('.hero__container');
const aboutme = document.querySelector('.aboutme');
const contact = document.querySelector('.form__content');
const works = document.querySelector('.works');
const footer = document.querySelector('.footer');
const modalClose = document.querySelector('#closeModal');

for (let i = 0; i < projectData.length; i += 1) {
// console.log(projectData[i]);
  const cardsCard = document.createElement('div');
  cardsCard.classList.add('cards__card');
  cardsCard.classList.add('backcard01');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card__container');

  const cardH3 = document.createElement('h3');
  cardH3.classList.add('card__h3');
  cardH3.textContent = projectData[i].name;

  const cardp = document.createElement('p');
  cardp.classList.add('card__p');
  cardp.textContent = projectData[i].description;

  const cardTags = document.createElement('ul');
  cardTags.classList.add('card__tags');

  for (let it = 0; it < projectData[i].technologies.length; it += 1) {
    // console.log(projectData[i].technologies[it])
    const cardTagsLi = document.createElement('li');
    cardTagsLi.classList.add('card__tags__li');
    cardTagsLi.textContent = projectData[i].technologies[it];

    cardTags.appendChild(cardTagsLi);
  }

  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.classList.add('card__btn');
  cardBtn.setAttribute('onclick', `openPopup(${i})`);
  cardBtn.textContent = 'See Project';

  cardContainer.appendChild(cardH3);
  cardContainer.appendChild(cardp);
  cardContainer.appendChild(cardTags);

  cardsCard.appendChild(cardContainer);
  cardsCard.appendChild(cardBtn);

  document.querySelector('.cards').appendChild(cardsCard);
}

function openPopup(i) {
  popModal.classList.remove('hidden');

  document.querySelector('.popup__header__title').innerHTML = projectData[i].name;
  document.querySelector('.popup__p').innerHTML = projectData[i].description;
  document.querySelector('.popup__image').src = `/images/cards/${projectData[i].image}`;

  hero.classList.add('blur');
  aboutme.classList.add('blur');
  contact.classList.add('blur');
  works.classList.add('blur');
  footer.classList.add('blur');
}

modalClose.addEventListener('click', () => {
  popModal.classList.add('hidden');

  hero.classList.remove('blur');
  aboutme.classList.remove('blur');
  contact.classList.remove('blur');
  works.classList.remove('blur');
  footer.classList.remove('blur');
});
