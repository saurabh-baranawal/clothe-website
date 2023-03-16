var addToCartButtons = document.querySelectorAll('.card button');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  var button = event.target;
  var card  = button.parentElement;
  var productName = card.querySelector('h5').innerText;
  var productPrice = card.querySelector('h3').innerText;
  alert("Added to cart: " + productName + " " + productPrice);
}
