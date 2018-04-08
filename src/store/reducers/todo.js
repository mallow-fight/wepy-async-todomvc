import wepy from 'wepy'
import {
  handleActions
} from 'redux-actions'
import {
  ASYNC_GET_TODO_LIST,
  ASYNC_UPDATE_TODO,
  ASYNC_ADD_TODO,
  ASYNC_DELETE_TODO
} from '../types/index'

function cutTodoList(preTodos, id) {
  const nextTodos = []
  ;preTodos.map(todo => {
    if (todo.id !== id) {
        nextTodos.push(todo)
    }
  })
  return nextTodos
}
export default handleActions({
  [ASYNC_GET_TODO_LIST](state, action) {
    console.log('ASYNC_GET_TODO_LIST', action)
    return {
      ...state,
      todos: action.payload.data.reverse()
    }
  },
  [ASYNC_ADD_TODO](state, action) {
    console.log('ASYNC_ADD_TODO', action)
    const newTodo = action.payload.data
    state.todos.unshift(newTodo)
    return {
      ...state,
      todos: state.todos
    }
  },
  [ASYNC_UPDATE_TODO](state, action) {
    console.log('ASYNC_UPDATE_TODO', action)
    const updatedTodo = action.payload.data
    const id = updatedTodo.id
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) return updatedTodo
        return todo
      })
    }
  },
  [ASYNC_DELETE_TODO](state, action) {
    console.log('ASYNC_DELETE_TODO', action)
    return {
      ...state,
      todos: cutTodoList(state.todos, action.payload.data.id)
    }
  }
}, {
  todos: []
})
