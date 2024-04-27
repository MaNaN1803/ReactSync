import React from 'react'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
        fontWeight: isActive ? "bold": "normal",
        textDecoration: isActive ? "none": "underline",
        color : isActive? "red" : "black"
        };};
  return (
    
    <div>
       <NavLink style={navLinkStyles} to={'/'}>Home</NavLink>
       <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>
       <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>
       <NavLink style={navLinkStyles} to={'/users'}>Users</NavLink>
       
      
    </div>
  )
}

export default Navbar
