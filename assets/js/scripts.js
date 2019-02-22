function toggleSiblingVisible(elem) {
    toggleVisible(sibling(elem))
}

function toggleVisible(elem) {
    elem.classList.toggle('hidden')
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

Array.forEach(document.getElementsByClassName('section-title'), element => {
    element.addEventListener('click', () => {
        toggleSiblingVisible(element)
    })
})