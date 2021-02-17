let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'predator-acer',
        tag:'predatoracer',
        price:'$1099.89',
        inCart:0
    },
    {
        name:'legion-laptop',
        tag:'legion-laptop',
        price:'$1390.99',
        inCart:0
    },
    {
        name:'Tuf-Gaming',
        tag:'legionlaptop',
        price:'$1289.99',
        inCart:0
    },
    {
        name:'pc-legion',
        tag:'pclegion',
        price:'$1489.99',
        inCart:0
    },
    {
        name:'laptop-legion-y520',
        tag:'laptoplegion-y520',
        price:'$1589.99',
        inCart:0
    },
    {
        name:'Souris-Gaming',
        tag:'SourisGaming',
        price:'$500.00',
        inCart:0
    },
    {
        name:'clavier-sharkoon',
        tag:'claviersharkoon',
        price:'$990.89',
        inCart:0
    },
    {
        name:'Microphone',
        tag:'Microphone',
        price:'$350.00',
        inCart:0
    },
    {
        name:'Ps5_controller',
        tag:'Ps5_controller',
        price:'$250.50',
        inCart:0
    }
];

for (let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.online span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.online span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.online span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] ==undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart +=1;
    } else {
        product.inCart = 1
        cartItems = {
            [product.name]: product
        }
    }
   
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
   
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
   

    if(cartCost != null){
        // cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function putCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.name}.jpg">
            <span>${item.name}</span>
            <div class="price">${item.price}</div>
            <div class="quantity">
            <span>${item.inCart}</span>
            </div>
            <div class="total">
            ${Number(item.inCart) * Number(item.price)}
            </div>
            `;
        });
        
        productContainer.innerHTML += `
        <div class="cartTotalContainer">
        <h4 class="cartTotalTitle">
        Cart Total
        </h4>
        <h4 class="cartTotal">
        ${cartCost}
        </h4>
        `;
    }
}

onLoadCartNumbers();
putCart();