let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(e){
    e.preventDefault();
    navLinks.classList.toggle("show-nav-links");
})