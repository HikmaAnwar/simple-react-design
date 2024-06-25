const NavBar = () => {
    return(
      <nav className="navbar">
        <div className="navbar-brand">
            <link to="/">Simple Design</link>
        </div>

         <ul className="navbar-links">
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="/sourcecode">Source Code</link>
            </li>
            <li> 
                <link to="/login">Login</link>
            </li>
            <li> 
                <link to="/signup">Signup</link>
            </li>

         </ul>
    </nav>
   )
}
export default NavBar;