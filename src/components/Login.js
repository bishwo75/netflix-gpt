import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignINForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // const message = checkValidData(name.current?.value, email.current?.value, password.current?.value);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        console.log(message);

        if(message) return;
        //sign in sign Up Logic
        
        if(!isSignInForm){
            // Sign Up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current?.value, 
                password.current?.value
                )
            .then((userCredential) => {
          // Signed up 
              const user = userCredential.user;
              // update profile to display name: get the below from firebase manage users section
              updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://avatars.githubusercontent.com/u/54118149?s=96&v=4"
              })
              .then(() => { // to update the photo url and display name to update the state
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(                  
                  addUser({
                    uid: uid, 
                    email: email, 
                    displayName: displayName,
                    photoURL: photoURL
                  })
                );
                navigate("/browse");
              }).catch((error) => {
                setErrorMessage(error.message);
              });

              console.log(user);
              
            })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+"-"+ errorMessage)
        // ..
      });
        }else {
            // SIgn In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                 // Signed in 
                 const user = userCredential.user;
                    console.log("sign in", user);
                    navigate("/browse");
                    
            })
         .catch((error) => {
           const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        }
    }

    const toggleSignInForm = ( ) => {
        setIsSignINForm(!isSignInForm);
    }
    return ( 
        <div>
            <Header />
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/c9e41c72-2c6e-41a7-928c-d38b1d7fd3fa/US-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
           <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
            <input type="text" placeholder='Name' ref={name}
             className='p-4 my-4 w-full rounded-lg bg-gray-500' />}
            <input type="text" placeholder='Email Address' ref={email} 
             className='p-4 my-4 w-full rounded-lg bg-gray-500' />
            
            <input type="password" placeholder='Password' ref={password} 
             className='p-4 my-4 w-full rounded-lg bg-gray-500' />
             <p className='text-red-500 font-bold'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "Already registered, Sign In Now" : "New to Netflix? Sign Up Now" }</p>
           </form>
        </div>
     );
} 
 
export default Login;
