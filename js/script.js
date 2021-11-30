(function () {
let submitButton = document.querySelector('.contact__button');

submitButton.addEventListener('click',errorAll);
})();

function errorAll() {

  let input = document.querySelectorAll('input');
  let errorMessages = {
    1: 'First Name cannot be empty',
    2: 'Last Name cannot be empty',
    3: 'Looks like this is not an email',
    4: 'Password cannot be empty'
  }
  
  input.forEach(errorSpecific);
  input.forEach(checkIfFixed);

  function errorSpecific(item) {
    if(!item.validity.valid) {
      let dataAttribute = item.getAttribute('data-errorId');
      let errorIcon = document.querySelector(`.contact__error-icon[data-errorId='${dataAttribute}']`);
      let errorMessage = document.querySelector(`.contact__error-text[data-errorId='${dataAttribute}']`);

      item.classList.add('input-error');
      errorIcon.classList.add('contact__error-icon-visible');
      errorMessage.innerText = errorMessages[dataAttribute];
      errorMessage.classList.add('contact__error-text-visible');
    }
  }

  function checkIfFixed(item) {
    item.addEventListener('input',checker);

    function checker(){
      let dataAttribute = item.getAttribute('data-errorId');
      let errorIcon = document.querySelector(`.contact__error-icon[data-errorId='${dataAttribute}']`);
      let errorMessage = document.querySelector(`.contact__error-text[data-errorId='${dataAttribute}']`);

      if(!item.validity.valid) item.classList.add('input-error');
      if(item.validity.valid) {
        item.classList.remove('input-error');
        errorIcon.classList.remove('contact__error-icon-visible');
        errorMessage.innerText = '';
        errorMessage.classList.remove('contact__error-text-visible');
      }
    }
  }
}

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
  return function(e) {
    e.preventDefault();
  };
})(), true);
