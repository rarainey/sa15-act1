const data = {"florida": ["St. George Island, Florida", "I biennially visit St. George Island Florida during summer time. It has amazing beaches.", "images/fl.jpg"],
              "mississippi": ["Southaven, Mississippi", "I live in DeSoto County, MS. Biased, but I quite like it here.", "images/ms.jpg"],
              "dc": ["Washington D.C.", "I took a trip to D.C. one year in school. I do not get to see such cities and architecture often around here.", "images/dc.jpg"],
              "spacecenter": ["U.S. Space and Rocket Center", "I went to the space center on a class trip once. One of the coolest muesuems/places I've been to.", "images/spacecenter.jpg"],
              "disney": ["Disney World", "I went to Disney World one Spring Break. Crowded but fun.", "images/disney.jpg" ]};

var activePopup = null;
const xyRegex = /\d+\.\d+/

function getMarkerPosition(entry) {
    const entryStyle = getComputedStyle(entry);
    const y = entryStyle.top;
    const x = entryStyle.left.match(xyRegex)[0];    /* To strip "px" from string */
    return [String(Number(x) - 175) + "px", y];     /* Subtract 175 to shift popup left */
}

/* Function clears popup (on map click) */
function clearPopup() {
    if (activePopup != null) {
        activePopup.remove();
        activePopup = null;
    }
}

function details(location) {
    const entry = document.getElementById(location);

    /* Defining New Div */
    let popupDiv = document.createElement('div');
    popupDiv.id = `${location}popup`;
    popupDiv.className = "popup";

    const entryPos = getMarkerPosition(entry)
    const x = entryPos[0]
    const y = entryPos[1]
    popupDiv.style.top = y;
    popupDiv.style.left = x;

    /* Add Image to Popup */
    let popupImg = document.createElement('img')
    popupImg.src = data[location][2]
    popupDiv.appendChild(popupImg)

    /* Add Title to Popup */
    let popupTitle = document.createElement('h3');
    popupTitle.innerText = data[location][0];
    popupDiv.appendChild(popupTitle);

    /* Add Body Text to Popup */
    let popupBody = document.createElement('p'); 
    popupBody.innerText = data[location][1];
    popupDiv.appendChild(popupBody);

    /* Get rid of / reinstate active popup*/
    if (activePopup != null) {
        activePopup.remove()
    }
    activePopup = popupDiv;

    /* Add window resize listener so that popup boxes track position */
    window.addEventListener("resize", () => {
        const entryPos = getMarkerPosition(entry)
        const x = entryPos[0]
        const y = entryPos[1]

        popupDiv.style.top = y;
        popupDiv.style.left = x;
    })
    
    entry.parentNode.parentNode.appendChild(popupDiv);
}