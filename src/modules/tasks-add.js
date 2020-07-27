let newTaskForm = document.querySelector('.new-task-container form');
import addNewTask from "./new-tasks";
export default () => {
    newTaskForm.addEventListener('submit', function(event){
        event.preventDefault();
        let title = document.querySelector('input');
        if(title.value !=='') {
        addNewTask(title.value);
        title.value = '';
        document.querySelector('h5').textContent = "";
        }
        else {
            document.querySelector('h5').textContent = "Uzupełnij pole";
        }
    });
}