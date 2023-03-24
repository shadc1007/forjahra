
// model
let todo;
const savedItem = JSON.parse(localStorage.getItem('todo'));
if(Array.isArray(savedItem)) {
    todo = savedItem;
} else {
    todo = [{
        title: 'Kumain na',
        dueDate: '2023-03-24',
        id: 'id1'
    }, {
        title: 'Bumangon na',
        dueDate: '2023-03-24',
        id: 'id2'
    }, {
        title: 'Matulog',
        dueDate: '2023-03-24',
        id: 'id3'
    }];
}



render();

// creates a todo
function createTodo(userInput, dueDate) {
    const randomId = new Date().getTime();

    todo.push({
        title: userInput,
        dueDate: dueDate,
        id: randomId
    });
    save();
};
//deletes a todo
function removeTodo(idToDelete) {
    todo = todo.filter(function (todoDelete) {
        // if the id matches idToDelete, return false
        // return true
        if (todoDelete.id == idToDelete) {
           return false;
        } else {
           return true;
        }
   });
   save();
};

// save and retrieve
const save = () => {
    localStorage.setItem('todo', JSON.stringify(todo));
};

// controller

const clickTodo = () => {
    const user = document.getElementById('todoTite');
    const userInput = user.value;

    const due = document.getElementById('date');
    const dueDate = due.value;

    createTodo(userInput, dueDate); 
    render();
};

function deleteButton(event) {
    const delBtn = event.target;
    const idToDelete = delBtn.id;

    removeTodo(idToDelete);
    render();
};

// view

function render() {
    const reset = document.getElementById('todo-list').innerHTML = '';

    todo.forEach((todoLoop) => {
        const div = document.createElement('div');
        div.innerText = todoLoop.dueDate + " " + todoLoop.title;

        const del = document.createElement('button');
        del.innerText = 'Delete';
        del.id = todoLoop.id;
        del.onclick = deleteButton;  
        div.appendChild(del);


        const todoList = document.getElementById('todo-list');
        todoList.appendChild(div);
    });
};