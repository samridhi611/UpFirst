import { createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Fnav from "../Fnav";
const SignUp = ( ) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            window.location.href = "/signin";
            console.log(userCredentials)

        }). catch((error) => {
            console.log(error)
        })
    }

//     const signupInUpHandler = () => {
//         navigate("/acc");
//    }

// auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, redirect to the login page
//       window.location.href = "/signin";
//     }
//   });
    return (
        <>
        <Fnav/>
        <div className="cont cccc">
        <div className="signin ssss">
            <h1>Create Account</h1>
            <form onSubmit={signUp} className="signinForm">
                <input 
                   type='email' 
                   placeholder="Enter your email" 
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                   required
                   />
                <input 
                    type='password' 
                    placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <Button variant="primary" type="submit" className="sbtn" >Sign Up</Button>
            </form>
        </div>
        </div>
        </>
    )
}

export default SignUp;