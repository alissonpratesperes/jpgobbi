const menu_btn = document.querySelector('div.menu_button');

const side_nav = document.querySelector('nav#sideNav');

const section_header = document.querySelector('section#header')

let menuOpen = false;

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
