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
    const data = getSection(section)

    if (data == null) {
        localStorage.setItem(section, JSON.stringify([HAS_INIT=true]))
        return
    }

    if (data.HAS_INIT) {
        return
    }

    console.log(`-- [ ${section} ] INIT COMPLETE --`)
}