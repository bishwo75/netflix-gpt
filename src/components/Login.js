import React, { useState } from 'react';
import Header from './Header';
const Login = () => {
    const [isSignInForm, setIsSignINForm] = useState(true)

    const toggleSignInForm = ( ) => {
        setIsSignINForm(!isSignInForm);
    }
    return ( 
        <div>
            <Header />
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/c9e41c72-2c6e-41a7-928c-d38b1d7fd3fa/US-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
           <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full rounded-lg bg-gray-500' />}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-500' />
            
            <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-500' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "Already registered, Sign In Now" : "New to Netflix? Sign Up Now" }</p>
           </form>
        </div>
     );
} 
 
export default Login;
