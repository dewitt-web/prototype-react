import React, { useEffect, useState } from 'react'
import { BasePage, TodoList } from '../_shared'
import { fetchEffect } from '../../utils.js'

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  useEffect(
    fetchEffect({ url: TODO_URL }, setTodos), [TODO_URL]
  )

  return <BasePage>
    <TodoList todos={todos} />
  </BasePage>
}

export default TodoPage
