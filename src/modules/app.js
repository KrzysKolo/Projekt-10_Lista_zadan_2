let newTaskForm = document.querySelector('.new-task-container form');

import showTasks from "./tasks-list";
import bindAddTaskEvents from "./tasks-add";
export default () => {
bindAddTaskEvents();
showTasks();
console.log("koniec");
}