// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    
    addTask();
    render();
    
      // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}

function validFormFieldInput(data){
    const newTaskNameInput = document.querySelector('#Task');
    const taskname = newTaskNameInput.value;
    console.log("name:  "+ taskname);
    
    const newDescriptionInput = document.querySelector('#Description');
    const description = newDescriptionInput.value;
    console.log("name:  "+description);
    
    const newDueDateInput = document.querySelector('#Due');
    const duedate = newDueDateInput.value;
    console.log("name:  "+newDueDateInput);
    
    const newAssignementInput = document.querySelector('#Assign');
    const assignement = newAssignementInput.value;
    console.log("name:  "+assignement);
    
    const newStatusInput = document.querySelector('#Status');
    const status = newStatusInput.value;
    console.log("name:  "+status);

    if (!data){
    const validInput = document.querySelector('#alert');
    const status = validInput.value;
    console.log("Warning:  "+validInput);

    }
}
function validFormFieldInput() {
    var x = document.getElementById("alert");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
