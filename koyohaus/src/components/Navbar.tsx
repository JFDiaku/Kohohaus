import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="nav">
      <p className="logo">Kōyōhaus</p>

      <ul className="nav-left">
        <li className='nav-link'>
          <Link to={}>Products</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar