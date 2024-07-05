import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
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
            setEmailError(false); 
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
                <p className="text-2xl text-center">Login</p>
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
                    Don't have an account? <Link to={"/signup"}  className="text-blue-500 ml-2 no-underline">Signup</Link>
                </p>
                <Link to="#" onClick={() => setModalIsOpen(true)} className="mx-auto my-3 no-underline text-blue-500">Forgot Password?</Link>
            </div>

            <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => {
    setModalIsOpen(false);
    setEmailError(false);
  }}
  contentLabel="Forgot Password Modal"
  className="fixed inset-0 flex items-center justify-center"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50"
>
  <div className="bg-white p-5 rounded-lg w-72 transform -translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2">
    <h2 className="text-center my-3">Forgot Password</h2>
    <input
      className="w-full p-1.5 my-3 border border-gray-500 rounded"
      type="email"
      placeholder="Enter your email"
      value={forgotEmail}
      onChange={(e) => {
        setForgotEmail(e.target.value);
        setEmailError(false);
      }}
    />
    {emailError && <p className="text-red-500 text-center">Please fill your email</p>}
    <button
      className="w-full text-black p-2 my-3 bg-orange-400 hover:bg-gray-400 rounded-md"
      onClick={() => {
        if (!forgotEmail) {
          setEmailError(true);
        } else {
          handleSendEmail();
        }
      }}
    >
      Send
    </button>
    <button
      className="w-full text-black bg-orange-200 hover:bg-gray-400 p-2 my-3 rounded-md"
      onClick={() => setModalIsOpen(false)}
    >
      Close Modal
    </button>
  </div>
</Modal>


        </div>
    );
};

export default Login;
