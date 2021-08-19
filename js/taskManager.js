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



