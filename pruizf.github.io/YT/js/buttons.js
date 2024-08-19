import * as history from "./history.js"
import reload from "./video.js"

/* index.html */
function onLinkConfirmClick() {
    let results = reload(linkinput.value)

    if (results.SUCCES == true) {
        history.save(results.CODE)
    }
}

function onClearClick() {
    history.clear()
}

function onSearchClick() {
    open("https://www.google.com/search?sca_esv=77e9856747e8aa3f&sca_upv=1&sxsrf=ADLYWII0k14VLby-x4GQYsyI8JzOPiHDfQ:1724005649426&q=site:youtube.com/watch+abcde&tbm=vid&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTrdWqiVbaH6EqK0Fq9hkAkqKVRfj84cRZhjamCpjPYz8EgAmzy-s_VF4PIRG2yYxZAGnzcmRpbwzFNrt8qsZ0v-8UrA6J-Hvd6dmxjgs1d6XmgZaVHVxrsMOfsHDvgKVpd5JGkWS6Eyz1gKhbySFwKiZdpVkvY25fW1cQO2ctnxWq9GTWw&sa=X&ved=2ahUKEwjMp8zClf-HAxUDrpUCHWZzBcgQ0pQJegQIEBAB&biw=958&bih=945&dpr=1")
}

function onHelpClick() {
    open("./help", "_self")
}

/* Connections */
document.querySelector('#confirmbutton').addEventListener("click", onLinkConfirmClick)
document.querySelector('#history-deletebutton').addEventListener("click", onClearClick)
document.querySelector('#searchbutton').addEventListener("click", onSearchClick)
document.querySelector('#helpbutton').addEventListener("click", onHelpClick)