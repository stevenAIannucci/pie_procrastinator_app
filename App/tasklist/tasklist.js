/*make task list with inputs that match the number given from taskNumber*/
const taskNumber = 8
const tasklist = document.getElementById("tasklist")
if (taskNumber === 8) {
    let task1 = document.createElement("input")
    task1.setAttribute("type", "checkbox")
    task1.setAttribute("id", "task1")
    task1.setAttribute("name", "task1")
    tasklist.appendChild(task1)
}