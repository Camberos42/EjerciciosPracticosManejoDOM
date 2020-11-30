const d = document;
export default function slider() {
    const $BtnPrevious = d.querySelector(".slider-btns .prev"),
        $BtnNext = d.querySelector(".slider-btns .next"),
        $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
    d.addEventListener("click", e => {
        if (e.target === $BtnPrevious) {
            e.preventDefault();
            //$slides es un NodeList
            $slides[i].classList.remove("active");
            i--;

            // Si es menor a 0 se ira al ultimo elemento    
            if (i < 0) {
                i = $slides.length - 1;
            }
            // Se añade la clase active al nuevo elemento seleccionado (i)
            $slides[i].classList.add("active")
        }

        if (e.target === $BtnNext) {
            e.preventDefault();
            //$slides es un NodeList
            $slides[i].classList.remove("active");
            i++;

            // Si es menor a 0 se ira al ultimo elemento    
            if (i >= $slides.length) {
                i = 0;
            }
            // Se añade la clase active al nuevo elemento seleccionado (i)
            $slides[i].classList.add("active")
            console.log(i);
        }
    });
}