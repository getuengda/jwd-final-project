createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>${AssignedTo}: Nick</small>
            <small>${DueDate}: 20/09/2020</small>
        </div>
        <p>${description}</p>
    </li>
    <button type="button" class="btn btn-primary done-button">Mark As Done</button>
`}

class TaskManager {
  constructor(currentId = 0){
    this.tasks = []
    this.currentId = currentId;
}
  addTask () {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
    for (id = 0; id < currentId.length; id++){
    this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status = 'TODO')  )
    }
}
  render() {
    let tasksHtmlList = [];
    
    for(task = 0; task < tasksHtmlList.length; task++){
      if () {
        // new Date().toString().options[i].selected 
      task++;
        const date = new Date(dueDate);
        const formattedDate = date;
        const taskHtml = createTaskHtml(task, formattedDate);
        tasksHtmlList.push(taskHtml);
        
       let tasksHtml= tasksHtmlList.join(" \\n ")
       document.getElementById("iyaa").innerHTML = tasksHtml;
    }
    }
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
    for (id = 0; id < currentId.length; id++){
    this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status = 'TODO')  )
    }
}
};
const list = document.querySelector("#taskList");
taskList.addEventListener('click', (event) => { // "event" here is the event parameter
 if (list === "done-button"){
   
 }
});

tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);

        // Update the task status to 'DONE'
        task.status = 'DONE';

        // Render the tasks
        taskManager.render();
