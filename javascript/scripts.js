const menu_btn = document.querySelector('div.menu_button');

const side_nav = document.querySelector('nav#sideNav');

const section_header = document.querySelector('section#header')

let menuOpen = false;

    const slider = document.querySelector('div.slider');

    const leftArrow = document.querySelector('span.left');

    const rightArrow = document.querySelector('span.right');

    var indicatorParents = document.querySelector('ul#section_indicators');

    var sectionIndex = 0;

menu_btn.addEventListener('click', () => {

  if (!menuOpen) {

    menu_btn.classList.add('open');

    menuOpen = true;

    sideNav.style.right = "0px"

  } else {

    menu_btn.classList.remove('open');

    menuOpen = false;

    sideNav.style.right = "-300px"

 	}

});

section_header.addEventListener('click', () => {

	if (menuOpen == true) {

		menu_btn.classList.remove('open');

    	menuOpen = false;

    	sideNav.style.right = "-300px"

	}

});

function setIndex() {

    document.querySelector('div.controls ul#section_indicators .selected').classList.remove('selected');

    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';

}

document.querySelectorAll('div.controls ul#section_indicators li').forEach(function(indicator, index){

    indicator.addEventListener('click', function(){

        sectionIndex = index;

        setIndex();

        indicator.classList.add('selected');

    });

});

leftArrow.addEventListener('click', function(){

    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;

    setIndex();

    indicatorParents.children[sectionIndex].classList.add('selected'); 

});

rightArrow.addEventListener('click', function() {

    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;

    setIndex();

    indicatorParents.children[sectionIndex].classList.add('selected');

});















