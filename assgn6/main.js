//if there are items in cart, then display it//
if (localStorage.getItem("currentItems") > 0) {
  document.getElementById("cart-item-number-display").style.display = "inline-block";
  document.getElementById("cart-item-number").innerHTML = localStorage.getItem("currentItems");
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

  //sets the title, price and image of the target object into the products-details page//
  localStorage.setItem("rollName", name);
  localStorage.setItem("rollPrice", price);
  localStorage.setItem("rollImage", "images/" + rollImage);
}

//check if there are any items in cart, if not, then set currentItems to 0//
if (localStorage.getItem("currentItems") == null) {
  localStorage.setItem("currentItems", 0);
}

//updates cart item number and display status upon click of add to cart button//
function updateCartItemNumber() {
  var itemNumber = localStorage.getItem("currentItems"); //sets a variable to the currentItems//
  itemNumber++; //adds 1 to the variable//
  localStorage.setItem("currentItems", itemNumber); //sets the new number to currentItems//
  document.getElementById("cart-item-number").innerHTML = localStorage.getItem("currentItems"); //updates the innerHTMl of the cart number//
  document.getElementById("cart-item-number-display").style.display = "inline-block";//displays the cart number in header//
  document.getElementById("cartTitleItemNumber").innerHTML = localStorage.getItem("currentItems");
}

//ASSIGNMENT 6B//

//get roll image for shopping cart//
//get number of rolls//
//get glaze//

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
