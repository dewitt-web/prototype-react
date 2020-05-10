import React, { useEffect, useState } from 'react'
import TodoList from '../../components/container/TodoList/TodoList'
import fetchTodos from '../../fetchers/fetchTodos'


const TodoPage = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchTodos().then(setTodos)
  }, [])

  return <>
    <h1>Todos</h1>
    <TodoList todos={todos} />
  </>
}

export default TodoPage