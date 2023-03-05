function cancelNewProject() {
    window.close();
}

function activatenewProject() {
    event.preventDefault()
    let pnameInput = document.getElementById("pname").value
    localStorage.setItem("pnameInput", pnameInput)
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

window.addEventListener("load", init, false);