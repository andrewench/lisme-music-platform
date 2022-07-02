import React from 'react'

const HeaderLink = ({to, title}) => {
  return (
    <a href={to} className="App-Link Header-Link">{title}</a>
  )
}

export default HeaderLink