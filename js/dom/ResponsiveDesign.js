/*Mas inf: https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia */

const d = document;

export function responsiveDesign(video) {
    let $seccionVideo = d.querySelector(video);
    //console.log($seccionVideo);
    if (window.matchMedia("(min-width: 754px)").matches) {
        /* La pantalla tiene al menos 756 píxeles de ancho */
        $seccionVideo.innerHTML = `
        <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>`;
    } else {
        /* La pantalla tiene menos de 756 píxeles de ancho */
        $seccionVideo.innerHTML = `
        <a target=" _blank" href='https://www.youtube.com/embed/tgbNymZ7vqY'>Ver video</a>`;
    }
}