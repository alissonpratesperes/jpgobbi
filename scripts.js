/* Declaration of Variables */
const hamburger = document.querySelector('section#header div.header div.nav_bar div.nav_list div.hamburger');

const mobile_menu = document.querySelector('section#header div.header div.nav_bar div.nav_list ul.nav_options');

const menu_item = document.querySelectorAll('section#header div.header div.nav_bar div.nav_list ul.nav_options a');

const header = document.querySelector('section#header div.header.container');
/* End Declaration of Variables */

/* CLICK WATCHER - Mobile Menu & Background Body Scrolling Block */
hamburger.addEventListener('click', () => {
    
    hamburger.classList.toggle('active');
    
    mobile_menu.classList.toggle('active'); 

        function checkScroll() {
            
            if (hamburger.classList.contains('active')) {
                
                document.getElementsByTagName('html')[0].classList.add('dontScroll');
            
            } else { document.getElementsByTagName('html')[0].classList.remove('dontScroll');
        
            } 
    
        }
        
            checkScroll();
    
});
/* End CLICK WATCHER - Mobile Menu & Background Body Scrolling Block */

/* CLICK WATCHER - Making  Menu Links 'active' through clicking or touching */
menu_item.forEach(item => {
    
    item.addEventListener('click', () => {
        
        hamburger.classList.toggle('active');
        
        document.getElementsByTagName('html')[0].classList.remove('dontScroll');
        
        mobile_menu.classList.toggle('active');
    
    });

});
/* End CLICK WATCHER - Making  Menu Links 'active' through clicking or touching */

/* SCROLL WATCHER - Activating Menu Links when scrolling the page */
document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('.content_section');
    
    const menu_links = document.querySelectorAll('.nav_link a');
    
    const makeActive = (link) => menu_links[link].classList.add('active');
    
    const removeActive = (link) => menu_links[link].classList.remove('active');
    
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    
    const sectionMargin = 200;
    
    let currentActive = 0;
    
        window.addEventListener('scroll', () => {
            
            const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;
            
                if(current !== currentActive) {
                    
                    removeAllActive();
                    
                    currentActive = current;
                    
                    makeActive(current);
                
                }
        
            });
        
}, false);
/* End SCROLL WATCHER - Activating Menu Links when scrolling the page */

/* SCROLL WATCHER - Smooth Scrolling for 'crossbrowsing' effective script */
function smoothScroll(target, duration) {
    
    var target = document.querySelector(target);
    
    var targetPosition = target.getBoundingClientRect().top;
    
    var startPosition = window.pageYOffset;
    
    var startTime = null;
    
    function animation(currentTime) {
        
        if(startTime === null) {
            
            startTime = currentTime
        
        };
        
        var timeElapsed = currentTime - startTime;
        
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        
            window.scrollTo(0, run);
            
                if(timeElapsed < duration) {
                    
                    requestAnimationFrame(animation);
                
                };
            
    }
    
    function ease(t, b, c, d) { 
        
        t /= d / 2; if (t < 1) return c / 2 * t * t + b; t--; return -c / 2 * (t * (t - 2) - 1) + b; 
    
    } 
    
    requestAnimationFrame(animation);

} 

var home_link = document.querySelector('section#header div.header div.nav_bar div.brand a#brand_hero_link');

var call_to_action_link = document.querySelector('section#hero div.hero div a.call_to_action');

var scroll_button = document.querySelector('section#hero div.hero div.middle div.mouse');

var emblem_link = document.querySelector('section#footer div.footer a#emblem_link');

var hero_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#hero_link');

var services_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#services_link');

var projects_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#projects_link');

var contact_link = document.querySelector('section#header div.header div.nav_bar div.nav_list ul li.nav_link a#contact_link');

    home_link.addEventListener('click', function() {
        
        smoothScroll('section#hero', 700);
    
    });
    
    call_to_action_link.addEventListener('click', function() {
        
        smoothScroll('section#contact', 700);
    
    });
    
    scroll_button.addEventListener('click', function() {
        
        smoothScroll('section#services', 700);
    
    });
    
    emblem_link.addEventListener('click', function() {
        
        smoothScroll('section#hero', 700);
    
    });
    
    hero_link.addEventListener('click', function() {
        
        smoothScroll('section#hero', 700);
    
    });
    
    services_link.addEventListener('click', function() {
        
        smoothScroll('section#services', 700);
    
    });
    
    projects_link.addEventListener('click', function() {
        
        smoothScroll('section#projects', 700);
    
    });
    
    contact_link.addEventListener('click', function() {
        
        smoothScroll('section#contact', 700);
    
    });
/* End SCROLL WATCHER - Smooth Scrolling for 'crossbrowsing' effective script */

/* SCROLL WATCHER - Autohide Navigation Bar when scrolling */
var new_scroll_position = 0;

var last_scroll_position;

var smartNavBarCall = document.querySelector('section#header');

window.addEventListener('scroll', function(e) {
    
    last_scroll_position = window.scrollY;
    
        if(new_scroll_position < last_scroll_position && last_scroll_position > 80) {
            
            smartNavBarCall.style.top = '-100px';
        
        } else if ( new_scroll_position > last_scroll_position ) {
            
            smartNavBarCall.style.top = '0px';
        
        }
        
            new_scroll_position = last_scroll_position;
    
});
/* End SCROLL WATCHER - Autohide Navigation Bar when scrolling */

/* SCROLL WATCHER - Progress Navigation Bar when scrolling */
window.addEventListener('scroll', () => {
    const progBar = document.querySelector('section#header div.header div.progress_bar');
        var CurrPosition = document.documentElement.scrollTop;
        var calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var userScroll = CurrPosition * 100 / calcHeight;
            progBar.style.width = userScroll + '%';
});
/* End SCROLL WATCHER - Progress Navigation Bar when scrolling */