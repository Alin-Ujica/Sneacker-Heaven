

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

let is_clicked = false;
let is_searching = false;


//DESKTOP NAV
for (let i = 0; i < desktop_nav_hover.length; i++) {
    desktop_nav_hover[i].addEventListener('mouseenter', () => {
        desktop_nav_bar.style.display = 'flex'
    });
}

desktop_nav_bar.addEventListener('mouseleave', () => {
    desktop_nav_bar.style = 'display:none;';
});

//MOBILE NAV
hamburger_menu.addEventListener('click', () => {
    if (is_clicked === false) {
        mobile_nav_bar.style.display = 'flex';
        mobile_search_bar.style.display = 'none';
        hamburger_menu.src = '../images/nav-exit-button.png';
        is_clicked = true
    } else {
        is_clicked = false;
        hamburger_menu.src = '../images/hamburger-menu.png';
        mobile_nav_bar.style.display = 'none';
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
    mobile_nav_bar.style.display = 'none';
    hamburger_menu.src = '../images/hamburger-menu.png';
    is_searching = true;
});

search_exit_button.addEventListener('click', () => {
    mobile_search_bar.style.display = 'none';
    is_searching = false;
});


//SLIDER
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let dots = document.querySelectorAll(".dot");

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }



    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}

function dotSlide(index) {
    showSlide(index);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 2000);

//CHATBOT OPEN
let chat_open_btn = document.getElementById('chat-bot-btn');
this.chat_bot_input = document.getElementById('chat-bot-input');
this.chat_bot_send_btn = document.getElementById('chat-bot-send-btn');
let chat_notification = document.getElementById('chat-notification');
let chat_bot = document.getElementById('chat-bot-container');
let isChatOpen = false;

chat_open_btn.addEventListener('click', () => {
    if (isChatOpen === false) {
        chat_bot.style.display = 'block';
        chat_notification.style.display = "none";
        chat_bot_input.focus();
        isChatOpen = true;
    } else {
        isChatOpen = false
        chat_bot.style.display = 'none';
    }

});

function showNotificationBtn() {
    chat_notification.style.display = "block";
}

setTimeout(showNotificationBtn, 1000);


class ChatBOT {
    constructor() {
        this.chat_bot_conversation = document.getElementById('chat-bot-conversation');
        this.chat_bot_ul = document.getElementById('chat-bot-ul');
        this.timer = ''; 
    }

    sendMessage() {
        this.displayMessages(chat_bot_input.value , 'user-message');
        this.botAnswers(chat_bot_input.value);   
        clearTimeout(this.timer);
    }
 
    predefinedResponses(){
        return {
            "hello":"Hi! How can I be of use today?",
            "hi":"Hi! How can I be of use today?",
            "price":"All the products have the corect prices atached to them.",
            "delivery":"If you have problems with your delivery, please contact us at <a href='#' style='color:#8F57FB;'>contact@sneacker-heaven.ro</a>",
            "thank you":"I'll be here any time you need me!Have a nice day!",
        }
    }

    botAnswers(msg){
        let answers = '';
        msg = msg.toLowerCase();
        answers = "Sorry, I dont understand your question &#128532;";
        const responses = this.predefinedResponses();
        for(let key in responses){
            if(msg.includes(key)){
                answers = responses[key];
                break;
            }
        }

        setTimeout(() => {
            this.displayMessages(answers , 'bot-message');
        }, 500);
        
    } 

    waitingText(){
        this.displayMessages('Typing...' , 'waiting');
        this.timer = setTimeout(() => {
            document.querySelector('.waiting').remove();
        }, 1250);
    

    }

    displayMessages(msg, type){
        let newMsg = document.createElement('li');
        newMsg.className = type;
        newMsg.innerHTML = msg ;
        this.chat_bot_ul.appendChild(newMsg);
        this.chat_bot_conversation.scrollTop = this.chat_bot_conversation.scrollHeight;
    }

}

let chatBOT = new ChatBOT();

chat_bot_input.addEventListener('input',  ()=> {
    if (!document.querySelector('.waiting')){
        chatBOT.waitingText();
    }
});


chat_bot_input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        chat_bot_send_btn.click();
    }
});

chat_bot_send_btn.addEventListener('click', () => {
    while (chat_bot_input.value !== "") {
        chatBOT.sendMessage();
        chat_bot_input.value = "";
        document.querySelector('.waiting').remove();
    }
});



