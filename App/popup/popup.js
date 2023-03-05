function cancelNewProject() {
    window.close()
}

function activatenewProject() {
    event.preventDefault()
    let inputText = document.getElementById("pname").value
    let outputElement = document.createElement("div")
    outputElement.textContent = inputText
    localStorage.setItem("outputHTML", outputElement.outerHTML)
    window.close()
}

function init() {
/*cancel project and close window*/
let cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click", cancelNewProject)
/*activate new project and close window*/
let okButton = document.getElementById("ok")
okButton.addEventListener("click", activatenewProject)
}

window.addEventListener("load", init, false)