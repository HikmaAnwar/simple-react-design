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
        <div className="flex justify-between item-center">
            <div className="w-1/2 pt-24">
                <img src={myImage} alt="image" width={400} height={300} className="mx-auto mt-4" />
            </div>

            <div className="w-1/2 h-1 pt-24 mx-auto text-center mt-14">
                <p className="text-2xl text-center">LogIn</p>
                <input
                    className="border border-gray-500 rounded-md p-1 w-2/3 my-3 mx-auto"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border border-gray-500 rounded-md p-1 w-2/3 my-3 mx-auto"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-orange-500 text-white p-2 mx-auto my-3 hover:bg-gray-400 cursor-pointer w-2/3 rounded-lg" onClick={handleLogin}>Login</button>
                <p className="mx-auto my-3 text-center">
                    Don't have an account? <Link to={"/signup"} style={{marginLeft:'4px', textDecoration:'none', color:'seagreen'}}>Signup</Link>
                </p>
                <Link to="#" onClick={() => setModalIsOpen(true)} style={{marginTop: '30px', marginLeft:'201px', textDecoration:'none', color:'seagreen'}}>Forgot Password?</Link>
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
