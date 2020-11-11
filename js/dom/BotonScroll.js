/*Forma de hacerlo: https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc*/

const d = document;
const elementoRaiz = document.documentElement
export function displayBtnScroll(e, btnScroll) {
    //console.log("********** Evento Scroll **********");
    let x = window.scrollX,
        y = window.scrollY;
    const $btnScroll = d.querySelector(btnScroll)

    //console.log(x);
    //console.log(y);
    //console.log(e);

    //Muestra u oculta el boton dependeindo si pasa los 200px
    if (window.scrollY < 820) {
        //console.log("Esta hasta el tope");
        $btnScroll.classList.remove("mostrarBtnScroll");
    } else {
        $btnScroll.classList.add("mostrarBtnScroll");
    }

    //Manda al top al dar click
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnScroll) || e.target.matches(`${btnScroll} *`)) {
            //scroll hasta arriba de la pagina (elemento raiz)
            elementoRaiz.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    });

}