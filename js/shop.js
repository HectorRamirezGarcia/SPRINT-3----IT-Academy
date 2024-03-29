// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/*function buy(id) {
    products.forEach(product => {if( product.id == id){cartList.push(product)}});
    generateCart();
    applyPromotionsCart();
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}*/

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    let total_actual = 0;
    cart.forEach( product => {applyPromotionsCart(); total_actual+=product.subtotalWithDiscount; })
    console.log(total_actual);
    total = total_actual;
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
/*function generateCart() {
    cartList.forEach( products => {
        if (cart.find((product) => product.id == products.id)) { 
            let counts = 0;
            cartList.forEach((x) => { if(x.id == products.id){ counts ++; }});
            cart.find((product) => product.id == products.id).quantity = counts;
        } else {
            let object_product = { id : products.id, name : products.name, price : products.price, type : products.type, quantity : 1, subtotal : products.subtotal, subtotalWithDiscount : products.subtotalWithDiscount}
            cart.push(object_product);
        }
    });

    console.log(cart);
    
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}*/

// Exercise 5
function applyPromotionsCart() {
    cart.forEach( products => {
        products.subtotal = products.price * products.quantity;
        if(products.type == 'grocery' && products.quantity >= 10){
            products.subtotalWithDiscount = products.subtotal - products.price;
        } else if(products.id == 1 && products.quantity >= 3){
            products.subtotalWithDiscount = products.subtotal - 10;
        } else {
            products.subtotalWithDiscount = products.price * products.quantity;
        }
    })
}

// Exercise 6
function printCart() {
    
    let parent_element = document.getElementById("cart_list");        
    parent_element.replaceChildren();
    cart.forEach(products => 
        {
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            let td_price = document.createElement('td');
            let td_quantity = document.createElement('td');
            let td_totalwd = document.createElement('td');
            let td_button_el1 = document.createElement('td');
            let button_el1 = document.createElement('button');

            th.textContent = products.name;
            td_price.textContent = products.price;
            td_quantity.textContent = products.quantity;
            if(products.subtotalWithDiscount == 0 || products.subtotalWithDiscount == "" || products.subtotalWithDiscount == null){
                td_totalwd.textContent = products.quantity * products.price;
            } else {
                td_totalwd.textContent = products.subtotalWithDiscount;
            }

            button_el1.setAttribute("onclick", "removeFromCart("+products.id+")")
            button_el1.setAttribute("class", "btn sub-text");
            button_el1.textContent = " - ";
            td_button_el1.append(button_el1);

            th.setAttribute("class", "product");
            td_price.setAttribute("class", "product");
            td_quantity.setAttribute("class", "product");
            td_totalwd.setAttribute("class", "product");
            
            tr.append(th);
            tr.append(td_price);
            tr.append(td_quantity);
            tr.append(td_totalwd)
            tr.append(td_button_el1)
            parent_element.appendChild(tr);

            let total_price = document.getElementById("total_price");
            total_price.textContent = total;
        }
    )

    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    products.forEach(product => {
        if( product.id == id){
            if (cart.find((products) => product.id == products.id)) { 
                cart.find((products) => product.id == products.id).quantity++;
                applyPromotionsCart();
                calculateTotal();
            } else {
                let object_product = { id : product.id, name : product.name, price : product.price, type : product.type, quantity : 1, subtotal : product.subtotal, subtotalWithDiscount : product.subtotalWithDiscount}
                cart.push(object_product);
            }
    }});
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    let obj_product = cart.find((products) => id == products.id);
    obj_product.quantity--;
    if (obj_product.quantity == 0) { 
        const product_to_el = cart.find((products) => id = products.id); 
        cart.splice(product_to_el, 1);
    }
    applyPromotionsCart();
    calculateTotal();
    printCart();
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
    applyPromotionsCart();
    calculateTotal();
	printCart();
}