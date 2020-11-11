const d = document;
export function relojAlarma() {
    const $IniciarRelojBtn = d.querySelector("#IniciarRelojBtn"),
        $IniciarAlarmaBtn = d.querySelector("#IniciarAlarmaBtn"),
        $alarma = d.querySelector('.alarma'),
        $reloj = d.querySelector('.reloj'); // Get a reference to the element we want to update
    //let message; //Mensaje que se escribira (opcional)

    d.addEventListener("click", (e) => {
        //Regresa un true si se da click a un selector
        //console.log(e.target.matches("#IniciarRelojBtn"));

        if (e.target.matches("#IniciarRelojBtn")) {
            console.log("Se presiono en el boton de iniciar reloj");

            setInterval(() => {
                let today = new Date(),
                    hr = today.getHours(),
                    min = today.getMinutes(),
                    sec = today.getSeconds();
                min = checkTime(min);
                sec = checkTime(sec);

                //Agrega un 0 en caso de que num < 10
                function checkTime(i) {
                    if (i < 10) i = "0" + i;
                    return i;
                }

                // Update the content of the element with the message
                $reloj.innerHTML = `${hr}: ${min}: ${sec}`;
                $reloj.style.margin = "1rem";
                $reloj.style.setProperty("font-size", "2rem");

            }, 1000);
            $reloj.style.setProperty("display", "block");
            $IniciarRelojBtn.disabled = true;

        } else if (e.target.matches("#DetenerRelojBtn")) {
            $reloj.style.setProperty("display", "none");
            console.log("Se presiono en el boton de detener reloj");
            $IniciarRelojBtn.disabled = false;

        } //Para que funcione la alarma descomentar etiqueta del HTML
        else if (e.target.matches("#IniciarAlarmaBtn")) {
            console.log("Se presiono en el boton de iniciar alarma");
            //Debo buscar una alarma para agregarsela al src 
            $alarma.setAttribute("src", "/assets/alarma.mp3");
            //$alarma.setAttribute("src", "http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg");
            $alarma.setAttribute("autoplay", "true");
            //$alarma.load();
            $IniciarAlarmaBtn.disabled = true;
        } else if (e.target.matches("#DetenerAlarmaBtn")) {
            console.log("Se presiono en el boton de detener alarma");
            //Elimine el src para que parara el audio por completo, de lo contrario solo lo reiniciaba
            $alarma.setAttribute("src", "");
            $alarma.setAttribute("autoplay", "false");
            //$alarma.load();
            $IniciarAlarmaBtn.disabled = false;
        }

    });


}