const hamburger = document.querySelector('section#header div.header div.nav_bar div.nav_list div.hamburger'); const mobile_menu = document.querySelector('section#header div.header div.nav_bar div.nav_list ul'); const menu_item = document.querySelectorAll('section#header div.header div.nav_bar div.nav_list ul a'); const header = document.querySelector('section#header div.container');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active'); 

function checkScroll() { 


    
    if (hamburger.classList.contains('active')) { 

        var InitScrollPosit = window.pageYOffset;
        
        document.getElementsByTagName('html')[0].classList.add('dontScroll');

        console.log("MENU IS OPEN!", InitScrollPosit);
    
    } else {
    
        var currScrollPosit = window.pageYOffset;

        console.log(currScrollPosit, "MENU IS CLOSED!");
        
        document.getElementsByTagName('html')[0].classList.remove('dontScroll');
        document.getElementsByTagName('html')[0].scrollTo = currScrollPosit;
    
    }

    currScrollPosit = InitScrollPosit;
    
    } checkScroll(); });

menu_item.forEach(item => { item.addEventListener('click', () => { hamburger.classList.toggle('active'); document.getElementsByTagName('html')[0].classList.remove('dontScroll'); mobile_menu.classList.toggle('active'); }); });
document.addEventListener('DOMContentLoaded', function(){ const sections = document.querySelectorAll('.content_section'); const menu_links = document.querySelectorAll('.nav_link a'); const makeActive = (link) => menu_links[link].classList.add('active'); const removeActive = (link) => menu_links[link].classList.remove('active'); const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link)); const sectionMargin = 200; let currentActive = 0; window.addEventListener('scroll', () => { const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1; if(current !== currentActive) { removeAllActive(); currentActive = current; makeActive(current); } }); }, false);
function smoothScroll(target, duration) { var target = document.querySelector(target); var targetPosition = target.getBoundingClientRect().top; var startPosition = window.pageYOffset; var startTime = null; function animation(currentTime) { if(startTime === null) startTime = currentTime; var timeElapsed = currentTime - startTime; var run = ease(timeElapsed, startPosition, targetPosition, duration); window.scrollTo(0, run); if(timeElapsed < duration) requestAnimationFrame(animation); } function ease(t, b, c, d) { t /= d / 2; if (t < 1) return c / 2 * t * t + b; t--; return -c / 2 * (t * (t - 2) - 1) + b; } requestAnimationFrame(animation); } 
var home_link = document.querySelector('section#header div.header div.nav_bar div.brand a#brand_hero_link'); var call_to_action_link = document.querySelector('section#hero div.hero div a.call_to_action'); var hero_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#hero_link'); var services_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#services_link'); var projects_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#projects_link'); var about_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#about_link'); var contact_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#contact_link');
home_link.addEventListener('click', function(){ smoothScroll('section#hero', 700); }); call_to_action_link.addEventListener('click', function(){ smoothScroll('section#contact', 700) }); hero_link.addEventListener('click', function(){ smoothScroll('section#hero', 700); }); services_link.addEventListener('click', function(){ smoothScroll('section#services', 700); }); projects_link.addEventListener('click', function(){ smoothScroll('section#projects', 700); }); about_link.addEventListener('click', function(){ smoothScroll('section#about', 700); }); contact_link.addEventListener('click', function(){ smoothScroll('section#contact', 700); });
var new_scroll_position = 0; var last_scroll_position; var smartNavBarCall = document.querySelector('section#header'); window.addEventListener('scroll', function(e){ last_scroll_position = window.scrollY; if(new_scroll_position < last_scroll_position && last_scroll_position > 80) { smartNavBarCall.style.top = '-90px'; } else if ( new_scroll_position > last_scroll_position ) { smartNavBarCall.style.top = '0px'; } new_scroll_position = last_scroll_position; });