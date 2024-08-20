import * as data from "./data.js"

export function get(path) {
    const config = data.getSection("CONFIG")

    return config[path]
}

export function set(path, value) {
    const config = data.getSection("CONFIG")
    
    config[path] = value

    data.saveSection("CONFIG", config)
}

export function reset(path) {
    const config = data.getSection("CONFIG")

    config[path] = null

    data.saveSection("CONFIG", config)
}

export function resetAll() {
    data.clearSection("CONFIG")
}

data.initSection("CONFIG")




export function buildUIonElement(element) {
    
}