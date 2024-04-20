import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'
import React from 'react'
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-logo' >
        <img src='../../../../assets/images/logo.png'/>
      </div>
      <ul>
        <li>Store</li>
        <li>Mac</li>
        <li>iPhone</li>
        <li>Support</li>
      </ul>
      <div className='nav-icons' >
       <FontAwesomeIcon icon={faSearch} className='nav-icon' />
       <FontAwesomeIcon icon={faBagShopping} className='nav-icon' />
      </div>
    </div>
  )
}

export default Nav