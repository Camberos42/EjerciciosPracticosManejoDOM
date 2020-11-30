// https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia


export function deteccionCamara() {
    console.log(`Informacion Camara: ${MediaDevices}`);

    const video = document.getElementById('video');
    var constraints = { audio: true, video: false /*{ width: 700, height: 500 }*/ };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(console.error); // always check for errors at the end.
}