import reload from "./video.js"

export function getHistory() {
    return JSON.parse(localStorage.getItem("HISTORY"))
}


export function saveHistory(arrayHistory) {
    localStorage.setItem("HISTORY", JSON.stringify(arrayHistory))
}


export function reloadButtons() {
    document.getElementById('history-list').replaceChildren()

    let hist = getHistory().reverse()

    .forEach(element => {
        createButton(element)
   });
}


export function exits(value) {
    let hist = getHistory()

    if (hist == null || hist == undefined || hist == []) {
        return false
    }

    return hist.includes(value)
}


export function clear() {
    localStorage.clear()
    localStorage.setItem("HISTORY", JSON.stringify([]))

    reloadButtons()
}


export function save(value) {
    if (exits(value)) {
        return
    }

    let hist = getHistory()

    hist.unshift(value)
    saveHistory(hist)

    createButton(value)
}


export function remove(value) {
    if (exits(value) == false) {
        return
    }

    let hist  = getHistory()
    const idx = hist.indexOf(value)

    hist.splice(idx, 1)

    saveHistory(hist)
}


export function shiftUp(value) {
    if (exits(value) == false) {
        return
    }

    let hist  = getHistory()
    const idx = hist.indexOf(value)

    hist.splice(idx, 1)

    hist.push(value)

    saveHistory(hist)
}


export default function createButton(linkTo) {
    if (linkTo == null) {
        return
    }

    let historycontainer = document.getElementById("history-list")

    let button = document.createElement("input")
    button.classList = "input text image"
    button.id   = "historybutton"
    button.type = "image"
    button.alt  = linkTo
    button.src  = `https://img.youtube.com/vi/${linkTo}/maxresdefault.jpg`

    historycontainer.appendChild(button)

    button.onclick = function () {
        shiftUp(linkTo)
        reloadButtons()

        reload(linkTo)
    }

    button.oncontextmenu = function () {
        remove(linkTo)
        button.remove()
    }
}


function init() {
    const history = getHistory()

    if (history == null) {
        localStorage.setItem("HISTORY", JSON.stringify([]))
        console.log("-- LOCAL SESSION INIT COMPLETE --")
        return
    }

    reloadButtons()
    console.log("-- LOCAL SESSION INIT COMPLETE --")
}
init()
