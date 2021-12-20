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
