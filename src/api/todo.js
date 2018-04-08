import config from '../config'
import axios from 'axios'
import adapter from './adapter'
import {dataVerify} from './utils'

const instance = axios.create({
  adapter: adapter,
  baseURL: config.baseUrl,
  timeout: 20000
})

const item = '/item'
export const getTodoList = () => instance.get(
  item
).then(dataVerify)

export const addTodo = options => instance.post(
  item,
  options
).then(dataVerify)

export const deleteTodo = options => instance.delete(
  `${item}/${options.id}`
).then(dataVerify)

export const updateTodo = options => instance.put(
  `${item}/${options.id}`,
  options
).then(dataVerify)


