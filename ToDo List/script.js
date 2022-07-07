// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event)
{
    // prevent form from submitting
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // CHECH MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    // CHECH TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // APPEND TO TODOLIST
    todoList.appendChild(todoDiv);

    // CLEAR INPUT VALUE
    todoInput.value = "";
}

// DELETE & CHECK
function deleteCheck(e)
{
    const item = e.target;
    const todo = item.parentElement;
    // DELETE ITEM   
    if(item.classList[0] === "trash-btn")
    {
        // ANIMATION
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => todo.remove());
    }

    // CHECK MARK
    if(item.classList[0] === "complete-btn")
    {
        todo.classList.toggle("completed");
    }
}

//  FILTER
function filterTodo(e)
{
    var todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value)
        {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }else
                {
                    todo.style.display = "none";
                }
        }
    });
}

