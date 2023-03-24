// model 
let todo;
const savedItem = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedItem)) {
    todo = savedItem;
} else {
    todo = [{
        title: 'Kumain',
        due: '2023-03-24',
        id: 'id1'
    }, {
        title: 'Maligo',
        due: '2023-03-24',
        id: 'id2'
    }, {
        title: 'Matulog',
        due: '2023-03-25',
        id: 'id3'
    }];
}

// create todo
const createTodo = (userInput, userDate) => {
    const randomId = new Date().getTime();

    todo.push({
        title: userInput,
        due: userDate,
        id: randomId
    });

    save();
};

// Delete
const deleteTodo = (delBtnId) => {
    todo = todo.filter(function (todoFilter) {
        if(todoFilter.id == delBtnId) {
            return false;
        } else {
            return true;
        }
    })
    save();
};

// control
const clickTodo = () => {
    const user = document.getElementById('todoInput');
    const userInput = user.value;

    const date = document.getElementById('date');
    const userDate = date.value;
    
    createTodo(userInput, userDate);
    render();
}; 

const deleteFunc = (event) => {
    const delBtn = event.target; 
    const delBtnId = delBtn.id;

    
    deleteTodo(delBtnId);
    render();
};

const save = () => {
   localStorage.setItem('todos', JSON.stringify(todo));
};

// view

const render = () => {
    document.getElementById('todo-list').innerHTML = "";

    todo.forEach((todoLoop) => {
        const div = document.createElement('div');
        div.innerText = todoLoop.due + " " + todoLoop.title;
        const todoList = document.getElementById('todo-list');

        const del = document.createElement('button');
        del.innerText = 'Delete';
        del.id = todoLoop.id;
        del.onclick = deleteFunc;
        div.appendChild(del);

        todoList.appendChild(div);
    });
};

render();


