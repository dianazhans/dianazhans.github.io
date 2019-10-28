//if there are items in cart, then display it//
function loadCartInHeader(){
  if (localStorage.getItem("currentItems") > 0) {
    document.getElementById("cart-item-number-display").style.display = "inline-block";
    document.getElementById("cart-item-number").innerHTML = localStorage.getItem("currentItems");
  }
};

function loadCartTitleItemNumber() {
  document.getElementById("cartTitleItemNumber").innerHTML = localStorage.getItem("currentItems");
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

//ASSIGNMENT 6B//

function loadCart() {
  document.getElementById("cartRollImage").src = localStorage.getItem("cartRollImage");
  document.getElementById("rollName").innerHTML = localStorage.getItem("rollName");
  document.getElementById("rollPrice").innerHTML = localStorage.getItem("rollPrice");
  document.getElementById("rollGlaze").innerHTML = localStorage.getItem("rollGlaze");
  document.getElementById("select-number-of-rolls").value = localStorage.getItem("rollNumber");
}

function Product(rollName, rollGlaze, rollPrice, cartRollImage, rollNumber) {
  this.rollName = rollName;
  this.rollGlaze = rollGlaze;
  this.rollPrice = rollPrice;
  this.cartRollImage = cartRollImage;
  this.rollNumber = rollNumber;
}

// console.log(new Product (rollName, rollGlaze, rollPrice, cartRollImage, localStorage.getItem("rollNumber")));

function test() {
  let products = [];
  var rollName = localStorage.getItem("rollName");
  var rollGlaze = localStorage.getItem("rollGlaze");
  var rollPrice = localStorage.getItem("rollPrice");
  var cartRollImage = localStorage.getItem("cartRollImage");
  var rollNumber = localStorage.getItem("rollNumber");
  products.push(new Product(rollName, rollGlaze, rollPrice, cartRollImage, rollNumber));
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
  console.log("saved to localStorage");
}



//PROCESS//
//create an empty array for populating products//
//create a constructor for each item//
//upon add to cart, create an object of that constructor//
//add that object to the array using push//
//stringify the array//
//on load of the shopping cart page, parse the array//
//write a for loop to go through that array//
//for each item in the array create a new child and populate the right info//
//multiply number of rolls by price and add to the subtotal//
//append that new child and continue with the array//


//To remove items//
//delete target child upon clicking of the X - similar to midterm question//
