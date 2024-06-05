window.onload = function() {
    window.onscroll = function() {scrollFunction()};
    document.getElementById("fortniteImg").onmouseenter = function() {scaleDown()};
    document.getElementById("fortniteImg").onmouseleave = function() {scaleUp()};
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fortniteImg").style.transform = "scale(0.8)"; /* Zmenšení obrázku */
    } else {
        document.getElementById("fortniteImg").style.transform = "scale(1)"; /* Původní velikost obrázku */
    }
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


function scaleDown() {
    document.getElementById("fortniteImg").style.transform = "scale(0.8)";
}

function scaleUp() {
    document.getElementById("fortniteImg").style.transform = "scale(1)";
}
