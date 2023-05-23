import React from 'react'

const SignUp = () => {
  return (
    <div className='signUp-container'>
        <div className='title'>Registration</div>
        <form action='#'>
            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Full Name</span>
                    <input type='text' placeholder='Enter your name' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Username</span>
                    <input type='text' placeholder='Enter your Username' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Email</span>
                    <input type='text' placeholder='Enter your email' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Phone Number</span>
                    <input type='text' placeholder='Enter your phone number' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Password</span>
                    <input type='text' placeholder='Enter your password' required />
                </div>
                <div className='input-box'>
                    <span className='details'>Confirm Password</span>
                    <input type='text' placeholder='Re-enter your password' required />
                </div>
            </div>
            <div className='registerbtn'>
                <input type='submit' value="Register" />
            </div>
        </form>
    </div>
  )
}

export default SignUp;