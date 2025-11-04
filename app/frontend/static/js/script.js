// ---------- Background Slideshow ----------
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // adjust later for more
const imageFolder = "/static/images/imageFolder/";
let currentIndex = 0;

const backgroundDiv = document.querySelector(".background-image");

// Set initial background
if (backgroundDiv) {
    backgroundDiv.style.backgroundImage = `url(${imageFolder}${images[0]})`;
}

// Function to change background
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    if (backgroundDiv) {
        backgroundDiv.style.backgroundImage = `url(${imageFolder}${images[currentIndex]})`;
    }
}

// Change every 7 seconds
setInterval(changeBackground, 7000);

// ---------- Sticky Menu ----------
const menu = document.getElementById("mainMenu");

window.addEventListener("scroll", function() {
    if (menu) {
        if (window.scrollY > 50) {
            menu.classList.add("scrolled");
        } else {
            menu.classList.remove("scrolled");
        }
    }
});


function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "/";
    }
}
