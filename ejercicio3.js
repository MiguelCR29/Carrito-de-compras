function vaciarCarrito() {
  carrito.length = 0; 
  pintarTabla(); 
}

const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
btnVaciarCarrito.addEventListener('click', vaciarCarrito);
