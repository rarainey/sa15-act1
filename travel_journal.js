const data = {"florida": ["St. George Island, Florida", "I biennially visit St. George Island Florida during summer time. It has amazing beaches."],
              "mississippi": ["Southaven, Mississippi", "I live in DeSoto County, MS. Biased, but I quite like it here."],
              "dc": ["Washington D.C.", "I took a trip to D.C. one year in school. I do not get to see such cities and architecture often around here."],
              "spacecenter": ["U.S. Space and Rocket Center", "I went to the space center on a class trip once. One of the coolest muesuems/places I've been to."],
              "disney": ["Disney World", "I went to Disney World one Spring Break. Crowded but fun."]};

var activePopup = null;

function clearPopup() {
    if (activePopup != null) {
        activePopup.remove();
        activePopup = null;
    }
}

function details(location) {
    const entry = document.getElementById(location);
    const entryStyle = getComputedStyle(entry);
    const y = entryStyle.top;
    const x = entryStyle.left;

    /* Defining New Div */
    let popupDiv = document.createElement('div');
    popupDiv.id = `${location}popup`;
    popupDiv.className = "popup";
    popupDiv.style.top = y;
    popupDiv.style.left = x;

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
        const entryStyle = getComputedStyle(entry);
        const y = entryStyle.top;
        const x = entryStyle.left;

        popupDiv.style.top = y;
        popupDiv.style.left = x;
    })
    
    entry.parentNode.parentNode.appendChild(popupDiv);
}