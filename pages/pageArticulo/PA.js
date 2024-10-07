import "../pageArticulo/PA.css";
import { products } from "../../components/data/data";
import { Navbar, changeTheme } from "../../components/navBar/navBar";
import { footer } from "../../components/footer/footer";
import { ButtoN } from "../../components/button/button";

import Swal from 'sweetalert2';
import anime from 'animejs/lib/anime.es.js';

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = Navbar();

    const footerElem = document.querySelector("footer");
    footerElem.innerHTML = footer();
    changeTheme();
    showProductDetails();

    let count = 1;

    function updateCount(value) {
        count += value;
        if (count < 1) count = 1;
        document.querySelector("#vinyl-count").innerText = count;
    }

    const incrementBtn = document.querySelector("#increment-btn");
    const decrementBtn = document.querySelector("#decrement-btn");
    const addToCartBtn = document.querySelector("#add-to-cart");

    if (incrementBtn && decrementBtn && addToCartBtn) {
        incrementBtn.addEventListener("click", () => updateCount(1));
        decrementBtn.addEventListener("click", () => updateCount(-1));

        addToCartBtn.addEventListener("click", () => {
            const vinylName = document.querySelector("h1").innerText;
            const artistName = document.querySelector(".h2PA").innerText;

            const priceText = document.querySelector(".precioPA").innerText;
            const priceMatch = priceText.match(/(\d+(\.\d+)?)/);

            if (!priceMatch) {
                console.error("Error: No se pudo extraer el precio de la cadena:", priceText);
                return;
            }

            const price = parseFloat(priceMatch[0]);
            const cartItem = {
                vinylName,
                artistName,
                quantity: count,
                totalPrice: price * count,
                image: document.querySelector(".imgPA").src,
            };

            const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            cart.push(cartItem);
            sessionStorage.setItem('cart', JSON.stringify(cart));

            Swal.fire({
                title: '¡Producto añadido al carrito!',
                html: `
                    <strong>${cartItem.vinylName}</strong> ha sido añadido al carrito.<br>
                    Cantidad: ${cartItem.quantity}<br>
                    Precio total: ${(cartItem.totalPrice).toFixed(2)}€
                `,
                icon: 'success',
                confirmButtonText: 'Continuar',
                timer: 3000
            });
        });

        const productImage = document.querySelector(".imgPA");
        if (productImage) {
            const product = products.find(p => p.nombre === document.querySelector(".tituloPA").innerText);

            productImage.addEventListener('mouseenter', () => {
                anime({
                    targets: productImage,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        productImage.src = product.imagenTras;
                    }
                });
            });

            productImage.addEventListener('mouseleave', () => {
                anime({
                    targets: productImage,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        productImage.src = product.imagen;
                    }
                });
            });
        }
    } else {
        console.error("Uno o más elementos necesarios no fueron encontrados en el DOM.");
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

export const showProductDetails = () => {
    const productName = decodeURIComponent(getQueryParam('id'));
    const product = products.find(p => p.nombre === productName);

    if (!product) {
        document.querySelector("main").innerHTML = '<h1>Producto no encontrado</h1>';
        return;
    }

    document.querySelector("main").innerHTML = `
        <h1 class="tituloPA">${product.nombre}</h1>
        <section>
            <img class="imgPA" src="${product.imagen}" alt="${product.nombre}" />
            <h2 class="h2PA">${product.artista}</h2>
            <p class="descripcionPA">${product.descipcion}</p>
            <p class="selloPA">Sello: ${product.sello}</p>
            <p class="formatoPA">Formato: ${product.formato}</p>
            <p class="precioPA">Precio: ${product.precio}€</p>
            <div class = "contador">
                <button id="decrement-btn">-</button>
                <span id="vinyl-count">1</span>
                <button id="increment-btn">+</button>
            </div>
              ${ButtoN("", "", "Comprar", "add-to-cart")}
            <iframe class="spotyPA" src="${product.spotify}" width="500" height="150" frameborder="0" allow="encrypted-media"></iframe>
            
           
        </section>
    `;
};
