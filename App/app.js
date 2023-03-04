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

let addSliceButton = document.createElement("button")
divContainer.appendChild(addSliceButton)