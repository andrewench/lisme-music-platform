import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLink = ({to, title}) => {
  return (
    <Link to={to} className="App-Link Header-Link" draggable="false">{title}</Link>
  )
}

export default HeaderLink