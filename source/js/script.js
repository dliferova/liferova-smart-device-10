//Реализация маски номера телефона в input
const phoneInputs = document.querySelectorAll("input[type=tel]");

phoneInputs.forEach(input => {
  const phoneMask = IMask(
    input, {
      mask: '+{7}(000)000-00-00'
    });

  input.addEventListener('focus', (evt) => {
    evt.preventDefault()
    if (input.value === '') {
      phoneMask.value = "+7("
    }
  })
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
  scrollTo('.feedback-form_scroll-to');
});

//Реализация поп-апа
const feedbackButton = document.querySelector('.feedback-button');
const feedbackFormModal = document.querySelector('.feedback-form_modal');
const nameInput = feedbackFormModal.querySelector('#name-field');
const phoneInput = feedbackFormModal.querySelector('#phone-field');
const questionInput = feedbackFormModal.querySelector('#question-field');
const feedbackCloseModalButton = document.querySelector('.feedback-form__modal-close-button');
const modalWrapper = document.querySelector('.modal');

let isModalOpened = false;

const modalClose = () => {
  isModalOpened = false;
  modalWrapper.classList.toggle('modal_showed');
  feedbackFormModal.classList.add('feedback-form_modal_close');
}

const modalOpen = () => {
  isModalOpened = true;
  modalWrapper.classList.toggle('modal_showed');
  feedbackFormModal.classList.remove('feedback-form_modal_close');
  nameInput.focus();
}

const onKeyPress = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (isModalOpened) {
      evt.preventDefault();
      modalClose();
    }
  }
}

document.body.addEventListener('click', (evt) => {
  if (evt.target === modalWrapper) {
    modalClose();
  }
})

feedbackButton.addEventListener('click', modalOpen);
feedbackCloseModalButton.addEventListener('click', modalClose);
document.addEventListener('keydown', onKeyPress);


// localstorage

const NAME_INPUT_VALUE_STORAGE_KEY = 'feedbackFormNameInputValue';
const PHONE_INPUT_VALUE_STORAGE_KEY = 'feedbackFormPhoneInputValue';
const QUESTION_INPUT_VALUE_STORAGE_KEY = 'feedbackFormQuestionInputValue';

nameInput.value = localStorage.getItem(NAME_INPUT_VALUE_STORAGE_KEY)
phoneInput.value = localStorage.getItem(PHONE_INPUT_VALUE_STORAGE_KEY)
questionInput.value = localStorage.getItem(QUESTION_INPUT_VALUE_STORAGE_KEY)

nameInput.addEventListener('change', (evt) => {
  localStorage.setItem(NAME_INPUT_VALUE_STORAGE_KEY, evt.target.value)
})

phoneInput.addEventListener('change', (evt) => {
  localStorage.setItem(PHONE_INPUT_VALUE_STORAGE_KEY, evt.target.value)
})

questionInput.addEventListener('change', (evt) => {
  localStorage.setItem(QUESTION_INPUT_VALUE_STORAGE_KEY, evt.target.value)
})
