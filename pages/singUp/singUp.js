import "../singUp/singUp.css";
import { changeTheme, Navbar } from "../../components/navBar/navBar";
import { footer } from "../../components/footer/footer";
import { ButtoN } from "../../components/button/button";


document.querySelector("main").innerHTML = `
    <h1 class="tituloSingUp">Registro</h1>
    <div class="container">
        <form action="#" method="post">
            <div class="form-group">
                <label for="nombre">Nombre: </label>
                <input type="text" id="nombre" name="nombre" placeholder="nombre" required>
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos: </label>
                <input type="text" id="apellidos" name="apellidos" placeholder="apellidos" required>
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico: </label>
                <input type="email" id="email" name="email" placeholder="email" required>
            </div>
            <div class="form-group">
                <label for="direccion">Calle y número de envío: </label>
                <input type="text" id="direccion" name="direccion" placeholder="Calle y número" required>
            </div>
            <div class="form-group">
        <label for="clave">Clave: </label>
        <input type="password" id="clave" name="clave" placeholder="password" required>
            ${ButtoN("", "submit", "Enviar", "")}
        </form>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = Navbar();

    const footerElem = document.querySelector("footer");
    footerElem.innerHTML = footer();
    changeTheme();
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("input[name='nombre']").value;
    const apellidos = document.querySelector("input[name='apellidos']").value;
    const email = document.querySelector("input[name='email']").value;
    const direccion = document.querySelector("input[name='direccion']").value;

    localStorage.setItem('userName', nombre);
    localStorage.setItem('userLastName', apellidos);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userAddress', direccion);

    alert('Datos guardados en localStorage');


});
