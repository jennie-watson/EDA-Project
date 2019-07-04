import React from 'react'

const Nav = () => {
  return (
  	<div className="nav">
      <nav className="navbar">
    <div className="navbar-toggle" id="js-navbar-toggle">
    	<i className="fas fa-bars"></i>
    </div>
      <a href="http://localhost:3000/#/">HOME</a>
      <a href="http://localhost:3000/#/personalfinance101">PERSONAL FINANCE 101</a>
      <a href="http://localhost:3000/#/investing">INVESTING</a>
      <a href="http://localhost:3000/#/resources">RESOURCES</a>
      <a href="http://localhost:3000/#/savingstips">SAVING TIPS</a>
      <a href="http://localhost:3000/#/contact">CONTACT</a>
      </nav>
    </div>
  )
}

export default Nav
