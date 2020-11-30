const d = document,
    n = navigator,
    ua = n.userAgent;
export default function userDevideInfo(id) {
    const $id = d.getElementById(id),
        // Permite detectar si el usuario visitaba desde SO del telefono    
        isMobile = {
            android: () => ua.match(/android/i), //Detecta si la cadena del ua contiene android (i: no importa si hay mayus o minus)
            ios: () => ua.match(/iphone|ipad|ipod/i), //Detecta si la cadena del ua contiene iphone,ipod,ipad
            windows: () => ua.match(/windows phone/i), //Detecta si la cadena del ua contiene windos phone 
            any: function() {
                return this.android() || this.ios() || this.windows(); //Detecta cualquier dispositivo movil
            },
        },
        //Permite detectar si el usuario visitaba desde SO de escritorio
        isDesktop = {
            linux: () => ua.match(/linux/i), //Cualquier SO Linux
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function() {
                return this.linux() || this.mac() || this.windows();
            },

        },
        //Detecta saber desde que navegador 
        isBrowser = {
            chrome: () => ua.match(/chrome/i), //Cualquier SO Linux
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function() {
                return (
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            },

        };
    // console.log(ua);
    // console.log(isMobile.android()); //Detecta si es un movil android 
    // console.log(isMobile.ios()); //Dtecta si es movil ios 
    // console.log(isMobile.any()); //Detecta si es cualquier movil.
    console.log($id);

    $id.innerHTML = `
    <ul>
        <li>User agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

    /*Contenido Exclusivo*/
    if (isBrowser.chrome()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    if (isBrowser.firefox()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    if (isBrowser.edge()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`;

    if (isDesktop.linux()) $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    if (isDesktop.windows()) $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    if (isDesktop.mac()) $id.innerHTML += `<p><mark>Descarga nuestro software para Mac</mark></p>`;

    /*Redirecciones*/
    if (isMobile.android()) {
        // window.location.href = "https://jonmircha.com/";
    }

}