import * as history from "./history.js"
import reload from "./video.js"

function onLinkConfirmClick() {
    let results = reload(linkinput.value)

    if (results.SUCCES == true) {
        history.save(results.CODE)
    }
}

function onClearClick() {
    history.clear()
}

document.querySelector('#confirmbutton').addEventListener("click", onLinkConfirmClick)
document.querySelector('#history-deletebutton').addEventListener("click", onClearClick)