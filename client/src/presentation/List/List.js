import React from 'react'
import './List.css'

const List = ({ heading, children }) => (
  <div className="list">
    {heading && <div className="list__heading">{heading}</div>}
    {children}
  </div>
)

const ListItem = ({ children }) => (
  <div className="list__item">{children}</div>
)

List.Item = ListItem

export default List
