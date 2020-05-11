import React from 'react'
import { List } from '../'

const TodoList = ({ todos }) => (
  <List heading={<h1>Todos</h1>}>
    <ul>
      {todos.map(({ title }, index) => (
        <li key={index}><List.Item>{title}</List.Item></li>
      ))}
    </ul>
  </List>
)

export default TodoList
