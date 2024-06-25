import React from 'react';

const NavBar = () => {
    return(
      <nav className="navbar">
        <div className="navbar-brand">
            <a to="/">Simple Design</a>
        </div>

         <ul className="navbar-links">
            <li>
                <a to="/">Home</a>
            </li>
            <li>
                <a to="/sourcecode">Source Code</a>
            </li>
            <li> 
                <a to="/login">Login</a>
            </li>
            <li> 
                <a to="/signup">Signup</a>
            </li>

         </ul>
    </nav>
   );
};
export default NavBar;