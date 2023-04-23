
const botonesAgregar = document.querySelectorAll(".u-full-width button-primary button input agregar-carrito");


let carrito = [];


botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    
    const id = boton.getAttribute("data-producto-id");
    
    const producto = {
      id: id,
      nombre: "Producto " + id,
      precio: Math.floor(Math.random() * 100) + 1 
    };
    
    carrito.push(producto);
    
    actualizarCarrito();
  });
});


function actualizarCarrito() {
  const tbody = document.getElementById("carrito");
  tbody.innerHTML = ""; 
  carrito.forEach(producto => {
    const fila = document.createElement("tr");
    
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);
    
    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = "$" + producto.precio;
    fila.appendChild(celdaPrecio);
    
    const celdaBorrar = document.createElement("td");
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.classList.add("borrar-curso");
    botonBorrar.setAttribute("data-producto-id", producto.id);
    celdaBorrar.appendChild(botonBorrar);
    fila.appendChild(celdaBorrar);
    tbody.appendChild(fila);
  });
 
  const botonesBorrar = document.querySelectorAll(".borrar-curso");
  botonesBorrar.forEach(boton => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-producto-id");
      
      carrito = carrito.filter(producto => producto.id !== id);
      
      actualizarCarrito();
    });
  });
}



function eliminarCurso(idCurso) {
  carrito = carrito.filter(curso => curso.id !== idCurso);
  
  pintarTabla();
}

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




function vaciarCarrito() {
  carrito.length = 0; 
  pintarTabla(); 
}

const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
btnVaciarCarrito.addEventListener('click', vaciarCarrito);
