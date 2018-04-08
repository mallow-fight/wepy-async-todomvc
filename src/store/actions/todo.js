// https://www.npmjs.com/package/redux-actions
import {
  createAction
} from 'redux-actions'
import {
  ASYNC_GET_TODO_LIST,
  ASYNC_ADD_TODO,
  ASYNC_UPDATE_TODO,
  ASYNC_DELETE_TODO
} from '../types/todo'
import {
  getTodoList,
  deleteTodo,
  addTodo,
  updateTodo
} from '../../api/todo'
export const asyncGetTodoList = createAction(ASYNC_GET_TODO_LIST, () => {
  return getTodoList()
})
export const asyncDeleteTodo = createAction(ASYNC_DELETE_TODO, (options) => {
  return deleteTodo(options)
})
export const asyncAddTodo = createAction(ASYNC_ADD_TODO, (options) => {
  return addTodo(options)
})
export const asyncUpdateTodo = createAction(ASYNC_UPDATE_TODO, (options) => {
  return updateTodo(options)
})
