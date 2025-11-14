"use strict";

const progressBar = document.querySelector(".scrollBar__progress");
if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){
    //calcul: valeur total du scroll de la page (.doc) + hauteur du viewport (.innerHeight) + la valeur de scroll(.scrollY)
    const maxScroll = document.body.scrollHeight - window.innerHeight; //valeur de scroll maximum
    const currentScroll = window.scrollY;

    const readPercentage = (currentScroll / maxScroll) *100; //pourcentage de scroll
    if(currentScroll >= 0){ //pour les valeurs négatives sur safari
        progressBar.style.setProperty('--scrollbar-width', readPercentage + "%");
    }
}

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


