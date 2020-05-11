import React from 'react'
import { NavLink } from 'react-router-dom'
import { Page } from '../'

// NOTE: Not intended to be used as a page route (in App.js) directly
const BasePage = ({ children, ...props }) => (
  <Page
    header={<>
      React Example App
      <Page.Nav>
        <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
          </ul>
        </nav>
      </Page.Nav>
    </>}
    {...props}
  >
    {children}
  </Page>
)

export default BasePage