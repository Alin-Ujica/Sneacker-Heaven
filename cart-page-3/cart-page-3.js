let product_data = JSON.parse(localStorage.getItem('shoppingCart'));
let client_data_storage = JSON.parse(localStorage.getItem('clientData'));
let payment_and_delivery_storage = JSON.parse(localStorage.getItem('paymentAndDelivery'));

console.log(client_data_storage);
console.log(payment_and_delivery_storage);

class ShoppingCart3 {

    addToCart() {
        product_data.forEach(product => {
            const cart_items = document.getElementsByClassName('cart-items')[0];
            const cart_item = document.createElement('div');
            cart_item.classList.add('cart-item');

            const cart_item_img = document.createElement('img');
            cart_item_img.src = product.img;
            cart_item_img.classList.add('cart-item-img');
            cart_item.appendChild(cart_item_img);

            const cart_item_description = document.createElement('div');
            cart_item_description.classList.add('cart-item-description');

            const product_name = document.createElement('h4');
            product_name.classList.add('cart-item-name');
            product_name.textContent = product.name;
            cart_item_description.appendChild(product_name);

            const product_color = document.createElement('p');
            product_color.textContent = 'Culoare: alb';
            cart_item_description.appendChild(product_color);

            const product_size = document.createElement('p');
            product_size.textContent = 'Mărime: 40';
            cart_item_description.appendChild(product_size);

            cart_item.appendChild(cart_item_description);

            const cart_item_ammount = document.createElement('div');
            cart_item_ammount.classList.add('cart-item-ammount');

            const quantity_heading = document.createElement('h5');
            quantity_heading.textContent = 'Cantitate';
            cart_item_ammount.appendChild(quantity_heading);

            const quantity_changer = document.createElement('h6');
            quantity_changer.classList.add('quantity-changer');
            quantity_changer.textContent = product.qnt;
            cart_item_ammount.appendChild(quantity_changer);

            cart_item.appendChild(cart_item_ammount);

            const cart_item_prices = document.createElement('div');
            cart_item_prices.classList.add('cart-item-prices');

            const price_heading = document.createElement('h5');
            price_heading.textContent = 'Preț';
            cart_item_prices.appendChild(price_heading);

            const price_value = document.createElement('h3');
            price_value.classList.add('cart-item-price');
            price_value.textContent = `${product.price} RON`;
            cart_item_prices.appendChild(price_value);

            cart_item.appendChild(cart_item_prices);

            cart_items.appendChild(cart_item);
        });
    }

    clientDetails() {
        let client_details = document.getElementById("client-details");

        client_details.innerHTML = `${client_data_storage.client_name} ${client_data_storage.client_givenName}
        - 0${client_data_storage.client_phone}<br> Adresa: ${client_data_storage.client_adress},
        ${client_data_storage.client_city}, ${client_data_storage.client_county}`;
    }

    deliveryAndPayment() {
        let delivery_method = document.getElementById("delivery-method");
        let payment_method = document.getElementById("payment-method");

        if (payment_and_delivery_storage[0] == 'adressDelivery') {
            delivery_method.innerHTML = "Livrare la adresă<span>+15 RON</span>";
        } else if (payment_and_delivery_storage[0] == 'easyboxDelivery') {
            delivery_method.innerHTML = "Livrare la easybox<span>+10 RON</span>";
        }

        if (payment_and_delivery_storage[1] == 'cashPayment') {
            payment_method.innerHTML = "Plata cash";
        } else if (payment_and_delivery_storage[1] == 'cardPayment') {
            payment_method.innerHTML = "Plata cu cardul";
        }
    }

    calculateTotal() {
        let total_price = document.getElementById('total-price');
        let total = 0;
        let delivery_method = document.getElementById("delivery-method");

        product_data.forEach(product => {
            total += parseFloat(product.qnt * product.price);
        });

        if (payment_and_delivery_storage[0] == 'adressDelivery') {
            if (total <= 800) {
                total += 15;
            }else{
                delivery_method.innerHTML = "Livrare la adresă<span>gratuit</span>";
            }
        } else if (payment_and_delivery_storage[0] == 'easyboxDelivery') {
            if (total <= 800) {
                total += 10;
            }else{
                delivery_method.innerHTML = "Livrare la easybox<span>gratuit</span>";
            }
        }

        total_price.innerHTML = `Total:<span>${total.toFixed(2)}</span> RON`;
    }

}


let shoppingCart3 = new ShoppingCart3();
shoppingCart3.addToCart();
shoppingCart3.deliveryAndPayment();
shoppingCart3.calculateTotal();
shoppingCart3.clientDetails();

let finished_order_btn = document.getElementById("finish-order-btn");

finished_order_btn.addEventListener('click', () => {
    localStorage.removeItem('shoppingCart');
    localStorage.removeItem('clientData');
    localStorage.removeItem('paymentAndDelivery');
});