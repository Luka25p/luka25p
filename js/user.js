const userName = document.getElementById('userName')
const password = document.getElementById('password')
const loginSubmit = document.getElementById('loginSubmit')
const error = document.getElementById('error')
const correct = document.getElementById('correct')
const loginSubmitEnter = document.getElementById('loginSubmit')

loginSubmit.addEventListener("click", function loginSubmitclicked (){
    if (userName.value == 'luka' && password.value == 'luka') {
        console.log('yeees')
        error.style.display = 'none'
        correct.style.display = 'block'
        window.location="userPage.html"
    } else {
        console.log('nooo')
        error.style.display = 'block'
        correct.style.display = 'none'
    }
})
userName.addEventListener("keydown", (nal) =>{
    if (nal.key === 'Enter') {
        loginSubmitclicked()
    }
})





