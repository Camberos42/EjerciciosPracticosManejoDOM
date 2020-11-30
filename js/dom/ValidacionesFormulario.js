const d = document;
export default function contactFormValidation() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]"); //Todos los inputs del formulario que tengan required 
    //console.log($inputs);

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name; //Atributo id asignarle la propiedad name del input
        $span.textContent = input.title; //Asignarle el texto que tiene en el input en la propiedad title
        $span.classList.add("contact-form-error", "none"); //Agregarle la clase para ocultar y darle estilo al mensaje
        input.insertAdjacentElement("afterend", $span) //Hermano posterior del input
    });

    //Delegacion de eventos
    d.addEventListener("keyup", e => {
        //Validacion de los inputs que sean requeridos
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target, //Elementos que originan el evento
                pattern = $input.pattern || $input.dataset.pattern; //Para que tome en cuenta tambien el textarea
            console.log($input, pattern);

            //Validar cuando se valide por un pattern
            if (pattern && $input.value !== "") {
                //console.log("El input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) //Condicion que valida si se cumple la expresion regular
                    //Id del span que se crea dinamicamente
                    ?
                    d.getElementById($input.name).classList.add("is-active") //Agregar clase is active
                    :
                    d.getElementById($input.name).classList.remove("is-active") //Remover clase is active
            }

            //Validar cuando no tenga patron (asunto a tratar no lo tiene)
            if (!pattern) {
                //console.log("El input no tiene patron");
                return $input.value === "" //Condicion que valida si esta vacio el input
                    //Id del span que se crea dinamicamente
                    ?
                    d.getElementById($input.name).classList.add("is-active") //Agregar clase is active
                    :
                    d.getElementById($input.name).classList.remove("is-active") //Remover clase is active
            }
        }
    });
}