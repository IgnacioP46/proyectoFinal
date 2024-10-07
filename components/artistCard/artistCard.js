import { ButtoN } from "../button/button";

export function targetasGrupo(product) {
    const targeta = document.createElement('div');
    targeta.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = product.imagen;
    targeta.appendChild(img);

    const nombre = document.createElement('h3');
    nombre.textContent = product.nombre;
    targeta.appendChild(nombre);

    const artista = document.createElement('p');
    artista.textContent = product.artista;
    targeta.appendChild(artista);

    const precio = document.createElement('p');
    precio.textContent = `Precio: ${product.precio}€`;
    targeta.appendChild(precio);

    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = ButtoN(`./details.html?id=${encodeURIComponent(product.nombre)}`, "button", "Comprar", `btn-${product.nombre}`);
    targeta.appendChild(buttonContainer.firstElementChild);

    return targeta;
}
