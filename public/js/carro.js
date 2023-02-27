const contenedorProductos = document.getElementById('contenedor-productos');
const productosEnCarro = document.getElementById('carrito-contenedor');
const precioTotal = document.getElementById('precioTotal');
const botonVaciar = document.getElementById('vaciar-carrito');
let carro = JSON.parse(localStorage.getItem('carrito'));
console.log(carro);
let carrito = [];
if (carro == null) {
   localStorage.setItem('carrito', JSON.stringify(carrito));
} else {
   carrito = JSON.parse(localStorage.getItem('carrito'));
}

botonVaciar.addEventListener('click', () => {
   carrito.length = 0;
   localStorage.setItem('carrito', JSON.stringify(carrito));
   pintarCarrito(carrito);
   Toastify({
      text: 'Vacio su carrito!!',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
         background: 'linear-gradient(to right, rgba(119, 194, 101, 0.9), rgba(6, 115, 107, 0.8))',
      },
   }).showToast();
});

const pintarCarrito = (carrito) => {
   productosEnCarro.innerHTML = '';

   carrito.forEach((prod) => {
      const div = document.createElement('tr');
      div.className = 'productoEnCarrito';
      div.innerHTML = `
        <td class="pe-5"> ${prod.name} </td>
        <td class="px-5">${prod.amount} </td>
        <td class="px-5">${prod.price} </td>
        <td><button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar">🗑️</button></td>
        `;

      productosEnCarro.appendChild(div);

      localStorage.setItem('carrito', JSON.stringify(carrito));
   });

   console.log(carrito);
   precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.amount * prod.price, 0);
};
fetch('http://localhost:3000/products/productsJson')
   .then((res) => res.json())
   .then((data) => {
      data.forEach((producto) => {
         if (producto.id <= 20 && producto.status == 'A') {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                        <article class="card">
                        <img class="card img" src="/images/products/${producto.image} " alt="...">
                        <div class="description">
                            <h2>
                                ${producto.name}
                            </h2>
                            <p class="priceIndex" style="color: black;">Precio $ ${producto.price}
                            </p>
                            <p style="color: black;">Ingredientes: ${producto.description}
                            </p>
                            <div class="botones">
                            <button id="comprar${producto.id}" class="boton-comprar botonComprar"><b> Comprar</b> <i class="fas fa-shopping-cart"></i></button>
                                <a href="/products/productDetail/${producto.id} ">Detalles</a>
                            </div>
                        </div>
                    </article>
                        
                        `;
            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`comprar${producto.id}`);

            boton.addEventListener('click', () => {
               agregarAlCarrito(producto.id);
               Toastify({
                  text: 'Agrego un producto a su carrito!!',
                  duration: 3000,
                  gravity: 'top',
                  position: 'right',
                  style: {
                     background: 'linear-gradient(to right, rgba(119, 194, 101, 0.9), rgba(6, 115, 107, 0.8))',
                  },
               }).showToast();
            });
         }
      });

      const agregarAlCarrito = (prodId) => {
         const existe = carrito.some((prod) => prod.id === prodId);

         if (existe) {
            let prod = carrito.map((prod) => {
               if (prod.id === prodId) {
                  prod.amount++;
               }
            });
         } else {
            const item = data.find((prod) => prod.id === prodId);
            carrito.push(item);
         }
         localStorage.setItem('carrito', JSON.stringify(carrito));
         pintarCarrito(carrito);
      };
   });

document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('carrito')) {
      // carrito = JSON.parse(localStorage.getItem('carrito'))
      pintarCarrito(carrito);
   }
});

const eliminarDelCarrito = (prodId) => {
   const item = carrito.find((prod) => prod.id === prodId);

   const indice = carrito.indexOf(item);

   carrito.splice(indice, 1);
   localStorage.setItem('carrito', JSON.stringify(carrito));
   pintarCarrito(carrito);

   Toastify({
      text: 'Elimino un producto!!',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
         background: 'linear-gradient(to right, rgba(119, 194, 101, 0.9), rgba(6, 115, 107, 0.8))',
      },
   }).showToast();

   console.log(carrito);
};
