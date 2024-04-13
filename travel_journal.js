function details(location) {
    const entry = document.getElementById(location)
    const entryStyle = getComputedStyle(entry)
    const y = entryStyle.top
    const x = entryStyle.left

    let popupDiv = document.createElement('div')
    popupDiv.className = "popup"
    popupDiv.innerText = "test"
    popupDiv.style.top = y
    popupDiv.style.left = x
    entry.parentNode.appendChild(popupDiv)
}