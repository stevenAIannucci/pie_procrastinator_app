function cancelNewProject() {
    window.close()
}

function activatenewProject() {
    event.preventDefault()
    /*resets values when the ok button is clicked*/
    localStorage.removeItem("pnameOutput")
    /*validates and stores pname in localStorage*/
    let pnameInput = document.getElementById("pname").value
    const pnameErrorDiv = document.getElementById("pnameErrorDiv")
    pnameErrorDiv.style.color = "red"
    let pnameValidateError = document.getElementById("pnameError")
    if (!pnameValidateError) {
        pnameValidateError = document.createElement("p")
        pnameValidateError.setAttribute("id", "pnameError")
        const pnameValidateErrorText = document.createTextNode("*You can't leave this field blank.")
        pnameValidateError.appendChild(pnameValidateErrorText)
    }
    if (pnameInput === "") {
        if (!pnameErrorDiv.parentNode.contains(pnameValidateError)) {
            pnameErrorDiv.textContent = pnameValidateError.textContent
        }
        pname.style.borderColor = "red"
    } else {
        if (pnameErrorDiv.parentNode.contains(pnameValidateError)) {
            pnameErrorDiv.parentNode.removeChild(pnameValidateError)
        }
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