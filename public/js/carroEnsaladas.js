const contenedorProductos = document.getElementById('contenedor-productos');
const productosEnCarro = document.getElementById('carrito-contenedor');
const precioTotal = document.getElementById('precioTotal');
const botonVaciar = document.getElementById('vaciar-carrito');
let carrito = JSON.parse(localStorage.getItem('carrito'));

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
         if (producto.id <= 20) {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                    <a href="/products/${producto.id}"></a>
                        <h2>
                            ${producto.name}
                        </h2>
                        <div class="boxDetail">
                            <div class="boxLeft">
                                <img src="/images/products/${producto.image} ">
                            </div>
                            <div class="boxRight">

                                <p> Descripción: ${producto.description}</p>
                                <div>
                                    <h3>$ ${producto.price}</h3>
                                </div>
                                <p>
                                        <button id="comprar${producto.id}" class="boton-comprar"><a class="agregarCarrito">Agregar al carrito
                                        <i class="fa-solid fa-cart-shopping"></i></a></button>
                                        <a href="/products/productDetail/${producto.id} " class="agregarCarrito">Detalles</a>
                                </p>
                                

                            </div>
                        </div>
                        </div>
                        </div>
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
         carrito = JSON.parse(localStorage.getItem('carrito'));
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
