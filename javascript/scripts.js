const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
    
    nav = document.getElementById(navId)

        if (toggle && nav) {

            toggle.addEventListener("click", () => {

                nav.classList.toggle("show")

            })

        }

}

showMenu("nav-toggle", "nav-menu")

    const navLink = document.querySelectorAll(".nav_link");

    function linkAction() {

        navLink.forEach(n => n.classList.remove("active"))

        this.classList.add("active")

        const navMenu = document.getElementById("nav-menu")

        navMenu.classList.remove("show")

    }

    navLink.forEach(n => n.addEventListener("click", linkAction))


const slider = document.querySelector('div.slider');

const leftArrow = document.querySelector('span.left');

const rightArrow = document.querySelector('span.right');

var sectionIndex = 0;

var indicatorParents = document.querySelector('ul#section_indicators');


    function setIndex() {

        document.querySelector('div.controls ul#section_indicators .selected').classList.remove('selected');

        slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';

    }

    document.querySelectorAll('div.controls ul#section_indicators li').forEach(function(indicator, index){

        indicator.addEventListener('click', function() {

            sectionIndex = index;

            setIndex();

            indicator.classList.add('selected');

        });

    });

    leftArrow.addEventListener('click', function() {

        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;

        setIndex();

        indicatorParents.children[sectionIndex].classList.add('selected'); 

    });

    rightArrow.addEventListener('click', function() {

        sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;

        setIndex();

        indicatorParents.children[sectionIndex].classList.add('selected');

    });


document.addEventListener("DOMContentLoaded", function(){

    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".nav_item a");

    const makeActive = (link) => menuLinks[link].classList.add("active");
    const removeActive = (link) => menuLinks[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 100;

    let currentActive = 0;

        window.addEventListener("scroll", () => {

            const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

            if (current !== currentActive) {
                removeAllActive();
                currentActive = current;
                makeActive(current);
              }

        });

});



























