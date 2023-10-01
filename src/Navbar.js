import React from 'react'
import {  NavLink } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
  <nav className='primary-nav  p-3 mb-2 bg-dark  font-weight-bold  '>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink  to='/product'>Product</NavLink>
    <NavLink  to='/users'> user</NavLink>
    <NavLink   className='nav-pr' to='/Profile'> Profile</NavLink>
    <NavLink  to='/pagination'> pagination</NavLink>
  </nav>
  )
}

export default Navbar
