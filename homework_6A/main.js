//stores the title of the item//
document.getElementById("rollTitle").innerHTML = localStorage.getItem("rollName");

//stores the price of the item//
document.getElementById("rollPrice").innerHTML = localStorage.getItem("rollPrice");

//populates the name and price of the item that was clicked on//
function getTitlePriceFromClick(e) {
  //sets a variable for the title and price of item//
  var name = e.target.dataset.name;
  var price = e.target.dataset.price;

  //sets the title and price of the target object into the products-details page//
  localStorage.setItem("rollTitle", name);
  localStorage.setItem("rollPrice", price);
}
