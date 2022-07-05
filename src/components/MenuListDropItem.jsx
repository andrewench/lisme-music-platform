import React from 'react'

const MenuListDropItem = ({title}) => {
  return (
    <li className="Drop-Item">
      <button className="Drop-ItemBtn">{title}</button>
    </li>
  )
}

export default MenuListDropItem