

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'pass') {
    // Si el inicio de sesión fue exitoso, redirigir a la página deseada
    window.location.href = './index.html';
    const products = [
      { name: 'Complejo B', price: 10.99, costo: 5.00 },
      { name: 'Foskrol', price: 15.99, costo: 5.00 },
      { name: 'Acetaminofen', price: 20.99, costo: 5.00 },
      { name: 'Colageno Hidrolizado', price: 25.99, costo: 5.00 },
      { name: 'Alcarlzelsert BOOST', price: 30.99, costo: 5.00 }
    ];
    sessionStorage.setItem('productos', JSON.stringify(products));
    sessionStorage.setItem('cantProductos', products.length);
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
});


