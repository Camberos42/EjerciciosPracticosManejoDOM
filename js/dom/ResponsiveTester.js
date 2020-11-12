const d = document,
    w = window;
export function responsiveTester(url, ancho, alto, btnprobar, btncerrar) {
    const $InputUrl = d.getElementById(url),
        $InputAncho = d.getElementById(ancho),
        $InputAlto = d.getElementById(alto),
        $BtnProbar = d.getElementById(btnprobar),
        $BtnCerrar = d.getElementById(btncerrar);

    //Sitio de la pagina Web que se abrira en otra ventana
    let RespTesterVentana;
    //w.innerWidth = 300;

    console.log($BtnProbar, btnprobar);
    console.log(w.innerWidth);
    console.log(w.innerHeight);

    $BtnProbar.addEventListener("click", (e) => {
        console.log(`El valor del input url es: ${$InputUrl.value}`);
        console.log(`El valor del Ancho url es: ${$InputAncho.value}`);
        console.log(`El valor del Alto url es: ${$InputAlto.value}`);

        //Abre la ventana
        RespTesterVentana = w.open(`${$InputUrl.value}`, "", `width=${$InputAncho},height=${$InputAlto}`);

        //Ajusta los tamaños de la ventana
        console.log($InputAncho.value, $InputAlto.value);




    });

    $BtnCerrar.addEventListener("click", (e) => {
        //Cierra la ventana
        RespTesterVentana.close();
        console.log(`Cerrando la ventana...`);


    });

}