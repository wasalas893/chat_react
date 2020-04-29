import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

 const Navbar = () => {
    return (

      
        <nav className="navbar bg-dark">
      <h1>
        <Link to='#'>Chat App</Link>
      </h1>
      <ul>
        
        <li><Link to="/dashboard">Chatboard</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
    );
}
export default Navbar;
