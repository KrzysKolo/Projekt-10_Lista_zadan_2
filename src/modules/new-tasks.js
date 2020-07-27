import preparationTaskHTML from "./tasks-preparation";
import deleteTask from "./tasks-delete";
import  toggleTaskComplete  from "./tasks-toggle";
    
let tasksContainer = document.querySelector('.tasks-container ul');
export default title => {
    let li = document.createElement('li');
    li.classList.add("single-task");
    li.innerHTML = preparationTaskHTML(title);
    //Events - toggle and delete
    let toggleCompleteBtn = li.querySelector('.input-group');
    let deleteBtn = li.querySelector('.delete-task-btn');
    
    toggleCompleteBtn.addEventListener('click', function() {
         toggleTaskComplete(this);
    }); 
   deleteBtn.addEventListener('click', function() {
         deleteTask(this);
    }); 
    tasksContainer.appendChild(li);
}