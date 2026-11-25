const todoform =document.getElementById("todo-form");
const inputtask = document.getElementById("task-input");
const tasklist = document.getElementById("task-list");

function addtask(event){
    event.preventDefault();
    const tasktext= inputtask.value.trim();
    if(tasktext === ""){
        return;
    }
    const li =document.createElement("li");
    li.textContent = tasktext;
    const deletebtn =document.createElement("button");
    deletebtn.textContent="delete";
    deletebtn.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(deletebtn);
    tasklist.appendChild(li);
    inputtask.value="";
}
todoform.addEventListener("submit",addtask);
