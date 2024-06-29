import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styles from "./login.module.css"; 
import myImage from "./login.jpg"

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

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={myImage}  />
            </div>

            <div className={styles.formContainer}>
                <h1>LogIn</h1>
                <input
                    className={styles.inputemail}
                    type="email"
                    placeholder="Enter email"
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
                <button className={styles.logbutton} onClick={handleLogin}>Login</button>
                <p style={{ marginTop: '10px' }}>
                    Don't have an account? <Link to={"/signup"}>Signup</Link>
                </p>
                <Link to="#" onClick={() => setModalIsOpen(true)}>Forgot Password?</Link>
            </div>

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
                    className={styles.inputforgotemail}
                    type="email"
                    placeholder="Enter your email"
                    value={forgotEmail}
                    onChange={(e) => {
                        setForgotEmail(e.target.value);
                        setEmailError(false); 
                    }}
                />
                {emailError && <p style={{ color: 'red', marginTop: '5px' }}>Please fill out this field</p>}
                <button className={styles.sendbutton} onClick={handleSendEmail}>Send</button>
                <button className={styles.closebutton} onClick={() => setModalIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default Login;
