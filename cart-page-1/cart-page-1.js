let product_data = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(product_data);
let cart_section = document.querySelector('.cart-section');
let cart_items = document.getElementById('cart-items');
let cart_item_name = document.querySelectorAll('.cart-item-name');
let cart_item_price = document.querySelectorAll('.cart-item-price');
let cart_item_img = document.querySelectorAll('.cart-item-img');
let quantity = document.querySelectorAll('.quantity');
let increaseBtn = document.querySelectorAll('.increase-btn');
let decreaseBtn = document.querySelectorAll('.decrease-btn')

if (product_data === null || product_data.length === 0) {
    let cart_details = document.getElementsByClassName('cart-details')[0];
    let cart_page_change = document.getElementsByClassName('cart-page-change')[0];
    let cart_title = document.getElementById('cart-title');
    let empty_cart_img = document.createElement('img');
    empty_cart_img.src = '../images/empty-card.png'
    empty_cart_img.className = 'empty-cart-img';

    cart_details.style.display = 'none';
    cart_page_change.style.display = 'none';
    cart_items.appendChild(empty_cart_img);
    cart_title.innerHTML = 'Coșul tău este gol!'
}

class ShoppingCart1 {

    saveCartData() {
        localStorage.setItem('shoppingCart', JSON.stringify(product_data));
    }

    addToCart() {
        product_data.forEach((product, index) => {
            let cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            let productImg = document.createElement('img');
            productImg.src = product.img;
            productImg.className = 'cart-item-img';
            cartItem.appendChild(productImg);

            let descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'cart-item-description';

            let itemName = document.createElement('h4');
            itemName.className = 'cart-item-name';
            itemName.textContent = product.name;
            descriptionDiv.appendChild(itemName);

            let color = document.createElement('p');
            color.textContent = 'Culoare: alb';
            descriptionDiv.appendChild(color);

            let size = document.createElement('p');
            size.textContent = 'Mărime: 40';
            descriptionDiv.appendChild(size);

            cartItem.appendChild(descriptionDiv);


            let ammountDiv = document.createElement('div');
            ammountDiv.className = 'cart-item-ammount';

            let quantityHeading = document.createElement('h5');
            quantityHeading.textContent = 'Cantitate';
            ammountDiv.appendChild(quantityHeading);

            let quantityChangerDiv = document.createElement('div');
            quantityChangerDiv.className = 'quantity-changer';

            let increaseButton = document.createElement('p');
            increaseButton.textContent = '+';
            increaseButton.className = 'increase-btn';
            quantityChangerDiv.appendChild(increaseButton);

            let productQuantity = document.createElement('h6');
            productQuantity.className = 'quantity';
            productQuantity.textContent = product.qnt;
            quantityChangerDiv.appendChild(productQuantity);

            let decreaseButton = document.createElement('p');
            decreaseButton.textContent = '-';
            decreaseButton.className = 'decrease-btn';
            quantityChangerDiv.appendChild(decreaseButton);

            ammountDiv.appendChild(quantityChangerDiv);
            cartItem.appendChild(ammountDiv);

            let priceDiv = document.createElement('div');
            priceDiv.className = 'cart-item-price';

            let priceHeading = document.createElement('h5');
            priceHeading.textContent = 'Preț';
            priceDiv.appendChild(priceHeading);

            let productPrice = document.createElement('h3');
            productPrice.className = 'cart-item-price';
            productPrice.textContent = `${product.price} RON`;
            priceDiv.appendChild(productPrice);

            let deleteBtn = document.createElement('img');
            deleteBtn.className = 'remove-item-icon';
            deleteBtn.src = '../images/remove-item-icon.png';
            cartItem.appendChild(deleteBtn);

            cartItem.appendChild(priceDiv);

            cart_items.appendChild(cartItem);

            increaseButton.addEventListener('click', () => this.changeQuantity(index, 1));
            decreaseButton.addEventListener('click', () => this.changeQuantity(index, -1));
        });
    }



    calculateTotal() {
        let total_price = document.getElementById('total-price');
        let total = 0;
        product_data.forEach(product => {
            total += parseFloat(product.qnt * product.price);
        });

        total_price.innerHTML = `Subtotal: ${total.toFixed(2)} RON`;

    }

    checkEmptyCart() {
        let cart_details = document.getElementsByClassName('cart-details')[0];
        let cart_page_change = document.getElementsByClassName('cart-page-change')[0];
        let cart_title = document.getElementById('cart-title');
        let empty_cart_img = document.createElement('img');
        empty_cart_img.src = '../images/empty-card.png'
        empty_cart_img.className = 'empty-cart-img';

        if (product_data.length === 0) {
            cart_details.style.display = 'none';
            cart_page_change.style.display = 'none';
            cart_items.appendChild(empty_cart_img);
            cart_title.innerHTML = 'Coșul tău este gol!'
        }
    }

    changeQuantity(index, amount) {
        if (product_data[index].qnt + amount >= 1) {
            product_data[index].qnt += amount;
            document.querySelectorAll('.quantity')[index].textContent = product_data[index].qnt;

            this.calculateTotal();
            this.saveCartData();
        }
    }
};

let shoppingCart1 = new ShoppingCart1();

shoppingCart1.addToCart();
shoppingCart1.calculateTotal();

let delete_buttons = document.querySelectorAll('.remove-item-icon');

delete_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let cart_item = btn.closest('.cart-item');

        let removedProductName = btn.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;

        if (cart_item) {
            cart_item.remove();
        }

        product_data = product_data.filter(product => product.name !== removedProductName);
        console.log(product_data);

        shoppingCart1.checkEmptyCart();
        shoppingCart1.saveCartData();
        shoppingCart1.calculateTotal();
    });
});


