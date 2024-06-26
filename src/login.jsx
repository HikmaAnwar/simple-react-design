import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }
    return(
        <div>
            <h1>login page</h1>
        </div>


    );
};
export default Login;