import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Simple Design</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/"><Home /></Link>
                </li>
                <li>
                    <Link to="/sourcecode">Source Code</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
