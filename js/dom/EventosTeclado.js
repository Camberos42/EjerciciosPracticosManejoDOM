const d = document;
export function moverCirculo(contenedor) {
    console.log(d.querySelector(contenedor));
    d.querySelector(contenedor).setAttribute("onkeypress", "tecla(event)")

}

function tecla(event) {
    var x = event.which || event.keyCode;
    console.log(`El valor de la tecla es ${x}`)
}