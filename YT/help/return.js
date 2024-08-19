function onReturnClick() {
    open("./", "_self")
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#returnbutton')
    .addEventListener("click", onReturnClick)
})