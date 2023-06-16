import { signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Fnav from "../Fnav";
import '../../signup/signin.css';
import './form.css';
const SignIn = ( ) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

   const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            window.location.href = "/";
            console.log(userCredentials)
        }). catch((error) => {
            console.log(error)
        })
    }

    const loginInHandler = () => {
         navigate("/")
    }



    return (
        <>
        <Fnav/>
        <div className="cont cccc">
        <div className="signin ssss">
            <h1>Log In</h1>
            <form onSubmit={signIn} className="signinForm">
                <input 
                   type='email' 
                   placeholder="Enter your email" 
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                   required
                   />
                <input 
                    type='password' 
                    placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <Button variant="primary" type="submit" className="sbtn">Log In</Button>
            </form>
        </div>
        </div>
        </>
    )
}

export default SignIn;