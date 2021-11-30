let submitButton = document.querySelector('.contact__button');
let input = document.querySelectorAll('input');
let errorMessages = {
  1: 'First Name cannot be empty',
  2: 'Last Name cannot be empty',
  3: 'Looks like this is not an email',
  4: 'Password cannot be empty'
}

submitButton.addEventListener('click',errorAll);

function errorAll() {

  input.forEach(errorSpecific);

  function errorSpecific(item) {
    if(!item.validity.valid) {
      let dataAttribute = item.getAttribute('data-errorId');
      let errorIcon = document.querySelector(`.contact__error-icon[data-errorId='${dataAttribute}']`);
      let errorMessage = document.querySelector(`.contact__error-text[data-errorId='${dataAttribute}']`);

/*       let inputWithError = document.querySelector(`input[data-errorId='${dataAttribute}']`); */

      item.classList.add('input-error-outline');
      errorIcon.classList.add('contact__error-icon-visible');
      errorMessage.innerText = errorMessages[dataAttribute];
      errorMessage.classList.add('contact__error-text-visible');
    }
  }
}
