$(document).ready( function() {
    $('.shop-slider').slick({
        prevArrow: ".shop-button-prev",
        nextArrow: ".shop-button-next",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        
    });
});
//----slider1----//

const sliderLine = document.querySelector('.head-slider-photos-line');
const next = document.querySelector('.head-slider-button-next');
const prev = document.querySelector('.head-slider-button-prev');
const headSliderButtonText1 = document.querySelector('.head-slider-button-text1')     
let page = 1;
let x = 0;

next.addEventListener("click", function(){
    x = x -1067;
    if (x < -4268) {
        x = 0;}    
        sliderLine.style.left = x + 'px';});

prev.addEventListener("click", function(){
    x = x +1067;
    if (x > 0) {
        x = -4268;
    }
    sliderLine.style.left = x + 'px';});

next.addEventListener("click", function() {
    page = page + 1;
    if (page > 5) {page = 1;}
    headSliderButtonText1.innerHTML = page;
});

prev.addEventListener("click", function() {
    page = page - 1;
    if (page < 1) {page = 5;}
    headSliderButtonText1.innerHTML = page;
});

//----video----//

const mediaContentVideoCircle = document.querySelector('.mediaContent-video-circle');
const mediaContentVideoPlay = document.querySelector('.mediaContent-video-play');
const mediaContentVideoPause = document.querySelector('.mediaContent-video-pause');
const mediaContentVideo = document.querySelector('.mediaContent-video');
let i = 1;
let c = 0;

mediaContentVideoCircle.addEventListener("click", function () {
    g = i + c + 1;
    c = c + 1;
    if (g % 2 == 0) {
        a = "hidden";
        b = "visible";
    }
    else if (i > 5) {
        i = 1;
        c = 0;
    }   
    else {
        a = "visible";
        b = "hidden";
    }

    mediaContentVideoPlay.style.visibility = a;
    mediaContentVideoPause.style.visibility = b;
    //console.log(i, c, g);   
})

const video = document.querySelector('.mediaContent-video1');

mediaContentVideoCircle.addEventListener("click", function () {
    if (video.paused) { 
        video.play();}
    else {
        video.pause();
    }}, false);

video.onended = function () {
    c = c + 1;
    mediaContentVideoPlay.style.visibility = "visible";
    mediaContentVideoPause.style.visibility = "hidden";

    //console.log(i, c);    
};

mediaContentVideo.addEventListener("mouseover", function () {
    if (video.mousemove = true) { 
        mediaContentVideoCircle.style.display ="block";    
    }
})

mediaContentVideo.addEventListener("mouseout", function () {
    if (video.mouseout = true) {
        if(video.paused) {
            mediaContentVideoCircle.style.display ="block";    
        }
        else {mediaContentVideoCircle.style.display ="none";
        }       
    }
    else if (video.paused = true) {
        mediaContentVideoCircle.style.display ="block";    
    }
})

//----fix----//