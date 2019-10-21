//loads the stored title of the item//
document.getElementById("rollName").innerHTML = localStorage.getItem("rollName");

//loads the stored price of the item//
document.getElementById("rollPrice").innerHTML = localStorage.getItem("rollPrice");

//loads the stored product-details image of the item//
document.getElementById("rollImage").src = localStorage.getItem("rollImage");

//populates the name, price and image of the item that was clicked on//
function getTitlePriceFromClick(e) {
  //sets a variable for the title and price of item//
  var name = e.target.dataset.name;
  var price = e.target.dataset.price;
  var rollImage = e.target.dataset.image;

  //sets the title and price of the target object into the products-details page//
  localStorage.setItem("rollName", name);
  localStorage.setItem("rollPrice", price);
  localStorage.setItem("rollImage", "images/" + rollImage);
}

//sets initial item number of 0//
var currentItems = 0;

//displays and updates number of items in cart icon//
function updateCartItemNumber() {
  //display the cart item number//
  document.getElementById("cart-item-number-display").style.display = "inline-block";
  //adds 1 additional item upon click//
  currentItems++;
  //updates the cart item number//
  document.getElementById("cart-item-number").innerHTML = currentItems;
}
