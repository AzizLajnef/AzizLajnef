// The cart array to store items
var cart = [];

// Function to add an item to the cart
function addToCart(name, species, age, price) {
    var animal = {
        name: name,
        species: species,
        age: age,
        price: price
    };
    cart.push(animal);
    updateCartDisplay();
}

// Function to update the display of the cart
function updateCartDisplay() {
    var cartItemsElement = $('#cart-items');
    var cartTotalElement = $('#cart-total');

    cartItemsElement.empty();

    cart.forEach(animal => {
        var listItem = $('<li id="shopCartItems">').text(`${animal.name} - $${animal.price.toFixed(2)}`);
        cartItemsElement.append(listItem);
    });
    /// li = list item
 ////forEach is a convenient method for iterating over arrays when you need to perform an operation on each element without creating a new array.
    var total = cart.reduce((acc, animal) => acc + animal.price, 0);
    cartTotalElement.text(total.toFixed(2));
/// An arrow function (=>) in JavaScript is a shorter way to write a function
///it replaces the tradional function ,brackets syntax with a shorter and simpler syntax
// it also gets rid of the function name and the return keyword
}

///append = add item in the end
/// .text is used to get or set the text content of an HTML element in the Document Object 
/// 124.2598 .toFixed(2) -> 124.25
// # for id 
// . for class
// $ for selector 
// $('iframe') iframe is a tag 