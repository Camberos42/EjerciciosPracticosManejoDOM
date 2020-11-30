const d = document;

export default function searchFilters(input, selector) {
    d.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {
            console.log(e.key)
            console.log(e.target.value) //Los cracteres que se van acumulando en el input

            if (e.key.target === "Escape") e.target.value = ""; //Vaciar el input al presionar esc

            d.querySelectorAll(selector).forEach((el) => { //Recorre las cards y si lo encuentra quita clase filter
                el.textContent.toLowerCase().includes(e.target.value) ? //Pconvierte a minusculas lo que se ingresa 
                    el.classList.remove("filter") :
                    el.classList.add("filter");
            });
        }
    });
}