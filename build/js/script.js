//Реализация маски номера телефона в input
const phoneField = document.getElementById("question-phone-field");

const phoneMask = IMask(
  phoneField, {
    mask: '+{7}(000)000-00-00'
  });

phoneField.addEventListener('focus', (evt) => {
  evt.preventDefault()
  if (phoneField.value === '') {
    phoneMask.value = "+7("
  }
})

//Реализация аккордеона
const accordionSectionsItem = document.querySelector('.accordion-item_theme_sections');

accordionSectionsItem.classList.remove('accordion-item_nojs');
accordionSectionsItem.classList.add('accordion-item_closed');

accordionSectionsItem.addEventListener('click', () => {
  accordionSectionsItem.classList.toggle('accordion-item_closed');
  accordionSectionsItem.classList.toggle('accordion-item_opened');
})

const accordionContactsItem = document.querySelector('.accordion-item_theme_contacts');

accordionContactsItem.classList.remove('accordion-item_nojs');
accordionContactsItem.classList.add('accordion-item_closed');

accordionContactsItem.addEventListener('click', () => {
  accordionContactsItem.classList.toggle('accordion-item_closed');
  accordionContactsItem.classList.toggle('accordion-item_opened');
})

// Реализация якорей
const callToActionLink = document.querySelector('#link-to-feedback-form');

const scrollTo = (elementClassToScroll) => {
  document.querySelector(elementClassToScroll).scrollIntoView({behavior: "smooth"})
}

callToActionLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  scrollTo('.feedback-form');
});
