import "../login/login.css";
import { changeTheme, Navbar } from "../../components/navBar/navBar";
import { footer } from "../../components/footer/footer";
import { ButtoN } from "../../components/button/button";

document.querySelector("main").innerHTML = `
    <h1 class="tituloLogin">Mi Cuenta</h1>
    <div class="container">
        <form action="#" method="post">
    <div class="form-group">
        <label for="email">Correo Electrónico: </label>
        <input type="email" id="email" name="email" placeholder="email" required>
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

    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='clave']").value;


    localStorage.setItem('userEmail', email);

    alert('Datos guardados en localStorage');
});
