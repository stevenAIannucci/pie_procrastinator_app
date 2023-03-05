const images = [
    "./assets/frames/even/8/0.png",
    "./assets/frames/even/8/1.png",
    "./assets/frames/even/8/2.png",
    "./assets/frames/even/8/3.png",
    "./assets/frames/even/8/4.png",
    "./assets/frames/even/8/5.png",
    "./assets/frames/even/8/6.png",
    "./assets/frames/even/8/7.png",
    "./assets/frames/even/8/8.png"
]
/*heading for title of app*/
let appTitle = document.createElement("h1")
let appTitleText = document.createTextNode("Procrastination Pie")
appTitle.appendChild(appTitleText)
/*div*/
let divContainer = document.getElementById("containerDiv")
divContainer.appendChild(appTitle)
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
/*button to add slice*/
let addSliceButton = document.createElement("button")
addSliceButton.setAttribute("id", "addButton")
addSliceButton.setAttribute("type", "button")
let addSliceButtonText = document.createTextNode("ADD")
addSliceButton.appendChild(addSliceButtonText)
divContainer.appendChild(addSliceButton)
/*function to add slice*/
function addSlice() {
    const frameImg = document.getElementById("frames")
    switch (frameImg.src) {
        case "./assets/frames/even/8/0.png":
            frameImg.Img.src = "./assets/frames/even/8/1.png"
            break
        case "./assets/frames/even/8/1.png":
            frameImg.src = "./assets/frames/even/8/2.png"
            break
        default:
            console.log("No more slices can be added")
    }
}
/*initial function*/
function init() {
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
}

window.addEventListener("load", init, false)