// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = price.innerHTML * quantity;
  let subtotalOwnerElement = product.querySelector('.subtotal span');
  subtotalOwnerElement.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2

  const severalProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (i = 0; i < severalProducts.length; i++) {
    updateSubtotal(severalProducts[i]);
    totalPrice += updateSubtotal(severalProducts[i]);
  }

  // ITERATION 3

  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const severalProducts = document.getElementsByClassName('product');
  removeProducts.parentNode.removeChild(removeProducts);
}

// ITERATION 5

function createProduct() {}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeProducts = document.getElementById('btn btn-remove');
  removeProducts.addEventListener('click', removeProduct);
});
