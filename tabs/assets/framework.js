"use strict";

//const pour selectionner les liens de la .tab__nav > nodeList
//boucle for sur la const
//ajouter un event listener sur les liens pour le click
//lancer une fonction
//declarer la fonction:
    //premiere chose à faire: la classe de la nav
    //selctionner tab__el--active
    //supprimer la classe tab__el--active
    //ajouter la classe tab__el--active sur celui qui est cliqué
    //currentTarget

    //deuxieme chose à faire: la classe du contenu
    //selectionner tab__content--active
    //supprimer la classe tab__content--active
    //ajouter la classe tab__content--active sur le bon div
    //recuperer le contenu de l'attribut href sur le currentTarget
    //selectionner le div qui a comme attribut la valeur de href
    //et ajouter la classe tab__content--active

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks){
    for(let tabLink of tabLinks){
        tabLink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();

    const parentTab = event.currentTarget.closest(".tab"); //isoler chaque tableau pour en faire plusieurs
    
    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    event.currentTarget.parentNode.classList.add("tab__el--active");

    const activeTab = parentTab.querySelector(".tab__content--active");
    activeTab.classList.remove("tab__content--active");

    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");

}


var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


