function cancelNewProject() {
    window.close
}

let cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click", cancelNewProject)