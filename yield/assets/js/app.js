document.onscroll = function (e) {
    var nav = document.querySelector(".nav");
    var btnBackTop = document.querySelector(".btnBackTop");

    if (nav.offsetTop >= 10) {
        nav.classList.add("header-Shadow");
        btnBackTop.style.display = "block";
    } else {
        nav.classList.remove("header-Shadow");
        btnBackTop.style.display = "none";
    }
};

function backToTop() {
    window.scrollTo(0, 0);
}

const sliders = document.querySelector('.sliders');
const svgSliders = document.querySelectorAll(".sliders object");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
var count = 1;
const sizeSlide = svgSliders[0].clientWidth;


sliders.style.transition = "transform 0.4s ease-in-out";
sliders.style.transform = `translateX(${-sizeSlide * count}px)`;


nextBtn.addEventListener('click', () => {
    if (count >= svgSliders.length - 1) return;
    sliders.style.transition = "transform 0.4s ease-in-out";
    count++;
    sliders.style.transform = `translateX(${-sizeSlide * count}px)`;
});

prevBtn.addEventListener('click', () => {
    if (count <= 0) return;
    sliders.style.transform = "transform 0.4s ease-in-out";
    count--;
    sliders.style.transform = `translateX(${-sizeSlide * count}px)`;
});

sliders.addEventListener('transitionend', () => {
    if (svgSliders[count].id === 'lastSlide') {
        count = svgSliders.length - 2;
        sliders.style.transform = `translateX(${-sizeSlide * count}px)`;

    }
    if (svgSliders[count].id === 'firstSlide') {
        count = svgSliders.length - count;
        sliders.style.transform = `translateX(${-sizeSlide * count}px)`;

    }
});