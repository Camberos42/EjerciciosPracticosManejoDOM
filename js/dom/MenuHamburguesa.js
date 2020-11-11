export default function menuHamburguesa(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { //Btnpanel * considera todo lo que se encuentre dentro de panel (hijos)
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active"); //Se modifica el icono si se agrega esa clase (hamburger jonsuh)
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");

        }
    });

}