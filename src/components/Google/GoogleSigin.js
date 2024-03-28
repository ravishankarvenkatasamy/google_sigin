import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";
import Button from 'react-bootstrap/Button';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyDlFPm-6rPzZBEteKpBIF3PfInm33ZjzLg",
  authDomain: "nutz-3963e.firebaseapp.com",
  projectId: "nutz-3963e",
  storageBucket: "nutz-3963e.appspot.com",
  messagingSenderId: "729812594171",
  appId: "1:729812594171:web:c8ab26c247e3f3b989af5e",
  measurementId: "G-6KY7RF0CXK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();
const GoogleSignIn = () => {
  const navigate = useNavigate();

  const responseGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        localStorage.setItem("username", result.user.displayName);
        localStorage.setItem("userimg", result.user.photoURL);
     
        navigate("/Home");

      }).catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);


      });

  };


  useEffect(() => {

    logEvent(analytics, 'notification_received');

  }, [])
  return (

    <>

<Button variant='secondary' onClick={responseGoogle} className='w-100 mt-1 g-sign'><img className='smg-image' src='https://handsoflightmassages.files.wordpress.com/2021/03/google-icon.png'></img> Sign up with Google</Button>
      

    </>

  );
};

export default GoogleSignIn;
