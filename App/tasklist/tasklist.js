/*make task list with inputs that match the number given from taskNumber*/
const taskNumber = 8
const tasklist = document.getElementById("tasklist")
if (taskNumber === 8) {
    let task1 = document.createElement("input")
    task1.setAttribute("type", "checkbox")
    task1.setAttribute("id", "task1")
    task1.setAttribute("name", "task1")
    tasklist.appendChild(task1)
    let task1Input = document.createElement("input")
    task1Input.setAttribute("type", "text")
    task1Input.setAttribute("id", "task1Input")
    task1Input.setAttribute("name", "task1Input")
    tasklist.appendChild(task1Input)
}