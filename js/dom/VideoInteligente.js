const d = document,
    w = window;

export default function SmartVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video]");

    //Callback
    const cb = (entries) => {
        //console.log("entries", entries); //Las entries son las 15 sections

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            w.addEventListener("visibilityChange", (e) =>
                ValidityState === true ?
                entry.target.play() :
                entry.target.pause()
            );
        });
    }

    //Mi observador
    const observer = new IntersectionObserver(cb, { threshold: [0.80] });

    //Por cada video llamar al metodo observe desde el objeto observer
    $videos.forEach((el) => observer.observe(el));
}