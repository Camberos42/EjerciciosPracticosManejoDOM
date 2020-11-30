const d = document,
    n = navigator;
export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true, //Que el dispositivo trate de hacer la mejor lectura posible que pueda
            timeout: 5000, //Tiempo que estara esperando la respuesta para tomar la lectura
            maximumAge: 0 //No se guarden caches en las lecturas
        };

    //Funcion en caso de exito
    const success = (position) => {
        //Traer las coordenadas del resultado de position
        let coords = position.coords
        console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es: </p>
        <ul>
            <li> Latitud: <b> ${coords.latitude}</b></li>
            <li> Longitud: <b> ${coords.longitude}</b></li>
            <li> Precision: <b> ${coords.accuracy}</b> metros</li>
            <a href="https://google.com/maps/@${coords.latitude},${coords.longitude},
            1z" target="_blank" rel="noopener">Ver en google maps</a>
        </ul>
        `
    };

    //Funcion en caso de error
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success, error, options) //Parametros (funcion exito, funct error, opciones)
}