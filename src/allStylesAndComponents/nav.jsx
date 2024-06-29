import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <div className={styles.navbar-brand}>
                <Link to="/">Simple Design</Link>
            </div>
            <ul className={styles.navbar-links}>
                <li>
                    <Link to="/">Home</Link>
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
