import React, { useContext } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./signUp.css";
import { AuthContext } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { signUpDetails, setSignUpDetails, signUpHandler } = useContext(AuthContext);
    const { firstName, lastName, email, password, phoneNumber, confirmPassword } = signUpDetails;
    return (
        <>
            <Header />
            <div className='body'>
                <div className='signUp-container'>
                    <div className='title'>Registration</div>
                    <form>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>Firstname</span>
                                <input id='firstName' value={firstName} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, firstName: event.target.value,
                                }))} type='text' placeholder='Enter your name' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Lastname</span>
                                <input id='lastName' value={lastName} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, lastName: event.target.value,
                                }))} type='text' placeholder='Enter your Username' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Email</span>
                                <input id='email' value={email} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, email: event.target.value,
                                }))} type='text' placeholder='Enter your email' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Phone Number</span>
                                <input id='phoneNumber' value={phoneNumber} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, phoneNumber: event.target.value,
                                }))} type='text' placeholder='Enter your phone number' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Password</span>
                                <input id='password' value={password} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, password: event.target.value,
                                }))} type='password' placeholder='Enter your password' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Confirm Password</span>
                                <input id='confirmPassword' value={confirmPassword} onChange={(event) => setSignUpDetails((prevState) => ({
                                    ...prevState, confirmPassword: event.target.value,
                                }))} type='password' placeholder='Re-enter your password' required />
                            </div>
                        </div>
                        <div className='registerbtn'>
                            <button disabled = {password !== confirmPassword} type='submit' onClick={signUpHandler} className='register-btn'>Register</button>
                        </div>
                        <Link to="/login">Already have account<span
                        >Login</span></Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;