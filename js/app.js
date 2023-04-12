



const products = [
    { name: 'Complejo B', price: 10.99 },
    { name: 'Foskrol', price: 15.99 },
    { name: 'Acetaminofen', price: 20.99 },
    { name: 'Colageno Hidrolizado', price: 25.99 },
    { name: 'Alcarlzelsert BOOST', price: 30.99 }
  ];

  let cart = [];
  let total = 0;
  let history = [];

  const productSelect = document.getElementById('product-select');
  const productQty = document.getElementById('product-qty');
  const addToCartButton = document.getElementById('add-to-cart');
  const cartTableBody = document.querySelector('#cart-table tbody');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout');
  const historyTableBody = document.querySelector('#history-table tbody');

  products.forEach(function(product) {
    const option = document.createElement('option');
    option.value = product.name;
    option.innerHTML = product.name + ' - $' + product.price.toFixed(2);
    productSelect.appendChild(option);
  });

  function updateCart() {
    cartTableBody.innerHTML = '';
    cart.forEach(function(item) {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      const qtyTd = document.createElement('td');
      const priceTd = document.createElement('td');
      const totalTd = document.createElement('td');
      nameTd.innerHTML = item.name;
      qtyTd.innerHTML = item.qty;
      priceTd.innerHTML = '$' + item.price.toFixed(2);
      totalTd.innerHTML = '$' + item.total.toFixed(2);
      tr.appendChild(nameTd);
      tr.appendChild(qtyTd);
      tr.appendChild(priceTd);
      tr.appendChild(totalTd);
      cartTableBody.appendChild(tr);
    });
    cartTotal.innerHTML = '$' + total.toFixed(2);
  }

  function addToCart() {
    const productName = productSelect.value;
    const productPrice = products.find(function(product) {
      return product.name === productName;
    }).price;
    const qty = parseInt(productQty.value, 10);
    const item = {
      name: productName,
      price: productPrice,
      qty: qty,
      total: productPrice * qty
    };
    cart.push(item);
    total += item.total;
    updateCart();
  }

  function checkout() {
    history.push(cart);
    cart = [];
    total = 0;
    updateCart();
    updateHistory();
  }

  function updateHistory() {
    historyTableBody.innerHTML = '';
    let purchaseNumber = 1;
    history.forEach(function(purchase) {
      let purchaseTotal = 0;
      purchase.forEach(function(item) {
        const tr = document.createElement('tr');
        const purchaseTd = document.createElement('td');
        const nameTd = document.createElement('td');
        const qtyTd = document.createElement('td');
        const priceTd = document.createElement('td');
        const totalTd = document.createElement('td');
        nameTd.innerHTML = item.name;
        qtyTd.innerHTML = item.qty;
        priceTd.innerHTML = '$' + item.price.toFixed(2);
        totalTd.innerHTML = '$' + item.total.toFixed(2);
        purchaseTd.innerHTML = purchaseNumber;
        tr.appendChild(purchaseTd);
        tr.appendChild(nameTd);
        tr.appendChild(qtyTd);
        tr.appendChild(priceTd);
        tr.appendChild(totalTd);
        historyTableBody.appendChild(tr);
        purchaseTotal += item.total;
      });
      const tr = document.createElement('tr');
      const purchaseTd = document.createElement('td');
      const spacerTd = document.createElement('td');
      const purchaseTotalTd = document.createElement('td');
      purchaseTd.innerHTML = purchaseNumber;
      spacerTd.colSpan = 3;
      purchaseTotalTd.innerHTML = '$' + purchaseTotal.toFixed(2);
      tr.appendChild(purchaseTd);
      tr.appendChild(spacerTd);
      tr.appendChild(purchaseTotalTd);
      historyTableBody.appendChild(tr);
      purchaseNumber++;
    });
  }

  addToCartButton.addEventListener('click', addToCart);
  checkoutButton.addEventListener('click', checkout);
  




 


