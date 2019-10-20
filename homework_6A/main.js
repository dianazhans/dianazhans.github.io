//stores the title of the item//
document.getElementById("rollName").innerHTML = localStorage.getItem("rollName");

//stores the price of the item//
document.getElementById("rollPrice").innerHTML = localStorage.getItem("rollPrice");

//stores the product-details image of the item//
document.getElementById("rollImage").src = localStorage.getItem("rollImage");

//populates the name and price of the item that was clicked on//
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
