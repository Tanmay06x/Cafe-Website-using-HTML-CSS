const container=document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
})

loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
})


const menuIcon = document.querySelector(".icon");
const menu = document.querySelector(".secondnav");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});