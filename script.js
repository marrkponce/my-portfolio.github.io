const hamburger = document.querySelector(".nav_btn_mobile");
const navMenu = document.querySelector(".nav_sublist");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//Intro

const greetings = ['Hello there!', 'Welcome!','Hey!', 'Hola!', 'Greetings!', 'You\'ve come to the right place'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

document.getElementById('greeting').innerText = randomGreeting;
