import React from 'react'
import './Page.css'

const Page = ({ header, aside, children, footer }) => (
  <div className="page">
    {/* Optional header */ header && <div className="page__header">{header}</div>}
    {/* Optional aside */   aside && <div className="page__aside">{aside}</div>}
    <div className="page__body">{children}</div>
    {/* Optional footer */ footer && <div className="page__footer">{footer}</div>}
  </div>
)

const PageNav = ({ children }) => (
  <div className="page__nav">{children}</div>
)

Page.Nav = PageNav

export default Page
