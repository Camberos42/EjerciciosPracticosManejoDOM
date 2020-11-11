export default function mihamburguerMenu() {
    //Ejercicio 1 Menu de hamgurguesas
    const $botonMenu = document.querySelector("#boton-menu"),
        $navSecciones = document.querySelector("#menu-hamburguesa"),
        $iconoMenu = document.querySelector("#boton-menu i");
    //console.log($botonMenu);
    //console.log($navSecciones);

    /*$botonMenu.addEventListener("click", (e) => {
        console.log(e);
        $navSecciones.style.setProperty("visibility", "visible");
        $iconoMenu.innerHTML = `<i class="fas fa-times"></i>`; //Se agrega el icono quitar
        $botonMenu.appendChild($iconoMenu);
        console.log($iconoMenu.className);
    });
    */

    //console.log($iconoMenu.className);

    $botonMenu.addEventListener("click", (e) => {
        //console.log(e);
        //console.log($iconoMenu.className);
        if ($iconoMenu.className === "fas fa-bars") {
            $navSecciones.style.setProperty("display", "block");
        } else {
            $navSecciones.style.setProperty("display", "none");
        }

        $iconoMenu.classList.toggle("fa-times");

        //console.log($iconoMenu.className === "fas fa-bars");
    });

}