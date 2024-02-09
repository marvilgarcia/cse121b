// events.js
let tasks = [];

function renderTasks(tasks) {
    // get the list element from the DOM
    const listElements = document.querySelector("#todoList");
    // make sure it is empty
    listElements.innerHTML = "";
    // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
    tasks.forEach(task => {
        listElements.innerHTML +=
        `<li ${task.completed ? 'class="strike"' : ""}>
            <p>${task.detail}</p>
            <div>
                <span data-function="delete">❎</span>
                <span data-function="complete">✅</span>
            </div>
        </li>`;
        
    }); 
}

function newTask() {
    // get the value entered into the #todo input
    const inputElement = document.querySelector("#todo").value;


    // add it to our arrays tasks
    tasks.push({ detail: inputElement, completed: false });
    // render out the list.
    renderTasks(tasks);

}

function removeTask(taskElement) {
    // note the use of Array.filter to remove the element from our task array
    tasks = tasks.filter(
        (task) => task.detail != taskElement.childNodes[0].innerText
    );
    // this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    const taskDetail = taskElement.querySelector("p").textContent;
    const taskIndex = tasks.findIndex(task => task.detail === taskDetail);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        taskElement.classList.toggle("strike");
        console.log(tasks);
    } else {
        console.error("Task not found");
    }
}


function manageTasks(e) {
    // did they click the delete or complete icon?
    
    console.log(e.target);
    // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

    const parent = e.target.closest("li");

    // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
    // use that in a couple of if statements to decide whether to run removeTask or completeTask
    if (e.target.dataset.function === "delete") {
      removeTask(parent);
    }
    if (e.target.dataset.function === "complete") {
      completeTask(parent);
    }
  }
  // we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
  
  document.querySelector("#submitTask").addEventListener("click", newTask);
  document.querySelector("#todoList").addEventListener("click", manageTasks);
  
  renderTasks(tasks);