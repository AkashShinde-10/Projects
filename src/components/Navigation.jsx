import React from 'react'

const Navigation = () => {
  return (
    <nav className='nav container'>
      <div className='logo'>
        <img src="/Images/brand_logo.png" />
      </div>
      <ul>
        <li ><a href="#">MENU</a></li>
        <li ><a href="#">LOCATION</a></li>
        <li ><a href="#">ABOUT</a></li>
        <li ><a href="#">CONTACT</a></li>
      </ul>
      <button>Login</button>
    </nav>

  )
}

export default Navigation