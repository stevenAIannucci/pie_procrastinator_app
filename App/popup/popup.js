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
        let tasknInput = document.getElementById("taskn").value
        const tasknErrorDiv = document.getElementById("tasknErrorDiv")
        tasknErrorDiv.style.color = "red"
        let tasknValidateError = document.getElementById("tasknError")
        if (!tasknValidateError) {
            tasknValidateError = document.createElement("p")
            tasknValidateError.setAttribute("id", "tasknError")
            const tasknValidateErrorText = document.createTextNode("*You must enter a value between 1-8.")
            tasknValidateError.appendChild(tasknValidateErrorText)
        }
        if (tasknInput <= 0 || tasknInput >= 9) {
            if (!tasknErrorDiv.parentNode.contains(tasknValidateError)) {
                tasknErrorDiv.textContent = tasknValidateError.textContent
            }
            taskn.style.borderColor = "red"
            } else {
                if (tasknErrorDiv.parentNode.contains(tasknValidateError)) {
                    tasknErrorDiv.parentNode.removeChild(tasknValidateError)
                }
                localStorage.setItem("taskNumber", tasknInput)
                /*stores daysn in localStorage*/
                let daysnInput = document.getElementById("daysn").value
                const daysnErrorDiv = document.getElementById("daysnErrorDiv")
                daysnErrorDiv.style.color = "red"
                let daysnValidateError = document.getElementById("daysnError")
                if (!daysnValidateError) {
                    daysnValidateError = document.createElement("p")
                    daysnValidateError.setAttribute("id", "daysnError")
                    const daysnValidateErrorText = document.createTextNode("*You must enter a value between 1-7.")
                    daysnValidateError.appendChild(daysnValidateErrorText)
                }
                if (daysnInput <= 0 || daysnInput >= 8) {
                    if (!daysnErrorDiv.parentNode.contains(daysnValidateError)) {
                    daysnErrorDiv.textContent = daysnValidateError.textContent
                }
                daysn.style.borderColor = "red"
                } else {
                    if (daysnErrorDiv.parentNode.contains(daysnValidateError)) {
                    daysnErrorDiv.parentNode.removeChild(daysnValidateError)
                    }
                localStorage.setItem("daysNumber", daysnInput)
                window.close()
            }
        }
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