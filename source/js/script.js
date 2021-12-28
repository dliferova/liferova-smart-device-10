//Реализация маски номера телефона в input
const phoneInputs = document.querySelectorAll("input[type=tel]");

phoneInputs.forEach(input => {
  const phoneMask = IMask(
    input, {
      mask: '+{7}(000)000-00-00',
    });

  input.addEventListener('focus', (evt) => {
    evt.preventDefault()
    if (input.value === '') {
      phoneMask.value = "+7("
    }
  })
})

//Реализация аккордеона
const accordionItems = document.querySelectorAll('.accordion-item')

const accordionItemsGroup = {}
let openedItem = null;

const openItem = (element) => {
  element.classList.remove('accordion-item_closed');
  element.classList.add('accordion-item_opened');
}

const closeItem = (element) => {
  element.classList.add('accordion-item_closed');
  element.classList.remove('accordion-item_opened');
}

const onItemClick = (item) => {
  if (openedItem && openedItem === item.id) {
    closeItem(item)
    openedItem = null;
  } else if (openedItem && openedItem !== item.id) {
    closeItem(accordionItemsGroup[openedItem])
    openItem(item)
    openedItem = item.id
  } else {
    openItem(item)
    openedItem = item.id
  }
}

accordionItems.forEach(item => {
  accordionItemsGroup[item.id] = item;
  item.classList.remove('accordion-item_nojs');
  item.classList.add('accordion-item_closed');
  item.addEventListener('click', (evt) => {
    onItemClick(item)
  })
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
const body =  document.querySelector('.page__body');

// https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const firstFocusableElement = modalWrapper.querySelectorAll(focusableElements)[0];
const focusableContent = modalWrapper.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
});

let isModalOpened = false;

const modalClose = () => {
  isModalOpened = false;
  body.classList.remove('overflow-hidden');
  modalWrapper.classList.toggle('modal_showed');
  feedbackFormModal.classList.add('feedback-form_modal_close');
}

const modalOpen = () => {
  isModalOpened = true;
  body.classList.add('overflow-hidden');
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
