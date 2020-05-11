import React, { useEffect, useState } from 'react'
import { BasePage, TodoList } from '../_shared'
import fetchJSON from '../../fetchJSON.js'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchJSON('https://jsonplaceholder.typicode.com/todos').then(setTodos)
  }, [])

  return <BasePage>
    <TodoList todos={todos} />
  </BasePage>
}

export default TodoPage