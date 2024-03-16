import { dotodo, removeTodo, addTodo, filterIncompletedTodos, filterCompletedTodos, filterAllTodos } from '../Redux/TodoList/actionTypes.js'
import {
    addTodoAction,
    removeTodoAction,
    doTodoAction
} from '../Redux/TodoList/actionCreators.js'

window.removeTodoHandler = removeTodoHandler
window.completeHandler = completeHandler


const todoIputElm = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
// const removeTodoBtn = document.querySelector('.trash-btn')
// const completeBtn = document.querySelector('.complete-btn')



//? Create Reducer
const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case addTodo: {
            const newState = [...state];
            let newTodo = {
                id: crypto.randomUUID(),
                title: action.title,
                isComleted: false
            }

            return [...newState, newTodo]
        }
        case removeTodo: {
            const copyState = [...state]
            return copyState.filter((cs) => cs.id != action.id)
        }
        case dotodo: {
            const copyState = [...state]
            return copyState.map((s) => s.id == action.id ? { ...s, isComleted: !s.isComleted } : s)
        }
        case filterIncompletedTodos: { return }
        case filterCompletedTodos: { return }
        case filterAllTodos: { return }
        default: { return state }
    } 

}


//? Create Store
const todoStore = Redux.createStore(todoListReducer);

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    todoStore.dispatch(addTodoAction(todoIputElm.value.trim()))
    console.log(todoStore.getState());
    generateTodosInDom(todoStore.getState());

});




function removeTodoHandler(id) {
    todoStore.dispatch(removeTodoAction(id));
    generateTodosInDom(todoStore.getState())
}


function completeHandler(id) {
    todoStore.dispatch(doTodoAction(id));
    generateTodosInDom(todoStore.getState())

}

function generateTodosInDom(todos) {
    todoList.innerHTML = ""
    todos.forEach(todo => {
        todoList.insertAdjacentHTML("beforeend",
            `<div class="todo ${todo.isComleted && "completed"} " >
        <li class="todo-item" > ${todo.title}</li>
        <button class="complete-btn" onClick =completeHandler("${todo.id}")>
           <i class="fas fa-check-circle"></i>
        </button>
        <button class="trash-btn" onClick =removeTodoHandler("${todo.id}")>
          <i class="fas fa-trash"></i>
        </button>
       </div > 
    `);
    })
}



