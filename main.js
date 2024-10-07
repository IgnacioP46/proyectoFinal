import './style.css'
import { Navbar, changeTheme } from './components/navBar/navBar';
import { footer } from './components/footer/footer';
import { home } from './pages/home/home';
import Swal from 'sweetalert2';


document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = Navbar();
   

    const main = document.querySelector("main");
    home();


    const footerElem = document.querySelector("footer");
    footerElem.innerHTML = footer();

    changeTheme();
});
