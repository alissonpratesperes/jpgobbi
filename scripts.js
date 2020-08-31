const hamburger = document.querySelector('section#header div.header div.nav_bar div.nav_list div.hamburger');

const mobile_menu = document.querySelector('section#header div.header div.nav_bar div.nav_list ul');

const menu_item = document.querySelectorAll('section#header div.header div.nav_bar div.nav_list ul a');

const header = document.querySelector('section#header div.container');

    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active'); });

        document.addEventListener('scroll', () => { var scroll_position = window.scrollY; if(scroll_position > 50) { header.style.backgroundColor = '#29323C'; } else { header.style.backgroundColor = 'rgba(31, 30, 30, 0.24)'; } });

            menu_item.forEach(item => { item.addEventListener('click', () => { hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active'); }); });