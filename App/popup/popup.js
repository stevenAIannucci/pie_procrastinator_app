function cancelNewProject() {
    window.close();
}

function activatenewProject() {
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