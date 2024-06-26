import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(" You Successfully Logged In!", {email,password});
        setEmail('');
        setPassword('');
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
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    return(
        <div>
            <h1>LogIn</h1>
             <input
             type="email"
             placeholder="Enter email"
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

            <button onClick={handleLogin} style={buttonStyle}>Login</button>

            <p style={{marginTop: '10px'}}>
                Don't have an account? <Link to={"/signup"}>Signup</Link>
                </p>

                <Link to={"/forgot"}>Forgot Password?</Link>
        </div>


    );
};
export default Login;