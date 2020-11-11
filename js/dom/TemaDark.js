const d = document,
    $body = document.body,
    $html = document.documentElement;
export function temaDark(btn) {
    const $btnDark = d.querySelector(btn);
    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            d.body.classList.toggle("dark-mode");
            //console.log($btnDark);
            //console.log($btnDark.innerHTML);
            $btnDark.innerHTML == '🌙' ? $btnDark.innerHTML = '☀️' : $btnDark.innerHTML = '🌙';


            let bodyStyle = window.getComputedStyle($body, null),
                bgColor = bodyStyle.backgroundColor,
                fgColor = bodyStyle.color;

            console.log(bgColor, fgColor);

            localStorage.setItem('bgcolor', "#f7df1e");
            localStorage.setItem('fontColor', "#222");
            localStorage.clear();
            console.log(window.localStorage);

        }
    });




}