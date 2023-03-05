function cancelNewProject() {
    window.close()
}

function activatenewProject() {
    event.preventDefault()
    /*resets values when the ok button is clicked*/
    localStorage.removeItem("outputHTML")
    /*stores pname in localStorage*/
    let pnameInput = document.getElementById("pname").value
    let pnameValidateError = document.createElement("p")
    pnameValidateError.setAttribute("class", "pnameError")
    const pnameValidateErrorText = document.createTextNode("You can't leave this field blank.")
    pnameValidateError.appendChild(pnameValidateErrorText)
    const pname = document.getElementById("pname")
    if (pnameInput === "") {
        pname.parentNode.appendChild(pnameValidateError)
    } else {
    let pnameOutput = document.createElement("div")
    pnameOutput.textContent = pnameInput
    localStorage.setItem("pnameOutput", pnameOutput.textContent)
    /*stores taskn in localStorage*/
    /*stores daysn in localStorage*/ 
    window.close()
    }
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