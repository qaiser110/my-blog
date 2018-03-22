import React from 'react'
import Link from 'gatsby-link'

// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
// import './Navbar.sass'

const Navbar = () => (
  <header className="header">
    <Link to="/" className="logo">
      CSS Nav
    </Link>
    <input className="menu-btn" type="checkbox" id="menu-btn" value="off" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
    <ul className="menu">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/tags/">tags</Link>
      </li>
      <li>
        <Link to="/categories">categories</Link>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </header>
)

export default Navbar
