/*heading for title of app*/
let appTitle = document.createElement("h1")
let appTitleText = document.createTextNode("Procrastination Pie")
appTitle.appendChild(appTitleText)
/*div*/
let divContainer = document.getElementById("containerDiv")
divContainer.appendChild(appTitle)
/*childDiv*/
let childDiv = document.createElement("div")
childDiv.setAttribute("id", "childDiv")
divContainer.appendChild(childDiv)
/*DOMContentLoaded*/
document.addEventListener("DOMContentLoaded", function(event) {
    let outputHTML = localStorage.getItem("pnameOutput")
    if (outputHTML !== null) {
        let outputElement = document.getElementById("childDiv")
        let outputTextNode = document.createTextNode(outputHTML)
        outputElement.appendChild(outputTextNode)
    }
})
/*default pie frame image*/
let defaultPie = document.createElement("img")
defaultPie.setAttribute("src", "./assets/frames/even/8/0.png")
defaultPie.setAttribute("id", "frames")
divContainer.appendChild(defaultPie)
/*default gem set image*/
let defaultGem = document.createElement("img")
defaultGem.setAttribute("src", "./assets/gems/odd/7/7_7.png")
defaultGem.setAttribute("class", "gems")
divContainer.appendChild(defaultGem)
/*button to start new project*/
let newProjectButton = document.createElement("button")
newProjectButton.setAttribute("id", "newProject")
newProjectButton.setAttribute("type", "button")
let newProjectButtonText = document.createTextNode("New Project")
newProjectButton.appendChild(newProjectButtonText)
divContainer.appendChild(newProjectButton)
/*button to add slice*/
let addSliceButton = document.createElement("button")
addSliceButton.setAttribute("id", "addButton")
addSliceButton.setAttribute("type", "button")
let addSliceButtonText = document.createTextNode("Add Slice")
addSliceButton.appendChild(addSliceButtonText)
divContainer.appendChild(addSliceButton)
/*function to activate popup window*/
function openPop() {
    window.open("./popup/popup.html", "Popup", "width=400, height=300")
}
/*set pie depending on the number input set by the user*/
const frameImg = document.getElementById("frames")
const tasknInput = parseInt(localStorage.getItem("taskNumber"))
const taskNumber = tasknInput
if (taskNumber === 1) {
    frameImg.src = "./assets/frames/odd/1/0.png"
} else if (taskNumber === 2) {
    frameImg.src = "./assets/frames/even/2/0.png"
} else if (taskNumber === 3) {
    frameImg.src = "./assets/frames/odd/3/0.png"
} else if (taskNumber === 4) {
    frameImg.src = "./assets/frames/even/4/0.png"
} else if (taskNumber === 5) {
    frameImg.src = "./assets/frames/odd/5/0.png"
} else if (taskNumber === 6) {
    frameImg.src = "./assets/frames/even/6/0.png"
} else if (taskNumber === 7) {
    frameImg.src = "./assets/frames/odd/7/0.png"
} else if (taskNumber === 8) {
    frameImg.src = "./assets/frames/even/8/0.png"
}
/*function to add slice*/
function addSlice() {
    const frameImg = document.getElementById("frames")
    if (frameImg.src.endsWith("/assets/frames/odd/1/0.png")) {
        frameImg.src = "./assets/frames/odd/1/8.png"
    }

    /*if (frameImg.src.endsWith("/assets/frames/even/8/0.png")) {
        frameImg.src = "./assets/frames/even/8/1.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/1.png")) {
        frameImg.src = "./assets/frames/even/8/2.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/2.png")) {
        frameImg.src = "./assets/frames/even/8/3.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/3.png")) {
        frameImg.src = "./assets/frames/even/8/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/4.png")) {
        frameImg.src = "./assets/frames/even/8/5.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/5.png")) {
        frameImg.src = "./assets/frames/even/8/6.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/6.png")) {
        frameImg.src = "./assets/frames/even/8/7.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/8/7.png")) {
        frameImg.src = "./assets/frames/even/8/8.png"
    } else {
        console.log("No more slices")
    }*/
}
/*initial function*/
function init() {
    /*prompt the user for a task name, numbers of tasks, and days until deadline*/
    let newProjectButton = document.getElementById("newProject")
    newProjectButton.addEventListener("click", openPop)
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
}

window.addEventListener("load", init, false)