/*Se modifico a este codigo de jonh Para hacerlo modular */

import mihamburguerMenu from "./dom/MiMenuHamburguesas.js";
//Me lo genera utomaticamenteos
//const { default: hamburguerMenu } = require("./js/dom/MenuHamburguesaJon");


//Se aplica la propagacion de eventos (se ejecuta el evento DOMContentLOaded y el evento del click de la hamburguerMenu)
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    //Nombre de los selectores Param 1 panel-btn, param2 clase panel , param3 cualquier a de la clase menu (para cerrar menu e ir a la seccion)
    mihamburguerMenu();
});