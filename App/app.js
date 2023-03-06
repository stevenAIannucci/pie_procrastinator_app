/*heading for title of app*/
let appTitle = document.createElement("h1")
let appTitleText = document.createTextNode("Procrastination Pie")
appTitle.appendChild(appTitleText)
/*div*/
let divContainer = document.getElementById("containerDiv")
divContainer.appendChild(appTitle)
/*div to display Project Name*/
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
/*line break to spread through code*/
let lineBreak = document.createElement("br")
function appendLineBreak(element) {
    element.appendChild(lineBreak.cloneNode()) 
}
/*div for tasklist*/
let tasklistDiv = document.createElement("div")
tasklistDiv.setAttribute("id", "tasklistDiv")
divContainer.appendChild(tasklistDiv)
/*h1 for Task List in tasklistDiv*/
let tasklisth1 = document.createElement("h1")
let tasklisth1Text = document.createTextNode("Task List")
tasklisth1.appendChild(tasklisth1Text)
tasklistDiv.appendChild(tasklisth1)
/*default text in the case of no tasks in tasklistDiv*/
let defaultTasklist = document.createElement("p")
let defaultTasklistText = document.createTextNode("There are no tasks that need to be done.")
defaultTasklist.appendChild(defaultTasklistText)
tasklistDiv.appendChild(defaultTasklist)
/*button to save input in tasklistDiv by the user*/
let saveTasklistButton = document.createElement("button")
saveTasklistButton.setAttribute("id", "saveTasklist")
saveTasklistButton.setAttribute("type", "button")
let saveTasklistButtonText = document.createTextNode("Save")
saveTasklistButton.appendChild(saveTasklistButtonText)
/*seperate tasklist and buttons used for testing*/
appendLineBreak(divContainer)
/*button to start new project*/
let newProjectButton = document.createElement("button")
newProjectButton.setAttribute("id", "newProject")
newProjectButton.setAttribute("type", "button")
let newProjectButtonText = document.createTextNode("New Project")
newProjectButton.appendChild(newProjectButtonText)
divContainer.appendChild(newProjectButton)
/*button to open and close task list*/
let tasklistButton = document.createElement("button")
tasklistButton.setAttribute("id", "tasklistButton")
tasklistButton.setAttribute("type", "button")
let tasklistButtonText = document.createTextNode("Open Task List")
tasklistButton.appendChild(tasklistButtonText)
divContainer.appendChild(tasklistButton)
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
/*function to open and close task list*/
function toggleTasklist() {
    let tasklist = document.getElementById("tasklistDiv")
    let tasklistButton = document.getElementById("tasklistButton")
    if (tasklist.style.visibility === "hidden") {
        tasklist.style.visibility = "visible"
        tasklistButton.textContent = "Close Task List"
    } else {
        tasklist.style.visibility = "hidden"
        tasklistButton.textContent = "Open Task List"
    }
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
/*set tasklist inputs depending on the taskn input*/
/*task1*/
let task1 = document.createElement("input")
task1.setAttribute("type", "text")
task1.setAttribute("id", "task1")
task1.setAttribute("name", "task1")
let task1Check = document.createElement("input")
task1Check.setAttribute("type", "checkbox")
task1Check.setAttribute("id", "task1Check")
task1Check.setAttribute("name", "task1Check")
/*task2*/
let task2 = document.createElement("input")
task2.setAttribute("type", "text")
task2.setAttribute("id", "task2")
task2.setAttribute("name", "task2")
let task2Check = document.createElement("input")
task2Check.setAttribute("type", "checkbox")
task2Check.setAttribute("id", "task2Check")
task2Check.setAttribute("name", "task2Check")
/*task3*/
let task3 = document.createElement("input")
task3.setAttribute("type", "text")
task3.setAttribute("id", "task3")
task3.setAttribute("name", "task3")
let task3Check = document.createElement("input")
task3Check.setAttribute("type", "checkbox")
task3Check.setAttribute("id", "task3Check")
task3Check.setAttribute("name", "task3Check")
/*task4*/
let task4 = document.createElement("input")
task4.setAttribute("type", "text")
task4.setAttribute("id", "task4")
task4.setAttribute("name", "task4")
let task4Check = document.createElement("input")
task4Check.setAttribute("type", "checkbox")
task4Check.setAttribute("id", "task4Check")
task4Check.setAttribute("name", "task4Check")
/*task5*/
let task5 = document.createElement("input")
task5.setAttribute("type", "text")
task5.setAttribute("id", "task5")
task5.setAttribute("name", "task5")
let task5Check = document.createElement("input")
task5Check.setAttribute("type", "checkbox")
task5Check.setAttribute("id", "task5Check")
task5Check.setAttribute("name", "task5Check")
/*task6*/
let task6 = document.createElement("input")
task6.setAttribute("type", "text")
task6.setAttribute("id", "task6")
task6.setAttribute("name", "task6")
let task6Check = document.createElement("input")
task6Check.setAttribute("type", "checkbox")
task6Check.setAttribute("id", "task6Check")
task6Check.setAttribute("name", "task6Check")
/*task7*/
let task7 = document.createElement("input")
task7.setAttribute("type", "text")
task7.setAttribute("id", "task7")
task7.setAttribute("name", "task7")
let task7Check = document.createElement("input")
task7Check.setAttribute("type", "checkbox")
task7Check.setAttribute("id", "task7Check")
task7Check.setAttribute("name", "task7Check")
/*task8*/
let task8 = document.createElement("input")
task8.setAttribute("type", "text")
task8.setAttribute("id", "task8")
task8.setAttribute("name", "task8")
let task8Check = document.createElement("input")
task8Check.setAttribute("type", "checkbox")
task8Check.setAttribute("id", "task8Check")
task8Check.setAttribute("name", "task8Check")
/*if statement determines how many tasks are appended to the tasklistDiv*/
if (taskNumber === 1) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 2) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(taskListDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 3) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 4) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task4)
    tasklistDiv.appendChild(task4Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 5) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task4)
    tasklistDiv.appendChild(task4Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task5)
    tasklistDiv.appendChild(task5Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 6) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task4)
    tasklistDiv.appendChild(task4Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task5)
    tasklistDiv.appendChild(task5Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task6)
    tasklistDiv.appendChild(task6Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 7) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task4)
    tasklistDiv.appendChild(task4Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task5)
    tasklistDiv.appendChild(task5Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task6)
    tasklistDiv.appendChild(task6Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task7)
    tasklistDiv.appendChild(task7Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
} else if (taskNumber === 8) {
    tasklistDiv.removeChild(defaultTasklist)
    tasklistDiv.appendChild(task1)
    tasklistDiv.appendChild(task1Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task2)
    tasklistDiv.appendChild(task2Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task3)
    tasklistDiv.appendChild(task3Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task4)
    tasklistDiv.appendChild(task4Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task5)
    tasklistDiv.appendChild(task5Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task6)
    tasklistDiv.appendChild(task6Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task7)
    tasklistDiv.appendChild(task7Check)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(task8)
    tasklistDiv.appendChild(task8Check)
    appendLineBreak(tasklistDiv)
    appendLineBreak(tasklistDiv)
    tasklistDiv.appendChild(saveTasklistButton)
}
appendLineBreak(tasklistDiv)
appendLineBreak(tasklistDiv)
/*when checkboxes are checked, they are removed from the tasklistDiv and a slice is added to the pie*/
function onTask1Checked () {
    if (task1Check.checked === true) {
        tasklistDiv.removeChild(task1);
        tasklistDiv.removeChild(task1Check)
        addSlice()
    }
}
function onTask2Checked () {
    if (task2Check.checked === true) {
        tasklistDiv.removeChild(task2);
        tasklistDiv.removeChild(task2Check)
        addSlice()
    }
}
/*initial function*/
function init() {
    /*prompt the user for a task name, numbers of tasks, and days until deadline*/
    let newProjectButton = document.getElementById("newProject")
    newProjectButton.addEventListener("click", openPop)
    /*opens and closes the tasklist*/
    let toggleTasklistButton = document.getElementById("tasklistButton")
    toggleTasklistButton.addEventListener("click", toggleTasklist)
    /*change event fires when task1Check is checked*/
    let task1Check = document.getElementById("task1Check")
    task1Check.addEventListener("change", onTask1Checked)
    /*change event fires when task2Check is checked*/
    let task2Check = document.getElementById("task2Check")
    task2Check.addEventListener("change", onTask2Checked)
    /*button clicks to add slices*/
    let addSliceButton = document.getElementById("addButton")
    addSliceButton.addEventListener("click", addSlice)
    /*button clicks to remove gems*/
    let removeGemButton = document.getElementById("removeButton")
    removeGemButton.addEventListener("click", removeGem)
}

window.addEventListener("load", init, false)