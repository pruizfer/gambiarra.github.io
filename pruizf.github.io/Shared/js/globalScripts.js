import * as cfg from "../../Shared/js/config.js"
// Scripts that serve specific functions

// ------------- //
// RETURN BUTTON //
// ------------- //

const connectReturnButton = function(btn) {
    btn.onclick = function () {
        window.open(btn.dataset.path, "_self")
    }
}

// ------------ //
// THEME CONFIG //
// ------------ //

const loadTheme = function(body) {
    // Current themes:
    // OLED DARK LIGHT

    let currTheme = cfg.get("THEME")
    if (currTheme == null || currTheme == undefined || currTheme == "undefined" || currTheme == []) {
        cfg.set("THEME", "OLED")
        currTheme = "OLED"
    }

    body.classList = currTheme + "_THEME"
}

// ------------ //
// LOADED EVENT //
// ------------ //

const forEveryElementIn = function(element, fn) {
    (document.querySelectorAll(element)).forEach(element => {
        fn(element)
    })
}

document.addEventListener("DOMContentLoaded", function () {

    forEveryElementIn(".returnbutton", connectReturnButton)
    forEveryElementIn("body", loadTheme)
    forEveryElementIn(".configScreen", cfg.buildUIonElement)
})