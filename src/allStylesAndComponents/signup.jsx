import { useState } from "react";
import { Link } from "react-router-dom";
import mySignupImage from "./login.jpg";


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
        <div className="flex justify-between item-center ">

          <div className="w-1/2 pt-24">
            <img src={mySignupImage} width={400} height={300} className="mx-auto mt-4" />          
            </div>

            <div className="w-1/2 h-1 pt-24 mx-auto text-center mt-14">
            <p className="text-2xl text-center">Signup</p>
            <input
            className="border border-gray-500 rounded-md p-1 w-2/3 my-3 mx-auto"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-md p-1 w-2/3 mx-auto my-3"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-md p-1 w-2/3 mx-auto my-3"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-md p-1 w-2/3 mx-auto my-3"
            type="password"
            placeholder="Confirm Password "
            value={password}
            onChange={(e) => setComfirmPassword(e.target.value)}
            
            />

            <button on className="bg-orange-400 border-none cursor-pointer text-white rounded-lg p-2 w-2/3 my-3 hover:bg-gray-500" onClick={handleSignup} >Sign Up</button>

            <p >Already have an account?
             <Link to={"/login"} className="mx-auto text-blue-500 ml-3 hover:text-gray-500">Login</Link>
             </p>

        </div>
        </div>
    );
};
export default SignUp;