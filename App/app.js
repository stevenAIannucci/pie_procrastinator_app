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
defaultGem.setAttribute("id", "gems")
divContainer.appendChild(defaultGem)
/*button to start new project*/
let newProjectButton = document.createElement("button")
newProjectButton.setAttribute("id", "newProject")
newProjectButton.setAttribute("type", "button")
let newProjectButtonText = document.createTextNode("New Project")
newProjectButton.appendChild(newProjectButtonText)
divContainer.appendChild(newProjectButton)
/*button to open task list*/
let opentasklistButton = document.createElement("button")
opentasklistButton.setAttribute("id", "opentasklist")
opentasklistButton.setAttribute("type", "button")
let opentasklistButtonText = document.createTextNode("Open Task List")
opentasklistButton.appendChild(opentasklistButtonText)
divContainer.appendChild(opentasklistButton)
/*button to close task list*/
let closetasklistButton = document.createElement("button")
closetasklistButton.setAttribute("id", "closetasklist")
closetasklistButton.setAttribute("type", "button")
let closetasklistButtonText = document.createTextNode("Close Task List")
closetasklistButton.appendChild(closetasklistButtonText)
divContainer.appendChild(closetasklistButton)
/*button to add slice*/
let addSliceButton = document.createElement("button")
addSliceButton.setAttribute("id", "addButton")
addSliceButton.setAttribute("type", "button")
let addSliceButtonText = document.createTextNode("Add Slice")
addSliceButton.appendChild(addSliceButtonText)
divContainer.appendChild(addSliceButton)
/*button to remove gem*/
let removeGemButton = document.createElement("button")
removeGemButton.setAttribute("id", "removeButton")
removeGemButton.setAttribute("type", "button")
let removeGemButtonText = document.createTextNode("Remove Gem")
removeGemButton.appendChild(removeGemButtonText)
divContainer.appendChild(removeGemButton)
/*function to activate popup window*/
function openPop() {
    window.open("./popup/popup.html", "Popup", "width=400, height=300")
}
/*function to open task list*/
function openTasklist() {
    let tasklist = document.getElementById("tasklistDiv")
    tasklist.style.visibility = "visible"
}
/*function to close task list*/
function closeTasklist() {
    let tasklist = document.getElementById("tasklistDiv")
    tasklist.style.visibility = "hidden"
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
    /*if pie has 1 slice*/
    if (frameImg.src.endsWith("/assets/frames/odd/1/0.png")) {
        frameImg.src = "./assets/frames/odd/1/8.png"
    }
    /*if pie has 2 slices*/
    if (frameImg.src.endsWith("/assets/frames/even/2/0.png")) {
        frameImg.src = "./assets/frames/even/2/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/2/4.png")) {
        frameImg.src = "./assets/frames/even/2/8.png"
    }
    /*if pie has 3 slices*/
    if (frameImg.src.endsWith("/assets/frames/odd/3/0.png")) {
        frameImg.src = "./assets/frames/odd/3/3.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/3/3.png")) {
        frameImg.src = "./assets/frames/odd/3/5.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/3/5.png")) {
        frameImg.src = "./assets/frames/odd/3/8.png"
    }
    /*if pie has 4 slices*/
    if (frameImg.src.endsWith("/assets/frames/even/4/0.png")) {
        frameImg.src = "./assets/frames/even/4/2.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/4/2.png")) {
        frameImg.src = "./assets/frames/even/4/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/4/4.png")) {
        frameImg.src = "./assets/frames/even/4/6.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/4/6.png")) {
        frameImg.src = "./assets/frames/even/4/8.png"
    }
    /*if pie has 5 slices*/
    if (frameImg.src.endsWith("/assets/frames/odd/5/0.png")) {
        frameImg.src = "./assets/frames/odd/5/1.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/5/1.png")) {
        frameImg.src = "./assets/frames/odd/5/2.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/5/2.png")) {
        frameImg.src = "./assets/frames/odd/5/3.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/5/3.png")) {
        frameImg.src = "./assets/frames/odd/5/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/5/4.png")) {
        frameImg.src = "./assets/frames/odd/5/5.png"
    }
    /*if pie has 6 slices*/
    if (frameImg.src.endsWith("/assets/frames/even/6/0.png")) {
        frameImg.src = "./assets/frames/even/6/1.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/6/1.png")) {
        frameImg.src = "./assets/frames/even/6/2.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/6/2.png")) {
        frameImg.src = "./assets/frames/even/6/3.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/6/3.png")) {
        frameImg.src = "./assets/frames/even/6/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/6/4.png")) {
        frameImg.src = "./assets/frames/even/6/5.png"
    } else if (frameImg.src.endsWith("/assets/frames/even/6/5.png")) {
        frameImg.src = "./assets/frames/even/6/6.png"
    }
    /*if pie has 7 slices*/
    if (frameImg.src.endsWith("/assets/frames/odd/7/0.png")) {
        frameImg.src = "./assets/frames/odd/7/1.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/1.png")) {
        frameImg.src = "./assets/frames/odd/7/2.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/2.png")) {
        frameImg.src = "./assets/frames/odd/7/3.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/3.png")) {
        frameImg.src = "./assets/frames/odd/7/4.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/4.png")) {
        frameImg.src = "./assets/frames/odd/7/5.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/5.png")) {
        frameImg.src = "./assets/frames/odd/7/6.png"
    } else if (frameImg.src.endsWith("/assets/frames/odd/7/6.png")) {
        frameImg.src = "./assets/frames/odd/7/7.png"
    }
    /*if pie has 8 slices*/
    if (frameImg.src.endsWith("/assets/frames/even/8/0.png")) {
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
    }
}
/*set pie depending on the number input set by the user*/
const gemImg = document.getElementById("gems")
const daysnInput = parseInt(localStorage.getItem("daysNumber"))
const daysNumber = daysnInput
if (daysNumber === 1) {
    gemImg.src = "./assets/gems/odd/1/7_1.png"
} else if (daysNumber === 2) {
    gemImg.src = "./assets/gems/even/2/6_2.png"
} else if (daysNumber === 3) {
    gemImg.src = "./assets/gems/odd/3/7_3.png"
} else if (daysNumber === 4) {
    gemImg.src = "./assets/gems/even/4/6_4.png"
} else if (daysNumber === 5) {
    gemImg.src = "./assets/gems/odd/5/7_5.png"
} else if (daysNumber === 6) {
    gemImg.src = "./assets/gems/even/6/6_6.png"
} else if (daysNumber === 7) {
    gemImg.src = "./assets/gems/odd/7/7_7.png"
}
/*function to remove gem*/
function removeGem () {
    const gemImg = document.getElementById("gems")
    /*if starting frame holds 1 gem*/
    if (gemImg.src.endsWith("/assets/gems/odd/1/7_1.png")) {
        gemImg.src = "./assets/gems/odd/1/7_0.png"
    }
    /*if starting frame holds 2 gems*/
    if (gemImg.src.endsWith("/assets/gems/even/2/6_2.png")) {
        gemImg.src = "./assets/gems/even/2/6_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/2/6_1.png")) {
        gemImg.src = "./assets/gems/even/2/6_0.png"
    }
    /*if starting frame holds 3 gems*/
    if (gemImg.src.endsWith("/assets/gems/odd/3/7_3.png")) {
        gemImg.src = "./assets/gems/odd/3/7_2.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/3/7_2.png")) {
        gemImg.src = "./assets/gems/odd/3/7_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/3/7_1.png")) {
        gemImg.src = "./assets/gems/odd/3/7_0.png"
    }
    /*if starting frame holds 4 gems*/
    if (gemImg.src.endsWith("/assets/gems/even/4/6_4.png")) {
        gemImg.src = "./assets/gems/even/4/6_3.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/4/6_3.png")) {
        gemImg.src = "./assets/gems/even/4/6_2.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/4/6_2.png")) {
        gemImg.src = "./assets/gems/even/4/6_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/4/6_1.png")) {
        gemImg.src = "./assets/gems/even/4/6_0.png"
    }
    /*if starting frame holds 5 gems*/
    if (gemImg.src.endsWith("/assets/gems/odd/5/7_5.png")) {
        gemImg.src = "./assets/gems/odd/5/7_4.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/5/7_4.png")) {
        gemImg.src = "./assets/gems/odd/5/7_3.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/5/7_3.png")) {
        gemImg.src = "./assets/gems/odd/5/7_2.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/5/7_2.png")) {
        gemImg.src = "./assets/gems/odd/5/7_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/5/7_1.png")) {
        gemImg.src = "./assets/gems/odd/5/7_0.png"
    }
    /*if starting frame holds 6 gems*/
    if (gemImg.src.endsWith("/assets/gems/even/6/6_6.png")) {
        gemImg.src = "./assets/gems/even/6/6_5.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/6/6_5.png")) {
        gemImg.src = "./assets/gems/even/6/6_4.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/6/6_4.png")) {
        gemImg.src = "./assets/gems/even/6/6_3.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/6/6_3.png")) {
        gemImg.src = "./assets/gems/even/6/6_2.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/6/6_2.png")) {
        gemImg.src = "./assets/gems/even/6/6_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/even/6/6_1.png")) {
        gemImg.src = "./assets/gems/even/6/6_0.png"
    }
    /*if starting frame holds 7 gems*/
    if (gemImg.src.endsWith("/assets/gems/odd/7/7_7.png")) {
        gemImg.src = "./assets/gems/odd/7/7_6.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_6.png")) {
        gemImg.src = "./assets/gems/odd/7/7_5.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_5.png")) {
        gemImg.src = "./assets/gems/odd/7/7_4.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_4.png")) {
        gemImg.src = "./assets/gems/odd/7/7_3.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_3.png")) {
        gemImg.src = "./assets/gems/odd/7/7_2.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_2.png")) {
        gemImg.src = "./assets/gems/odd/7/7_1.png"
    } else if (gemImg.src.endsWith("/assets/gems/odd/7/7_1.png")) {
        gemImg.src = "./assets/gems/odd/7/7_0.png"
    }
}
/*initial function*/
function init() {
    /*prompt the user for a task name, numbers of tasks, and days until deadline*/
    let newProjectButton = document.getElementById("newProject")
    newProjectButton.addEventListener("click", openPop)
    /*opens the tasklist*/
    let openTasklistButton = document.getElementById("opentasklist")
    openTasklistButton.addEventListener("click", openTasklist)
    /*closes the tasklist*/
    let closeTasklistButton = document.getElementById("closetasklist")
    closeTasklistButton.addEventListener("click", closeTasklist)
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
    /*button clicks to remove gems*/
    let removeGemButton = document.getElementById("removeButton")
    removeGemButton.addEventListener("click", removeGem)
}

window.addEventListener("load", init, false)