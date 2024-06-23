
const login = document.getElementById('button');
const login2 = document.getElementById('button2');
const login3 = document.getElementById('button3');
const loginBox = document.getElementById('login-tab-box');
const loginBox2 = document.getElementById('login-tab-box2');
const loginBox3 = document.getElementById('login-tab-box3');
const cansel = document.getElementById('cansel');
const cansel2 = document.getElementById('cansel2');
const cansel3 = document.getElementById('cansel3');
const body = document.getElementById('body');
const nav = document.getElementById('nav');
const mainConteiner = document.getElementById('mainConteiner');
const signupButton = document.getElementById('signupButton')
const forgotPassword = document.getElementById('forgotPassword')


login.addEventListener("click", (loginclicked) =>{
    if (loginclicked) {
        loginBox.style.display = 'flex'
    }
});

login2.addEventListener("click", login2clicked );

function login2clicked() {
    if (login2clicked) {
        loginBox2.style.display = 'none';
    };
};

cansel.addEventListener('click', esc);

function esc() {
    if (esc) {
        loginBox.style.display = 'none'
    };
};

cansel2.addEventListener('click', esc2);

function esc2() {
    if (esc2) {
        loginBox2.style.display = 'none'
        loginBox.style.display = 'none'
    };
};

forgotPassword.addEventListener("click", function(forgotclick){
    if (forgotclick){
        loginBox3.style.display = 'flex'
    };
});

cansel3.addEventListener('click', esc3);

function esc3() {
    if (esc3) {
        loginBox3.style.display = 'none'
    };
};

signupButton.addEventListener('click', () =>{
    if (signupButton) {
        loginBox2.style.display = 'flex'
    };
});

