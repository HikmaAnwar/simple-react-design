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
    }


    return(
        <div>
            <h1>signup Page</h1>
            
        </div>
    );
};
export default SignUp;