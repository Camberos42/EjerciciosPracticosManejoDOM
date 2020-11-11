const d = document;

export function Countdown(stage, dia, mensaje) {

    //Establece la cuenta regresiva con los temporizadores
    let clockTempo;
    clockTempo = setInterval(() => {
        //Fecha INGRESADA (A FUTURO)
        let fecha = new Date(dia);
        let hrsFecha = fecha.getHours(),
            minsFecha = fecha.getMinutes(),
            segsFecha = fecha.getSeconds();
        //Corregir el horario (hora, minutos y segundos)
        hrsFecha = 14;
        minsFecha = 16;
        segsFecha = 0;
        //Pasarlo a milisegundos TimeStamp
        fecha = fecha.getTime();
        //FECHA DE HOY
        let day = new Date(), //Fecha
            month = day.getMonth()
        const today = Date.now(); //En milisegundos
        let hrsToday = day.getHours(),
            minsToday = day.getMinutes(),
            segsToday = day.getSeconds(),
            difHrs = 0,
            difMins = 0,
            difSegs = 0,
            //Diferencia de dias  
            difdiasTime = Math.floor((fecha - today) / (24 * 60 * 60 * 1000));

        //Calcular las horas, minutos y segundos restantes (diferencia de ambas fechas)
        if (hrsFecha >= hrsToday) difHrs = hrsFecha - hrsToday;
        else {
            if (hrsToday === 0) hrsToday = 24;
            if (hrsFecha === 0) hrsFecha = 24;
            difdiasTime -= 1;
            difHrs = Math.abs(hrsFecha - hrsToday);
        }

        if (minsFecha >= minsToday) difMins = minsFecha - minsToday;
        else {
            if (minsToday === 0) minsToday = 60;
            if (minsFecha === 0) minsFecha = 60;
            if (difHrs !== 0) {
                difHrs -= 1;
                difMins = Math.abs(minsFecha - minsToday);
            }
        }

        if (segsFecha >= segsToday) difSegs = segsFecha - segsToday;
        else {
            if (segsToday === 0) segsToday = 60;
            if (segsFecha === 0) segsFecha = 60;
            if (difMins !== 0) {
                difMins -= 1;
                difSegs = Math.abs(segsFecha - segsToday);
            }
        }

        d.querySelector(stage).innerHTML = `<h3>${difdiasTime} Dias ${difHrs} Horas ${difMins} Minutos ${difSegs} Segundos</h3>`;

        /*console.log(difdiasTime);
        console.log(difHrs);
        console.log(difMins);*/

        //Parar el cronometro y lanzar el mensaje 
        if (difdiasTime === 0 && difHrs === 0 && difMins === 0 && difSegs === 0) {
            console.log("Time!");
            clearInterval(clockTempo);
            d.querySelector(stage).innerHTML += `<h1>${mensaje}</h1>`;
        }
    }, 1000);


}