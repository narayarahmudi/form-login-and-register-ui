const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-button');
const loginBtn = document.querySelector('.login-button');
const haveAccBtn = document.querySelector('.have-acc');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

haveAccBtn.addEventListener('click', () => {
    container.classList.remove('active');
});