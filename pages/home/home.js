import "./home.css";
import { products } from "../../components/data/data";
import { targetasGrupo } from "../../components/artistCard/artistCard";
import anime from 'animejs/lib/anime.es';

export const home = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
        <h1>MURMULO RECORDS</h1>
        <section id="vinilo">
            <h2>Vinilo</h2>
            <div class="gallery" id="vinilo-gallery"></div>
        </section>
        <section id="cassette">
            <h2>Indie</h2>
            <div class="gallery" id="cassette-gallery"></div>
        </section>
    `;

    function displayProducts() {
        products.forEach(product => {
            const gallery = document.getElementById(`${product.formato}-gallery`);
            const productCard = targetasGrupo(product);

            productCard.addEventListener('click', () => {
                window.location.href = `./details.html?id=${encodeURIComponent(product.nombre)}`;
            });

            const productImage = productCard.querySelector("img");

            productCard.addEventListener('mouseenter', () => {
                anime({
                    targets: productImage,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        productImage.src = product.imagenTras;
                    }
                });
            });

            productCard.addEventListener('mouseleave', () => {
                anime({
                    targets: productImage,
                    duration: 500,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        productImage.src = product.imagen;
                    }
                });
            });

            gallery.appendChild(productCard);
        });
    }

    displayProducts();
};
