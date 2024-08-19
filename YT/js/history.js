import reload from "./video.js"
import * as data from "../../GLOBAL/data.js"

const sectionname = "HISTORY"

function getHistory() {
    return data.getSection(sectionname)
}

function saveHistory(newdata) {
    data.saveSection(sectionname, newdata)
}

function exits(value) {
    return data.exits(value, getHistory())
}

function remove(value) {
    data.remove(value, getHistory())
}

function reloadButtons() {
    document.getElementById('history-list').replaceChildren()

    getHistory()
     .reverse()
     .forEach(element => {
        createButton(element)
   });
}




function shiftUp(value) {
    if (exits(value) == false) {
        return
    }

    let hist  = getHistory()
    const idx = hist.indexOf(value)

    hist.splice(idx, 1)
    hist.push(value)

    saveHistory(hist)
}


export function clear() {
    localStorage.clear()
    localStorage.setItem("HISTORY", JSON.stringify([]))

    reloadButtons()
}


export function save(value) {
    let hist = getHistory()
    if (data.exits(value, hist)) {
        return
    }


    hist.unshift(value)
    saveHistory(hist)

    createButton(value)
}


export default function createButton(linkTo) {
    if (linkTo == null) {
        return
    }

    let historycontainer = document.getElementById("history-list")

    let button = document.createElement("input")
    button.classList = "input text"
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

data.initSection(sectionname)
reloadButtons()