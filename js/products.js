const products = JSON.parse(sessionStorage.getItem('productos'));
const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir que se envíe el formulario

  const productName = document.getElementById('product-name').value;
  const costo = document.getElementById('costo').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);

  if (productName && productPrice) {
    const newProduct = { name: productName, price: productPrice, costo: costo };
    products.push(newProduct);
    sessionStorage.setItem('productos', JSON.stringify(products));
    sessionStorage.setItem('cantProductos', products.length);
    

    // Limpiar el formulario
    document.getElementById('product-name').value = '';
    document.getElementById('costo').value = '';
    document.getElementById('product-price').value = '';
  }
});