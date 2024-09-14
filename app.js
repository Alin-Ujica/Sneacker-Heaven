

let mobile_nav_bar = document.getElementById('mobile-nav');
let hamburger_menu = document.getElementsByClassName('hamburger-btn')[0];
let mobile_search_bar = document.getElementById('mobile-search-bar');
let search_exit_button = document.getElementById('search-exit-button');
let search_bar_icon = document.getElementById('search-bar-icon');
let mobile_nav_categories_1 = document.getElementsByClassName('mobile-nav-categories')[0];
let mobile_nav_categories_2 = document.getElementsByClassName('mobile-nav-categories')[1];
let mobile_nav_categories_3 = document.getElementsByClassName('mobile-nav-categories')[2];
let link_1 = document.getElementsByClassName('nav-button')[0];
let link_2 = document.getElementsByClassName('nav-button')[1];
let link_3 = document.getElementsByClassName('nav-button')[2];
let desktop_nav_bar = document.getElementById('desktop-nav');
let desktop_nav_hover = document.getElementsByClassName('desktop-nav-hovers');
let nav_bg_effect = document.getElementById('nav-bg-effect');

let is_clicked = false;
let is_searching = false;


//DESKTOP NAV
for (let i = 0; i < desktop_nav_hover.length; i++) {
    desktop_nav_hover[i].addEventListener('mouseenter', () => {
        desktop_nav_bar.style.display = 'flex'
        nav_bg_effect.style.display = 'block';
    });
}

desktop_nav_bar.addEventListener('mouseleave', () => {
    desktop_nav_bar.style = 'display:none;';
    nav_bg_effect.style.display = 'none';
});

//MOBILE NAV
hamburger_menu.addEventListener('click', () => {
    if (is_clicked === false) {
        mobile_nav_bar.style.display = 'flex';
        nav_bg_effect.style.display = 'block';
        mobile_search_bar.style.display = 'none';
        hamburger_menu.src = '../images/nav-exit-button.png';
        is_clicked = true
    } else {
        is_clicked = false;
        hamburger_menu.src = '../images/hamburger-menu.png';
        mobile_nav_bar.style.display = 'none';
        nav_bg_effect.style.display = 'none';
    }

});

function show_categories(categories_count) {
    if (categories_count == 0) {
        mobile_nav_categories_1.style.display = 'flex';
        mobile_nav_categories_2.style.display = 'none';
        mobile_nav_categories_3.style.display = 'none';
    }

    else if (categories_count == 1) {
        mobile_nav_categories_1.style.display = 'none';
        mobile_nav_categories_2.style.display = 'flex';
        mobile_nav_categories_3.style.display = 'none';
    }

    else if (categories_count == 2) {
        mobile_nav_categories_1.style.display = 'none';
        mobile_nav_categories_2.style.display = 'none';
        mobile_nav_categories_3.style.display = 'flex';
    }
}

link_1.addEventListener('click', () => {
    show_categories(0);
});

link_2.addEventListener('click', () => {
    show_categories(1);
});

link_3.addEventListener('click', () => {
    show_categories(2);
});

//SEARCH BAR
search_bar_icon.addEventListener('click', () => {
    mobile_search_bar.style.display = 'flex';
    nav_bg_effect.style.display = 'block';
    mobile_nav_bar.style.display = 'none';
    hamburger_menu.src = '../images/hamburger-menu.png';
    is_searching = true;
});

search_exit_button.addEventListener('click', () => {
    mobile_search_bar.style.display = 'none';
    nav_bg_effect.style.display = 'none';
    
    is_searching = false;
});






