import tasks from "./tasks";
import addNewTask from "./new-tasks";
export default () => {
    console.log("asdfgthjk");
    let tabTask = tasks();
    console.log(tabTask);
   tabTask.forEach(function(title){
        console.log(title);
        addNewTask(title);
    }); 
    // Toggle complete


}