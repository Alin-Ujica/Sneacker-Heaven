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
            "delivery":"If you have problems with your delivery, please contact us at <a href='#' style='color:#8F57FB;'>contact@sneacker-heaven.ro</a>",
            "contact":"You can reach us through our live chat, email at <a href='#' style='color:#8F57FB;'>contact@sneacker-heaven.ro</a>, or call our toll-free number at 1-800-sneacker-heaven during business hours.",
            "discount":"We often run seasonal sales and promotions. You can sign up for our newsletter to stay updated on exclusive offers and discounts.",
            "payment":"We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Google Pay. You can select your preferred payment method during checkout",
            "cancel":"You can cancel or modify your order within 1 hour of placing it. Please contact customer service immediately to assist you. After that, the order may already be processed for shipping.",
            "modify":"You can cancel or modify your order within 1 hour of placing it. Please contact customer service immediately to assist you. After that, the order may already be processed for shipping.",
            "size":"Simply select the shoe you're interested in and use the size dropdown on the product page. If your size is available, you can add it to the cart. If not, it will be marked as out of stock.",
            "free shipping":"Yes, we offer free standard shipping on all orders over $50. Expedited shipping options are also available at checkout for an additional cost.",
            "return":"You can return or exchange unworn shoes within 30 days of purchase. Please make sure the shoes are in their original packaging and condition. For more details, visit our Return & Exchange page.",
            "thank you":"I'll be here any time you need me!Have a nice day!",
            "thanks":"I'll be here any time you need me!Have a nice day!",
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

//Cart
let nav_cart_counter = document.getElementById('cart-counter');
let nav_total_price = document.getElementById('nav-cart-total-price');
let nav_cart  = document.getElementById('nav-cart');
let nav_cart_icon = document.getElementById('nav-cart-icon');

class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.qnt = 1;
        this.nav_cart_items = document.getElementById('nav-cart-items');
    }

    createProduct() {
        let new_name = document.createElement('h4');
        let new_price = document.createElement('h5');
        let new_qnt = document.createElement('p');
        let new_qnt_span = document.createElement('span');
        let new_img = document.createElement('img');
        let new_cart_item = document.createElement('div');

        new_name.className = 'nav-cart-item-name';
        new_price.className = 'nav-cart-item-price';
        new_img.className = 'nav-cart-item-img';
        new_qnt_span.className = 'nav-cart-item-qnt';
        new_cart_item.className = 'nav-cart-item';

        new_name.innerHTML = this.name;
        new_price.innerHTML = this.price + ' RON';
        new_qnt.innerHTML = 'X ';
        new_qnt_span.innerHTML = this.qnt;
        new_img.src = this.img;

        this.nav_cart_items.appendChild(new_cart_item);
        new_cart_item.appendChild(new_img);
        new_cart_item.appendChild(new_name);
        new_cart_item.appendChild(new_price);
        new_cart_item.appendChild(new_qnt);
        new_qnt.appendChild(new_qnt_span);
    }

    updateQuantity() {
        this.qnt += 1;

        let cartItems = this.nav_cart_items.getElementsByClassName('nav-cart-item');
        for (let item of cartItems) {
            let itemName = item.getElementsByClassName('nav-cart-item-name')[0];
            if (itemName.innerHTML === this.name) {
                let itemQntSpan = item.getElementsByClassName('nav-cart-item-qnt')[0];
                itemQntSpan.innerHTML = this.qnt;
            }
        }
    }

    calculateTotalPrice() {
        return this.price * this.qnt;
    }

}

class ShoppingCart {
    
    constructor(){
        this.product_array = [];
    }

    calculateTotalCartPrice() {
        let total = 0;
        for (let product of this.product_array) {
            total += product.calculateTotalPrice();
        }
        return total;
    }

    addToCart(name, price, img) {
        let existingProduct = this.product_array.find(product => product.name === name);
    
        if (existingProduct) {
            existingProduct.updateQuantity();
            nav_cart_counter.innerHTML++;
        } else {
            let new_product = new Product(name, price, img);
            new_product.createProduct();
            this.product_array.push(new_product);
            nav_cart_counter.innerHTML++;
        }

        this.saveCart();

        let totalCartPrice = this.calculateTotalCartPrice();
        nav_total_price.innerHTML = totalCartPrice;
    }

    saveCart(){
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart.product_array));
    }

}
let product_cart_icon = document.querySelectorAll('.product-cart-icon');


product_cart_icon.forEach((icon) => {
    icon.addEventListener('click' ,() => {
        let item_price = icon.nextElementSibling.firstElementChild.innerHTML;
        let item_name = icon.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        let item_image =icon.previousElementSibling.firstElementChild.src;
        shoppingCart.addToCart(item_name , item_price, item_image);

    });
});

let shoppingCart = new ShoppingCart(); 

nav_cart_icon.addEventListener('mouseenter' ,() => {
    nav_cart.style.display = 'block'
});

nav_cart.addEventListener('mouseleave' ,() => {
    nav_cart.style.display = 'none'
});

window.addEventListener('beforeunload', () => {
    shoppingCart.product_array = [];
});

