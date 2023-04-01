const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// smooth scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});


document.getElementById('btnScrollTop').addEventListener('click', function() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
})
