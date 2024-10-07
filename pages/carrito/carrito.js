import "../carrito/carrito.css";
import { changeTheme, Navbar } from "../../components/navBar/navBar";
import { footer } from "../../components/footer/footer";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = Navbar();

    const footerElem = document.querySelector("footer");
    footerElem.innerHTML = footer();

    changeTheme();

    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

    if (cartItems.length > 0) {
        let totalPrice = 0;

        const cartInfo = cartItems.map(item => {
            totalPrice += item.totalPrice;
            return `
                <div class="cart-item">
                    <img class="imgCarrito" src="${item.image}" alt="${item.vinylName}" />
                    <h2 class="h2Carrito">${item.vinylName}</h2>
                    <p class="pCarrito">Artista: ${item.artistName}</p>
                    <p class="pCarrito">Cantidad: ${item.quantity}</p>
                    <p class="pCarrito">Precio Total: ${item.totalPrice.toFixed(2)}€</p>
                </div>
            `;
        }).join("");

        document.querySelector("main").innerHTML = `
            <h1 class="h1Carrito">Carrito de Compras</h1>
            <section>
                ${cartInfo}
                <h3 class="h3Carrito">Precio Total de todos los productos: ${totalPrice.toFixed(2)}€</h3>
                <button id="buy-button">Comprar</button>
            </section>
        `;
    } else {
        document.querySelector("main").innerHTML = '<h1 class="h1Carrito">Carrito de Compras</h1><img class = "imgCarritoV" src="./public/assets/carritoVacio.png" alt="carritoVacio"><h4 class="h4Carrito">Oops! Parece que aún no has añadido nada a tu carrito.</h4> <h4 class="h4Carrito">Continua comprando para agregar productos a tu carrito</h4>';
    }
});
