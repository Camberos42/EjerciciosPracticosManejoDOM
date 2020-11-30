const d = document;

export default function draw(btn, selector) {
    //Logica del programa
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector), //NodeList
            random = Math.floor(Math.random() * $players.length), //Numero decimal entre 1 y el # de participantes 
            winner = $players[random]; //Extraer la posicion de la lista 

        console.log($players, random, winner);
        return `El ganador es ${winner.textContent}`; //TextContent para extraer el contenido
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}

// const getWinnerComment = (selector) => {
//     const $players = document.querySelectorAll(selector), //NodeList
//         random = Math.floor(Math.random() * $players.length), //Numero decimal entre 1 y el # de participantes 
//         winner = $players[random]; //Extraer la posicion de la lista 

//     console.log($players, random, winner);
//     return `El ganador es ${winner.textContent}`; //TextContent para extraer el contenido
// }

// getWinnerComment("ytd-comment-thread-rendered #author-text span");