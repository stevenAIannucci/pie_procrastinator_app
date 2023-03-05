/*heading for title of app*/
let appTitle = document.createElement("h1")
let appTitleText = document.createTextNode("Procrastination Pie")
appTitle.appendChild(appTitleText)
/*div*/
let divContainer = document.getElementById("containerDiv")
divContainer.appendChild(appTitle)
/*default pie frame image*/
let defaultPie = document.createElement("img")
defaultPie.setAttribute("src", "./assets/frames/odd/1/0.png")
defaultPie.setAttribute("width", "500px")
defaultPie.setAttribute("height", "500px")
divContainer.appendChild(defaultPie)
/*default gem set image*/
let defaultGem = document.createElement("img")
defaultGem.setAttribute("src", "./assets/gems/odd/7/7_7.png")
divContainer.appendChild(defaultGem)
/*button to add slice*/
let addSliceButton = document.createElement("button")
addSliceButton.setAttribute("id", "addButton")
addSliceButton.setAttribute("type", "button")
let addSliceButtonText = document.createTextNode("ADD")
addSliceButton.appendChild(addSliceButtonText)
divContainer.appendChild(addSliceButton)
/*function to add slice*/
function addSlice() {
    console.log("Added slice")
}
/*initial function*/
function init() {
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
}

window.addEventListener("load", init, false)