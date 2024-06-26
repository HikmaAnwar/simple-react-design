import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement('#root'); // to avoid screen reader issues with modal

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);

    const handleLogin = () => {
        console.log(" You Successfully Logged In!", {email,password});
        setEmail('');
        setPassword('');
    };

    const handleSendEmail = () => {
        if (forgotEmail.trim() === '') {
            setIsEmailEmpty(true);
        } else {
            console.log("Forgot password email sent to:", forgotEmail);
            setForgotEmail('');
            setModalIsOpen(false);
            setIsEmailEmpty(false);
        }
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
        marginBottom: '10px'
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
                        borderRadius: '8px'
                    }
                }}
            >
                <h2>Forgot Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={forgotEmail}
                    onChange={(e) =>{ setForgotEmail(e.target.value);
                        setEmailError(false);
                    }}
                    style={inputStyle}
                />
                {emailError && <p style={{ color: 'red', marginTop: '5px' }}>Please fill out this field</p>}
                <button onClick={handleSendEmail} style={buttonStyle}>Send</button>
                <button onClick={() => setModalIsOpen(false)} style={{...buttonStyle, backgroundColor: 'gray', marginLeft: '10px'}}>Close</button>
            </Modal>
        </div>


    );
};
export default Login;