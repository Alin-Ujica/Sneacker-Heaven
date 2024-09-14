let next_step_btn = document.getElementById('next-step-btn');
let client_data_storage = JSON.parse(localStorage.getItem('clientData'));
let payment_and_delivery_storage = JSON.parse(localStorage.getItem('paymentAndDelivery'));



next_step_btn.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let givenName = document.getElementById('givenName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let city = document.getElementById('city').value;
    let county = document.getElementById('judet').value;
    let adress = document.getElementById('adress').value;


    let client_data = {
        client_name: name,
        client_givenName: givenName,
        client_email: email,
        client_phone: parseInt(phone),
        client_city: city,
        client_county: county,
        client_adress: adress,
    };

    let payment_and_delivery = [];
    let adressDelivery = document.getElementById('adressDelivery');
    let easyboxDelivery = document.getElementById('easyboxDelivery');
    let cashPayment = document.getElementById('cashPayment');
    let cardPayment = document.getElementById('cardPayment');

    if(adressDelivery.checked){
        payment_and_delivery.push(adressDelivery.value);
    }else if(easyboxDelivery.checked){
        payment_and_delivery.push(easyboxDelivery.value);
    }
    
    if(cashPayment.checked){
        payment_and_delivery.push(cashPayment.value);
    }else if(cardPayment.checked){
        payment_and_delivery.push(cardPayment.value);
    }
    
    if(payment_and_delivery == [] || payment_and_delivery.length == 1 ) {
        alert('Va rugam selectati metoda de plata si de livrare.')
    }

    let all_values_filled = Object.values(client_data).every(value => value);

    if (all_values_filled) {
        next_step_btn.setAttribute('href', '../cart-page-3/index.html')
        } else {
        alert("Va rugăm să completați toate câmpurile!");
    }
 
    
    localStorage.setItem('clientData', JSON.stringify(client_data));
    localStorage.setItem('paymentAndDelivery', JSON.stringify(payment_and_delivery));

    console.log(client_data_storage);
    console.log(payment_and_delivery_storage);
});


