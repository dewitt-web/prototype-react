import React from 'react'
import './List.css'

const List = ({children}) => (
  <div className="list">{children}</div>
) 

List.Item = ({children}) => (
  <div className="list__item">{children}</div>
)

export default List
