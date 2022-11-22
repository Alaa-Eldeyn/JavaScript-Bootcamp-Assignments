let zName = document.querySelector("[type='text']");
let age = document.querySelector("[type='number']");
let email = document.querySelector("[type='email']");
let jobTitle = document.getElementsByTagName("select")[0];
let submit = document.querySelector("[type='submit']");

window.onload = () => {
    if (window.sessionStorage.getItem("userName")) {
        zName.value = window.sessionStorage.getItem("userName")
    }
    if (window.sessionStorage.getItem("age")) {
        age.value = window.sessionStorage.getItem("age")
    }
    if (window.sessionStorage.getItem("email")) {
        email.value = window.sessionStorage.getItem("email")
    }
    if (window.sessionStorage.getItem("jobTitle")) {
        jobTitle.value = window.sessionStorage.getItem("jobTitle")
    }
}


zName.oninput = () => window.sessionStorage.setItem("userName", zName.value)
age.oninput = () => window.sessionStorage.setItem("age", age.value)
email.oninput = () => window.sessionStorage.setItem("email", email.value)
jobTitle.oninput = () => window.sessionStorage.setItem("jobTitle", jobTitle.value)
submit.onclick = () => window.sessionStorage.clear();