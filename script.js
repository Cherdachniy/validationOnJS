let form = document.querySelector('.formWithValidation');

let password = form.querySelector('.password');
let passwordConfirmation = form.querySelector('.passwordConfirmation');

let fields = document.querySelectorAll('.field');

let generateError = (text) => {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
}

let removeValidation = () => {
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

let checkFieldPresence = () => {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            let error = generateError('Cannot be blank');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

let checkPasswordMatch = () => {
    if (password.value !== passwordConfirmation.value) {
        let error = generateError('Password doesnt match');
        password.parentElement.insertBefore(error, password);
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    removeValidation();

    checkFieldPresence();

    checkPasswordMatch();
})


