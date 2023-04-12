

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'pass') {
    // Si el inicio de sesión fue exitoso, redirigir a la página deseada
    window.location.href = './index.html';
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
});


