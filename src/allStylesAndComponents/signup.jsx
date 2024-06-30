import { useState } from "react";
import { Link } from "react-router-dom";
import mySignupImage from "./login.jpg";
import styles from "./signup.module.css";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');

    const handleSignup = () => {
        console.log("signing up...", {username,email, password, confirmPassword});
        setUsername('');
        setEmail('');
        setPassword('');
        setComfirmPassword('');
    };

    
    return(
        <div className={styles.container}>

          <div className={styles.imageContainer}>
            <img src={mySignupImage} />          
            </div>

            <div className={styles.formContainer}>
            <h1 style={{margin:'auto', marginTop:'-50px',marginBottom:'50px', marginLeft:'200px', textDecoration:'underline'}}>Signup</h1>
            <input
            className={styles.inputusername}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            />

            <input
            className={styles.inputemail}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            />

            <input
            className={styles.inputpassword}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            />

            <input
            className={styles.inputconfirmpassword}
            type="password"
            placeholder="Confirm Password "
            value={password}
            onChange={(e) => setComfirmPassword(e.target.value)}
            
            />

            <button on className={styles.signupbutton} onClick={handleSignup} >Sign Up</button>

            <p style={{marginTop: '30px', marginLeft:'160px'}}>Already have an account?
             <Link to={"/login"} style={{marginLeft:'4px', textDecoration:'none', color:'seagreen'}}>Login</Link>
             </p>

        </div>
        </div>
    );
};
export default SignUp;