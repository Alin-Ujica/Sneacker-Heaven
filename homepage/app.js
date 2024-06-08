var mobile_nav_bar = document.getElementById('mobile-nav');
var hamburger_menu = document.getElementsByClassName('hamburger-btn')[0];
var mobile_search_bar = document.getElementById('mobile-search-bar');
var mobile_exit_button = document.getElementById('nav-exit-button');
var search_bar_icon = document.getElementById('search-bar-icon');
var mobile_nav_categories_1 = document.getElementsByClassName('mobile-nav-categories')[0];
var mobile_nav_categories_2 = document.getElementsByClassName('mobile-nav-categories')[1];
var mobile_nav_categories_3 = document.getElementsByClassName('mobile-nav-categories')[2];
var link_1 = document.getElementsByClassName('nav-button')[0];
var link_2 = document.getElementsByClassName('nav-button')[1];
var link_3 = document.getElementsByClassName('nav-button')[2];

var is_clicked = false;
var is_searching = false;
mobile_search_bar.style.display = "none";



function show_nav() {
    if(is_clicked == false && is_searching == false){
        mobile_nav_bar.style.display = 'flex';
        hamburger_menu.src = '../images/nav-exit-button.png';
        is_clicked = true;
    }
    
    else {
        is_clicked = false;
        hamburger_menu.src = '../images/hamburger-menu.png';
        mobile_nav_bar.style.display = 'none';
    }
    
}



function show_search_bar (state="none"){
    if(is_searching == false && is_clicked == false) {
       mobile_search_bar.style.display = state;
       is_searching=true;
    }
}

 function show_categories (categories_count) {
     if(categories_count == 0){
        mobile_nav_categories_1.style.display = 'flex';
        mobile_nav_categories_2.style.display = 'none';
        mobile_nav_categories_3.style.display = 'none';
     }

     else if(categories_count == 1) {
        mobile_nav_categories_1.style.display = 'none';
        mobile_nav_categories_2.style.display = 'flex';
        mobile_nav_categories_3.style.display = 'none';
     }

     else if(categories_count == 2) {
        mobile_nav_categories_1.style.display = 'none';
        mobile_nav_categories_2.style.display = 'none';
        mobile_nav_categories_3.style.display = 'flex';
     }
 }


hamburger_menu.addEventListener('click', show_nav);



search_bar_icon.addEventListener('click',()=>{
    show_search_bar('flex');
    is_searching = true;
});
mobile_exit_button.addEventListener('click',()=>{
    show_search_bar('none');
    is_searching= false;
});

link_1.addEventListener('click',()=> {
  show_categories(0);
});

link_2.addEventListener('click',()=> {
    show_categories(1);
  });

link_3.addEventListener('click',()=> {
    show_categories(2);
  });