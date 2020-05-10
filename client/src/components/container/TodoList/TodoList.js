import React from 'react'
import List from '../../presentation/List/List'

const TodoList = ({todos}) => (
  <List>
    <ul>
      {todos.map(({title}, index) => (
        <li key={index}><List.Item>{title}</List.Item></li>
      ))}
    </ul>
  </List>
)

export default TodoList
