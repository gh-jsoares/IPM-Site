const BASE_ICON     = 'icon'
const CLOSE_ICON    = 'icon-up-open'
const OPEN_ICON     = 'icon-down-open'

function toggleSiblingVisible(elem) {
    toggleIconChange(icon(elem))
    toggleVisible(sibling(elem))
}

function toggleVisible(elem) {
    elem.classList.toggle('hidden')
}

function toggleIconChange(elem) {
    if (elem === null) return
    const classes = elem.classList
    if (classes.contains(CLOSE_ICON)) {
        classes.remove(CLOSE_ICON)
        classes.add(OPEN_ICON)
    } else {
        classes.remove(OPEN_ICON)
        classes.add(CLOSE_ICON)
    }
}


/**
 * nextSibling return a text element in firefox. This
 * function returns the nextSibling without having to
 * worry about browser compatibility.
 */
function sibling(elem) {
    do {
        elem = elem.nextSibling
    } while (elem && elem.nodeType !== 1)
    return elem
}

/**
 * Returns the icon of the title. This icon represents
 * if the tab pane is open or not.
 */
function icon(elem) {
    elem = elem.getElementsByTagName('i')
    elem = elem.length ? elem[0] : null
    return elem
}

Array.from(document.getElementsByClassName('section-title')).forEach(element => {
    element.addEventListener('click', () => {
        toggleSiblingVisible(element)
    })
})

window.onload = () => {
    Array.from(document.getElementsByClassName('icon')).forEach(element => {
        const classes = element.classList
        classes.remove(BASE_ICON)
        classes.add(CLOSE_ICON)
    })
}