export function getSection(section) {
    return JSON.parse(localStorage.getItem(section))
}

export function saveSection(section, data) {
    localStorage.setItem(section, JSON.stringify(data))
}

export function exits(v, t) {
    if (t == null || t == undefined || t == []) {
        return false
    }

    return t.includes(v)
}

export function remove(v, t) {
    if (exits(v, t) == false) {
        return
    }
    
    const idx = t.indexOf(v)
    t.splice(idx, 1)

    return t
}

export function clearAll() {
    localStorage.clear()
}

export function clearSection(section) {
    localStorage.removeItem(section)
}

export function initSection(section) {
    console.log(`-- [ ${section} ] DATA INIT --`)

    let stringData = localStorage.getItem(section)

    // undefined STRING because its a STRING data...
    if (stringData == "undefined") {
        localStorage.setItem(section, JSON.stringify({}))
        return
    }

    const data = getSection(section)
    if (data == null || data == undefined || data == [] || data == {}) {
        localStorage.setItem(section, JSON.stringify({}))
        return
    }

    if (data.HAS_INIT) {
        return
    }
}