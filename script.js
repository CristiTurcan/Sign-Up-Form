const user_password = document.getElementById('user_password')
const passwordInstructions = document.querySelector('.passwordInstructions')

const upper = document.querySelector('#upper');
upper.classList.add('upper');
upper.style.color='red';
const lower = document.querySelector('#lower');
lower.classList.add('lower');
lower.style.color='red';
const number = document.querySelector('#number');
number.classList.add('number');
number.style.color='red';
const character = document.querySelector('#character');
character.classList.add('character');
character.style.color='red';
const password_length = document.querySelector('#password_length')
password_length.classList.add('password_length');
password_length.style.color='red';


// hide/activate password instructions

passwordInstructions.classList.add('passwordInstructions');
passwordInstructions.style.display = "none";

user_password.addEventListener( "focus" , () => {
    passwordInstructions.style.display = "block";
});

user_password.addEventListener( "focusout" , () => {
    passwordInstructions.style.display = "none";
});



const searchLowercase = function (str) {
    if(str.search(/[a-z]/) >= 0)
        lower.style.color='green';
    else
        lower.style.color='red';
}

const searchUppercase = function (str) {
    if(str.search(/[A-Z]/) >= 0)
        upper.style.color='green';
    else
        upper.style.color='red';
}

const searchNumber = function (str) {
    if(str.search(/[0-9]/) >= 0)
        number.style.color='green'
    else
        number.style.color='red'
}

const searchSpecialCharacter = function (str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(specialChars.test(str))
        character.style.color='green';
    else
        character.style.color='red';
}

const searchPasswordLength = function (str) {
    if(str.length > 7)
        password_length.style.color='green';
    else
        password_length.style.color='red';
}

function checkPassword () {
    var password = user_password.value;

    searchLowercase(password);
    searchUppercase(password);
    searchNumber(password);
    searchSpecialCharacter(password);
    searchPasswordLength(password);
}

user_password.addEventListener('input' , checkPassword);


const confirm_password = document.querySelector('#user_confirm_password');

const not_match = document.querySelector('.not_match');
not_match.classList.add('not_match');
not_match.style.display='none';
not_match.style.color='red';

confirm_password.addEventListener('focus', () => {
    not_match.style.display='block';
});

confirm_password.addEventListener('focusout', () => {
    not_match.style.display='none';
});

function confirmPassword () {
    return user_password.value === confirm_password.value;
}

confirm_password.addEventListener('input', () => {
    if(confirmPassword()) {
        not_match.style.color = 'green';
        not_match.textContent='Passwords match';
    }
    else {
        not_match.style.color = 'red';
        not_match.textContent = 'Passwords do not match';
    }
})

const submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', (event) => {
    if(!confirmPassword()) {
        alert('Passwords do not match');
        event.preventDefault();
    }
})