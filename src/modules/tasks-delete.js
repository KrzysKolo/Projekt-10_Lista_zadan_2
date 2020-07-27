export default task => {
    
        let liToDelete = task.closest('li');
        task.closest('ul').removeChild(liToDelete);
    
  
}