import { useState } from "react";
import { Link } from "react-router-dom";

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

    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '50%'
      };

      const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'pink',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      };


    return(
        <div>
            <h1>Sign up</h1>
            <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            />

            <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            />

            <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            />

            <input
            type="password"
            placeholder="Confirm Password "
            value={password}
            onChange={(e) => setComfirmPassword(e.target.value)}
            style={inputStyle}
            />

            <button on onClick={handleSignup} style={buttonStyle}>Sign Up</button>

            <p style={{marginTop: '10px'}}>Already have an account?
             <Link to={"/login"}>Login</Link>
             </p>

        </div>
    );
};
export default SignUp;