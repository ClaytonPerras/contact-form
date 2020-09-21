const form = document.getElementsByTagName('form')[0];
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const inputs = document.querySelectorAll('.field');
const submit_btn = document.querySelector('.btn');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.innerHTML = ''; // Reset the content of the message
    } else {
        // If there is still an error, show the correct error
        showEmailError();
    }
});
name.addEventListener('input', function (event) {
    if (name.validity.valid) {
        nameError.innerHTML = ''; // Reset the content of the message
    } else {
        // If there is still an error, show the correct error
        showNameError();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit

    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }

    if (!name.validity.valid) {
        showNameError();
        event.preventDefault();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You must enter your e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Not a valid e-mail address.';
    }
}

function showNameError() {
    if (name.validity.valueMissing) {
        nameError.textContent = 'You must enter your name.'
    }
}