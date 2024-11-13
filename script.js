let slideIndex = 0;
showSlides(slideIndex);

function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    showSlides(slideIndex);
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("sidebar-item");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "flex";
}
