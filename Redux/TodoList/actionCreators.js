import { dotodo, removeTodo, addTodo, filterIncompletedTodos, filterCompletedTodos, filterAllTodos } from './actionTypes.js'

function addTodoAction(title) {
    return {
        type: addTodo,
        title
    }
}

function removeTodoAction(id) {
    return {
        type: removeTodo,
        id
    }
}

function doTodoAction(id) {
    return {
        type: dotodo,
        id
    }
}


export {
    addTodoAction,
    removeTodoAction,
    doTodoAction
}
