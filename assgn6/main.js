//if there are items in cart, then display it//
function loadCartInHeader(){
  if (localStorage.getItem("currentItems") > 0) {
    document.getElementById("cart-item-number-display").style.display = "inline-block";
    document.getElementById("cart-item-number").innerHTML = localStorage.getItem("currentItems");
  }
};

function loadCartItemNumberAndSubtotal() {
  document.getElementById("cartTitleItemNumber").innerHTML = localStorage.getItem("currentItems");
  document.getElementById("cart-subtotal").style.display = "inline-block";
}

//loads the information on Product Details page//
function loadProductDetails(){
  //loads the stored title of the item//
  document.getElementById("rollName").innerHTML = localStorage.getItem("rollName");

  //loads the stored price of the item//
  document.getElementById("rollPrice").innerHTML = localStorage.getItem("rollPrice");

  //loads the stored product-details image of the item//
  document.getElementById("rollImage").src = localStorage.getItem("rollImage");
}

//populates the name, price and image of the item that was clicked on//
function getTitlePriceImageFromClick(e) {
  //sets variables for the title, price and image of item//
  var name = e.target.dataset.name;
  var price = e.target.dataset.price;
  var rollImage = e.target.dataset.image;
  //sets variable for image of roll to be used in shopping cart//
  var cartRollImage = e.target.src;

  //sets the title, price and image of the target object into the products-details page//
  localStorage.setItem("rollName", name);
  localStorage.setItem("rollPrice", price);
  localStorage.setItem("rollImage", "images/" + rollImage);
  //stores image of roll to be used in shopping cart//
  localStorage.setItem("cartRollImage", cartRollImage);
}

//check if there are any items in cart, if not, then set currentItems to 0//
if (localStorage.getItem("currentItems") == null) {
  localStorage.setItem("currentItems", 0);
}

//updates cart item number and display status upon click of add to cart button//
function addToCart() {
  //updates cart item number//
  var itemNumber = localStorage.getItem("currentItems"); //sets a variable to the currentItems//
  itemNumber++; //adds 1 to the variable//
  localStorage.setItem("currentItems", itemNumber); //sets the new number to currentItems//
  document.getElementById("cart-item-number").innerHTML = localStorage.getItem("currentItems"); //updates the innerHTMl of the cart number//
  document.getElementById("cart-item-number-display").style.display = "inline-block";//displays the cart number in header//

  //stores number of rolls and glaze//
  var rollNumber = document.getElementById("select-number-of-rolls").value;
  var rollGlaze = document.getElementById("select-glaze").value;
  localStorage.setItem("rollNumber", rollNumber);
  localStorage.setItem("rollGlaze", rollGlaze);
}

//constructor for product (cart item)//
function Product(rollName, rollGlaze, rollPrice, cartRollImage, rollNumber) {
  this.rollName = rollName;
  this.rollGlaze = rollGlaze;
  this.rollPrice = rollPrice;
  this.cartRollImage = cartRollImage;
  this.rollNumber = rollNumber;
}

//creates an array and adds all items to that array, stores it locally//
function createProductsArray() {
  let products = [];
  var rollName = localStorage.getItem("rollName");
  var rollGlaze = localStorage.getItem("rollGlaze");
  var rollPrice = localStorage.getItem("rollPrice");
  var cartRollImage = localStorage.getItem("cartRollImage");
  var rollNumber = localStorage.getItem("rollNumber");
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }
  products.push(new Product(rollName, rollGlaze, rollPrice, cartRollImage, rollNumber));
  localStorage.setItem("products", JSON.stringify(products));
}

//retrieves array from local storage//
var products = JSON.parse(localStorage.getItem("products"));
var productsLength = products.length;

//converts the subtotal to an integer//
var subtotal = document.getElementById("subtotal-number").innerHTML;
var intSubtotal = parseInt(subtotal);

function loadCartItems() {
  //for loop to access each item in array//
  for (var i = 0; i < productsLength; i++) {

    //creates copy of cart item//
    var newItem = document.createElement("div");
    newItem.id = "cart-item" + i;
    newItem.className = "dz-cart-item";
    var template = document.getElementById("cart-item");
    newItem.innerHTML = template.innerHTML;

    //populates data for each cart item//
    newItem.getElementsByClassName("dz-item-flavor")[0].innerHTML = products[i].rollName;
    newItem.getElementsByClassName("dz-item-glaze")[0].innerHTML = products[i].rollGlaze;
    newItem.getElementsByClassName("dz-item-price")[0].innerHTML = products[i].rollPrice;
    newItem.getElementsByClassName("dz-drop-down")[0].value = products[i].rollNumber;
    newItem.getElementsByClassName("dz-item-image")[0].src = products[i].cartRollImage;

    //updates the subtotal of each item//
    var intRollNumber = parseInt(products[i].rollNumber);
    var intRollPrice = parseInt(products[i].rollPrice);
    var itemSubtotal = intRollNumber * intRollPrice;
    newItem.getElementsByClassName("dz-item-subtotal-number")[0].innerHTML = itemSubtotal;

    //updates the subtotal//
    intSubtotal = intSubtotal + itemSubtotal;
    document.getElementById("subtotal-number").innerHTML = intSubtotal;

    //appends new cart item to body//
    document.getElementsByTagName("body")[0].appendChild(newItem);
    }
  }

//To remove items//
//delete target child upon clicking of the X - similar to midterm question//
