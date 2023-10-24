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

function checkPassword () {
    var password = user_password.value;

    searchLowercase(password);
    searchUppercase(password);
    searchNumber(password);
    searchSpecialCharacter(password);
}

user_password.addEventListener('input' , checkPassword);