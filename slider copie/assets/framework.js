"use strict";

const splideEl= document.querySelector(".splide");

if(splideEl){
    const splide = new Splide(splideEl, {
        type: "loop",
    });
    splide.mount();
}

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear