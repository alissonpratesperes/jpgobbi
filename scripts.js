const hamburger = document.querySelector('section#header div.header div.nav_bar div.nav_list div.hamburger');
const mobile_menu = document.querySelector('section#header div.header div.nav_bar div.nav_list ul');
const menu_item = document.querySelectorAll('section#header div.header div.nav_bar div.nav_list ul a');
const header = document.querySelector('section#header div.container');
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active'); });
    document.addEventListener('scroll', () => { var scroll_position = window.scrollY; if(scroll_position > 50) { header.style.boxShadow = '0px 15px 25px rgba(0, 0, 0, 0.2)'; } else { header.style.boxShadow = 'none'; } });    
    menu_item.forEach(item => { item.addEventListener('click', () => { hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active'); }); });
        document.addEventListener('DOMContentLoaded', function(){
            const sections = document.querySelectorAll('.content_section'); const menu_links = document.querySelectorAll('.nav_link a');
            const makeActive = (link) => menu_links[link].classList.add('active'); const removeActive = (link) => menu_links[link].classList.remove('active'); const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
            const sectionMargin = 200; let currentActive = 0;
                window.addEventListener('scroll', () => { const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
                    if(current !== currentActive) { removeAllActive(); currentActive = current; makeActive(current); } }); }, false);