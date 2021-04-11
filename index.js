const btnSignIn = document.getElementById('signin')
const btnReturn = document.getElementById('return')
const title = document.querySelector('.site-title')
const typeOfCourse = document.querySelector('.gradient-border')
const start = document.getElementById('starting')

btnSignIn.addEventListener('click', displayTruth)
btnReturn.addEventListener('click', displayHalfTruth)

function displayTruth() {
    title.innerHTML = 'Becoming a <strong>webdeveloper</strong> in <strong>this life</strong>'
    btnSignIn.classList.toggle('hidden')
    btnReturn.classList.toggle('hidden')
    typeOfCourse.textContent = 'No course'
    start.textContent = '...never finished...'
}

function displayHalfTruth() {
    title.innerHTML = 'Become a<strong> professional photographer </strong>in six weeks'
    btnSignIn.classList.toggle('hidden')
    btnReturn.classList.toggle('hidden')
    typeOfCourse.textContent = 'Pro course'
    start.textContent = 'Course starting soon'
}