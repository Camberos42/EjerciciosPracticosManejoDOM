import menuHamburguesa from "./dom/MenuHamburguesa.js";
import { relojAlarma } from "./dom/RelojAlarma.js";
import { moverCirculo } from "./dom/EventosTeclado.js";
import { Countdown } from "./dom/Countdown.js";
import { displayBtnScroll } from "./dom/BotonScroll.js";
import { temaDark } from "./dom/TemaDark.js";
import { responsiveDesign } from "./dom/ResponsiveDesign.js";


//Se aplica la propagacion de eventos (se ejecuta el evento DOMContentLOaded y el evento del click de la hamburguerMenu)
let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    //Nombre de los selectores Param 1 panel-btn, param2 clase panel , param3 cualquier a de la clase menu (para cerrar menu e ir a la seccion)
    menuHamburguesa(".panel-btn", ".panel", ".menu a");
    relojAlarma(); //Mi funcion, mi forma
    //alarm("/assets/alarma.mp3", "#IniciarAlarmaBtn", "#DetenerAlarmaBtn");
    moverCirculo(".contenedorSeccion2"); //Mi funcion buena para nada

    //Cuenta regresiva 
    Countdown(".countdown", "2021, 11, 19", "FELICIDADEEEES!"); //Mi funcion (si funciono)
    /*Countdown("countdown",
        "November 14,2020 13:00:00",
        "Feliz cumpleaños amigo y maestro digital ❤️");*/

    //temaDark(".dark-theme-btn", "dark-mode"); //Mi funcion

});


//Eventos Scroll (mi codigo -> si funciono)
window.addEventListener("scroll", (e) => {
    displayBtnScroll(e, ".scroll-btn");
});


/*Se saca del evento DOMContentLoad de este archivo para que se ejecuten todos los eventos 
dentro de esta funcion (codigo JonMircha)*/
temaDark(".dark-theme-btn", "dark-mode");


//Responsive design (Mi codigo )
window.addEventListener("resize", (e) => {
    console.log(window.innerWidth);
    //console.log(window.innerHeight);
    responsiveDesign(".video");
});