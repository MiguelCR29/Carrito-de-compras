function pintarTabla() {
  const tbody = document.getElementById('carrito');
  
  tbody.innerHTML = '';
  
  carrito.forEach(curso => {
    const fila = document.createElement('tr');
    const nombre = document.createElement('td');
    const precio = document.createElement('td');
    const boton = document.createElement('td');
    const botonBorrar = document.createElement('button');
    
    nombre.innerText = curso.nombre;
    precio.innerText = curso.precio;
    botonBorrar.innerText = 'Borrar';
    botonBorrar.addEventListener('click', () => {
      eliminarCurso(curso.id);
    });
    
    boton.appendChild(botonBorrar);
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(boton);
    tbody.appendChild(fila);
  });
}
