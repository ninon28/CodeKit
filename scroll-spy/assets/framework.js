"use strict";

const spyOptions = {
   root: null,
   rootMargin: "0px",
   threshold: 0.8
};

const observer = new IntersectionObserver(scrollSpy, spyOptions);
function scrollSpy(entries, _observer){
    for(let entry of entries){      
        if(entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");

            const active = document.querySelector(".menu__el--active");
            if(active){
                active.classList.remove("menu__el--active");
            }

            const navActive = document.querySelector('a[href="#'+ sectionId +'"]'); //simple gillemet car pour le selecteur css on doit mettre des doubles
            navActive.parentElement.classList.add("menu__el--active");
        }
    }
}

const sections = document.querySelectorAll(".section");
for(let section of sections){
   observer.observe(section);
}

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


