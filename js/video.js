const prefix = 'https://www.youtube-nocookie.com/embed/'
const ytCodeSize = 11

let oldVideoFrame;

function getVideoCode(link) {
    const linklen = link.length
    let code = ""

    if (linklen < ytCodeSize) {
        return null
    }

    for (let idx = linklen - ytCodeSize; idx < linklen; idx++) {
        const currentLetter = link[idx]
        code += currentLetter        
    }

    if (!(code.length == ytCodeSize)) {
        return null
    }
    
    return code
}

export default function reload(src) {
    const videocontainer = document.getElementById("videocontainer")
    const code = getVideoCode(src)
    const link = prefix + code

    let success = true

    if (code == null) {
        success = false
        
        return {SUCCES: success, RAWLINK: src, CODE: code, LINK: link}
    }

    console.log(`-- LOADING VIDEO -- \n LINK: ${src} \n CODE: ${code} \n NEWLINK: ${link}`)
    
    if (!(oldVideoFrame == null )){
        oldVideoFrame.remove()
    }

    let videoFrame = document.createElement("iframe")
    videoFrame.allowFullscreen = true
    videoFrame.style = 'border: none; height: 100%; width: 100%; background-color: black;'
    videoFrame.src   = link
    
    videocontainer.appendChild(videoFrame)

    oldVideoFrame = videoFrame

    return {SUCCES: success, RAWLINK: src, CODE: code, LINK: link}
}
