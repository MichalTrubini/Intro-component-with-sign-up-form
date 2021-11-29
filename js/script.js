let submitButton = document.querySelector('.contact__button');
let input = document.querySelectorAll('input');

submitButton.addEventListener('click',checkValidityAll);

function checkValidityAll() {

  input.forEach(checkValiditySpecific);

  function checkValiditySpecific(item) {

  }

}