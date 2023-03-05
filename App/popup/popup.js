function cancelNewProject() {
    window.close();
}

function init() {
let cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click", cancelNewProject)
}

window.addEventListener("load", init, false);