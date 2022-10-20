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

  target.closest('tr').remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productName = product.querySelector('.create-product input')[0];
  console.log(productName);
  let uniquePrice = product.querySelector('.create-product input')[1];
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  let removeProducts = document.getElementsByClassName('btn btn-remove');
  console.log(removeProducts);
  for (i = 0; i < removeProducts.length; i++) {
    removeProducts[i].addEventListener('click', removeProduct);
  }

  const createAProduct = document.getElementsByClassName('btn');
  createAProduct.addEventListener('click', createProduct);
});
