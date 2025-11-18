"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen); //click sur le bouton

    for(let menuLink of menuLinks){ //click sur les liens
        menuLink.addEventListener("click", menuOpen);
    }

    function menuOpen(){ //fonction pour ouvrir et fermer le menu
        menu.classList.toggle("menu--open");
    }
}

//ajouter: quand on clique sur un lien le menu se referme

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


