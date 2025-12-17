"use strict";

const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");


if(menuToggle){
    menuToggle.addEventListener("click", menuOpen); //click sur le bouton

    for(let menuLink of menuLinks){ //click sur les liens
        menuLink.addEventListener("click", menuOpen);
    }
}

function menuOpen(){ //pour pas que la page continue à scroller
    menu.classList.toggle("menu--open");
    body.classList.toggle("no-scroll");
    console.log(body);
}

//ajouter: quand on clique sur un lien le menu se referme

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


