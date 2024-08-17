const prefix = 'https://www.youtube-nocookie.com/embed/'

let videobar;
let videoinput;
let oldVideoFrame;

window.onload = function() {
    videobar   = document.getElementById("videobar")
    videoinput = document.getElementById("videoinput")
}

function reloadiframe(newsrc) {
    if (!(oldVideoFrame == null )){
        videoFrame.remove()
    }

    videoFrame = document.createElement("iframe")
    videoFrame.allowFullscreen = true
    videoFrame.style = 'border: none; height: 90%; width: 100%; background-color: black;'
    videoFrame.src   = newsrc

    videobar.appendChild(videoFrame)

    oldVideoFrame = videoFrame
}

function getVideoCode(newsrc) {
    const srclen = newsrc.length
    let code = ""

    // 11 = size of yt video code
    for (let idx = srclen - 11; idx < srclen; idx++) {
        const currentLetter = newsrc[idx]
        code += currentLetter        
    }
    
    return code
}

function buttonClicked() {
    
    const newsrc = videoinput.value
    const code = getVideoCode(newsrc)

    reloadiframe(prefix + code)
}