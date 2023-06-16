import { useState } from "react";
// import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// import "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Button } from "react-bootstrap";
import './signin.css';
import Upnav from "../components/Upnav";

// Initialize Firebase
const firebaseConfig = {
  // your firebase configuration object here
  apiKey: "AIzaSyCKE9hliTSdNcneFUOwYBRUwKma13Nq3Rg",
  authDomain: "fir-auth-44b30.firebaseapp.com",
  projectId: "fir-auth-44b30",
  storageBucket: "fir-auth-44b30.appspot.com",
  messagingSenderId: "779691535802",
  appId: "1:779691535802:web:e7ff51f4fe336c75360183"


};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function LoginPage() {
  const navigate = useNavigate() ; 
  const [error, setError] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        // Redirect to home page
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        // Redirect to home page
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signUpHandler = () => {
    navigate('/signup')
  }

  const handleEmailSignIn = () => {
    navigate('/signin');
  }

  return (
    <div>
                     <Upnav/>
                         <div className="cont">
                             <div className="signin">
                                {/* {error && <p>{error}</p>} */}
                                 <h1>Login  to  Continue</h1>
                                 <button  className="google" onClick={handleGoogleSignIn} >Continue With Google</button> 
                                 <button className='fb' onClick={handleFacebookSignIn} >Continue with Facebook</button>
                                 <button className='emailLog' onClick={handleEmailSignIn} >Login with Email</button>
                                 {/* <SignInWithFacebook/> */}
                                 <div className="dont">
                                 <span>Don’t have an account?</span>
                                 <Button variant="outline-primary" onClick={signUpHandler}>Sign Up</Button>
                                 </div>
                             </div>
                           
                          </div>
                </div>
  );
}

export default LoginPage;
