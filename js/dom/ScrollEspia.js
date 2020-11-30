const d = document;

export default function scrollSpy() {
    //Traer a todas las secciones que tengan el data-atributte data-scroll-spy
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    //Funcion callback que sera un parametro del objeto IntersectionObserver
    const cb = (entries) => {
        //console.log("entries", entries); //Las entries son las 15 sections

        entries.forEach(entry => {
            //console.log("entry", entry);
            const id = entry.target.getAttribute("id"); //Utilizaremos el metodo target 
            console.log(id);

            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href = "#${id}"]`) //Elegir el selector de la respectiva seccion
                    .classList.add("active"); //Agregarle la clase active para que se vea el hover al hacer scroll
            } else {
                d.querySelector(`a[data-scroll-spy][href = "#${id}"]`)
                    .classList.remove("active");

            }
        });
    }

    //Mi observador
    const observer = new IntersectionObserver(cb, {
        //Propiedades
        //root (lo omitimos para que tome todo el documento; el html y no el body)
        //rootMargin: "-250px" //Reducir el area de interaccion (Para que no tome las dos secciones si quedan en pantalla al hacer scroll)
        //Se cambiara de seccion hasta que se vea la mitad de la seccion
        threshold: [0.5, 0.75] //Que se muestre solo si la seccion esta entre un 50 y 75 % de su contenido
    });
    //console.log("observer", observer);

    $sections.forEach((el) => observer.observe(el));
}