import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement('#root'); 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [emailError, setEmailError] = useState(false); 

    const handleLogin = () => {
        console.log("You Successfully Logged In!", { email, password });
        setEmail('');
        setPassword('');
    };

    const handleSendEmail = () => {
        if (!forgotEmail) {
            setEmailError(true); 
        } else {
            console.log("Forgot password email sent to:", forgotEmail);
            setEmailError(false); 
            setForgotEmail('');
            setModalIsOpen(false);
        }
    };

    
    
    const buttonStyle1 = {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'pink',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      };


    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'pink',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
        width: '100%'
    };

    const closeButtonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'gray',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%'
    };

    return (
        <div>
            <h1>LogIn</h1>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle1}
            />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle1}
            />

            <button onClick={handleLogin} style={buttonStyle1}>Login</button>

            <p style={{ marginTop: '10px' }}>
                Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>

            <Link to="#" onClick={() => setModalIsOpen(true)}>Forgot Password?</Link>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setModalIsOpen(false);
                    setEmailError(false); 
                }}
                contentLabel="Forgot Password Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '300px'
                    }
                }}
            >
                <h2>Forgot Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={forgotEmail}
                    onChange={(e) => {
                        setForgotEmail(e.target.value);
                        setEmailError(false); 
                    }}
                    style={inputStyle}
                />
                {emailError && <p style={{ color: 'red', marginTop: '5px' }}>Please fill out this field</p>}
                <button onClick={handleSendEmail} style={buttonStyle}>Send</button>
                <button onClick={() => setModalIsOpen(false)} style={closeButtonStyle}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default Login;
