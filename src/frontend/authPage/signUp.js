import React, { useContext } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./signUp.css";
import { AuthContext } from '../Contexts/AuthContext';

const SignUp = () => {
    const {signUpDetails,setSignUpDetails,signUpHandler} = useContext(AuthContext);
  return (
    <>
    <Header />
    <div className='body'>
    <div className='signUp-container'>
        <div className='title'>Registration</div>
        <form>
            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Full Name</span>
                    <input id='firstName' value={signUpDetails.fullName} onChange={(event) => setSignUpDetails({...signUpDetails , fullName: event.target.value
                    })} type='text' placeholder='Enter your name' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Username</span>
                    <input id='lastName' value={signUpDetails.userName} onChange={(event) => setSignUpDetails({...signUpDetails, userName: event.target.value})} type='text' placeholder='Enter your Username' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Email</span>
                    <input id='email' value={signUpDetails.emailId} onChange={(event) => setSignUpDetails({...signUpDetails, emailId: event.target.value})} type='text' placeholder='Enter your email' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Phone Number</span>
                    <input id='phoneNumber' value={signUpDetails.phoneNumber} onChange={(event) => setSignUpDetails({...signUpDetails, phoneNumber: event.target.value})} type='text' placeholder='Enter your phone number' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Password</span>
                    <input id='password' value={signUpDetails.password} onChange={(event) => setSignUpDetails({...setSignUpDetails, password: event.target.value})} type='password' placeholder='Enter your password' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Confirm Password</span>
                    <input id='confirmPassword' value={signUpDetails.confirmPassword} onChange={(event)=> setSignUpDetails({...signUpDetails, confirmPassword: event.target.value})} type='password' placeholder='Re-enter your password' required />
                </div>
            </div>
            <div className='registerbtn'>
                <input type='submit' onClick={signUpHandler} value="Register" />
            </div>
        </form>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default SignUp;