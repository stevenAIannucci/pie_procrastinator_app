let appTitle = document.createElement("h1")
let appTitleText = document.createTextNode("Procrastination Pie")
appTitle.appendChild(appTitleText)

let divContainer = document.getElementById("containerDiv")
divContainer.appendChild(appTitle)

let defaultPie = document.createElement("img")
defaultPie.setAttribute("src", "./assets/0.png")
defaultPie.setAttribute("width", "500px")
defaultPie.setAttribute("height", "500px")
divContainer.appendChild(defaultPie)

let lineBreak = document.createElement("br")
divContainer.appendChild(lineBreak)

let addSliceButton = document.createElement("button")
addSliceButton.setAttribute("id", "addButton")
addSliceButton.setAttribute("type", "button")
let addSliceButtonText = document.createTextNode("ADD")
addSliceButton.appendChild(addSliceButtonText)
divContainer.appendChild(addSliceButton)

function addSlice() {
    console.log("Added slice")
}

function init() {
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
}

window.addEventListener("load", init, false)