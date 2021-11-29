const firstName = document.getElementById('first-name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const emailError = document.getElementById('email-error');
const nameError = document.getElementById('name-error');
const surnameError = document.getElementById('surname-error');
const passwordError = document.getElementById('password-error');

const nameErrorIcon = document.getElementById('name-error-icon');
const surnameErrorIcon = document.getElementById('surname-error-icon');
const emailErrorIcon = document.getElementById('email-error-icon');
const passwordErrorIcon = document.getElementById('password-error-icon');

const form  = document.getElementsByTagName('form')[0];
const submitButton = document.getElementById('submit-button');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.style.display = 'none'; // Reset the visual state of the message
      emailErrorIcon.style.display = 'none';
    }

    if (firstName.validity.valid){
      // If there is still an error, show the correct error
      nameError.textContent = ''; // Reset the content of the message
      nameError.style.display = 'none'; // Reset the visual state of the message
      nameErrorIcon.style.display = 'none';
    }

    if (surname.validity.valid){
      // If there is still an error, show the correct error
      surnameError.textContent = ''; // Reset the content of the message
      surnameError.style.display = 'none'; // Reset the visual state of the message
      surnameErrorIcon.style.display = 'none';
    }

    if (password.validity.valid){
      // If there is still an error, show the correct error
      passwordError.textContent = ''; // Reset the content of the message
      passwordError.style.display = 'none'; // Reset the visual state of the message
      passwordErrorIcon.style.display = 'none';
    }

  });

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
  
    if(!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorEmail();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
});

form.addEventListener('submit', function (event) {
  if(!firstName.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorName();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
  }
});

form.addEventListener('submit', function (event) {
  if(!surname.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorSurname();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
  }
});

form.addEventListener('submit', function (event) {
  if(!password.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorPassword();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
  }
});


function showErrorEmail() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address';
    emailError.style.display = 'block';
    emailErrorIcon.style.display = 'block';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Looks like this is not an email';
    emailError.style.display = 'block';
    emailErrorIcon.style.display = 'block';
  } 
}

function showErrorName() {
  if(firstName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    nameError.textContent = 'First Name cannot be empty';
    nameError.style.display = 'block';
    nameErrorIcon.style.display = 'block';
  } 
}

function showErrorSurname() {
  if(surname.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    surnameError.textContent = 'Surname cannot be empty';
    surnameError.style.display = 'block';
    surnameErrorIcon.style.display = 'block';
  } 
}

function showErrorPassword() {
  if(password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = 'Password cannot be empty';
    passwordError.style.display = 'block';
    passwordErrorIcon.style.display = 'block';
  } 
}