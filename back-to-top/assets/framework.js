"use strict";

const backToTop = document.querySelector(".backToTop");

if(backToTop){
    window.addEventListener("scroll", showBackToTop);
}

function showBackToTop(){
    const currentScroll = window.scrollY; //il calcule la position quand on scroll
    if(currentScroll > 300){ //changer la valeur en fonction de notre fenêtre
        backToTop.classList.add("backToTop--show");
    }else{
        backToTop.classList.remove("backToTop--show"); //remasquer le bouton quand on remonte
    }
}

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


