//Ayuda: https://cybmeta.com/comprobar-la-conexion-a-internet-con-javascript 

export function estadoRed(id) {
    const $divRed = document.getElementById(id);
    console.log(window.navigator);
    console.log(window.navigator.connection);

    //Retornara un booleano, true si hay conexion a internet, false si no no hay conexion
    console.log(navigator.onLine);

    if (navigator.onLine) {
        $divRed.innerHTML = `Estas en linea`;
    } else {
        $divRed.innerHTML = `Estas desconectado`;
    }
}