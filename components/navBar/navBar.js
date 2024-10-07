import moment from 'moment';
import "../navBar/navBar.css";
import { ButtoN } from '../button/button';

document.body.className = localStorage.getItem("theme") || "";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("Diseño");
        if (document.body.className === "Diseño") {
            localStorage.setItem("theme", "Accesible");
        } else {
            localStorage.setItem("theme", "");
        }
        changeText();
    });
};

export const changeText = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (document.body.className === "Diseño") {

        themeBtn.innerText = "Accesible";
    } else {
        themeBtn.innerText = "Diseño";
    }
};

export const Navbar = () => {
    const clockContainer = document.createElement('div');
    clockContainer.classList.add('clock');

    const updateClock = () => {
        const currentTime = moment().format('D MMMM YYYY, h:mm:ss a');
        clockContainer.innerHTML = currentTime;
    };

    setInterval(updateClock, 1000);
    updateClock();

    return `
        <nav>
            <ul>
                <div class="clock-container">${clockContainer.outerHTML}</div>
               
                
                <li class="dropdown">
                    <a href="#" class="dropbtn">
                        <div class="nav-line-1">Menu</div>
                    </a>
                    <div class="dropdown-content">
                        <a href="index.html">Inicio</a>
                        <a href="carrito.html">Carrito</a>
                        <a href="login.html">Iniciar sesión</a>
                        <a href="SingUp.html">Registrarse</a>
                        
                    </div>
                </li>

                ${ButtoN("", "", "Accesible", "themeBtn")}
            </ul>
        </nav>
    `;
};


document.addEventListener("DOMContentLoaded", () => {
    Navbar();

    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => {
        const menuLinks = document.querySelectorAll(".nav-links");
        menuLinks.forEach(link => {
            link.classList.toggle("active");
        });
    });

    const menuBtn = document.querySelector("#menuBtn");
    const navItems = document.querySelector(".nav-items");

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navItems.classList.toggle("open");
    });
});

