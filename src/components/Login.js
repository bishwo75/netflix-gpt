import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
const Login = () => {
    const [isSignInForm, setIsSignINForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(name.current.value, email.current.value, password.current.value);
        setErrorMessage(message);
        console.log(message);
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
            {!isSignInForm && <input type="text" placeholder='Name' ref={name}
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
