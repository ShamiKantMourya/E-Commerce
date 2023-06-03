import * as React from 'react';
import { useContext } from "react"
import { Link } from 'react-router-dom';
import { BiUserCircle, BiLockAlt } from 'react-icons/bi';


import { AuthContext } from "../Contexts/AuthContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./signin.css";
import IMAGES from '../image';


export default function SignIn() {

  const { handleLogin, userEmail, setUserEmail, userPassword, setUserPassword } = useContext(AuthContext);
  const guestLoginHandler = () => {
    setUserEmail("arnavmourya@gmail.com");
    setUserPassword("arnav7654");
    handleLogin();
  };
  return (
    <>
      <Header />
      <div className='main'>
        <div className='login-container'>
          <form>
            <img className='avatar' src={IMAGES.Avatar} alt='avatar' />
            <h2 className='txt'>Welcome</h2>
            <div className='inputbox one focus'>
              <div className='i'>
                <i className='icon'><BiUserCircle /></i>
              </div>
              <div className='input-field'>
                <input type='email' value={userEmail} placeholder='Username' onChange={(event) => setUserEmail(event.target.value)} />
              </div>
            </div>
            <div className='inputbox two'>
              <div className='i'>
                <i className='icon'><BiLockAlt /></i>
              </div>
              <div className='input-field'>
                <input type='password' value={userPassword} placeholder='Password' onChange={(event) => setUserPassword(event.target.value)} />
              </div>
            </div>
            <button type='button' className='btn' onClick={() => handleLogin()}>Login</button>
            <button onClick={guestLoginHandler} type="button" className="guest-login">
              Guest Login
            </button>
            <div className='signin-links'>
              <Link to="">Forget Password ?</Link>
              <Link to="/signup">Don't have an account ? SignUp</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
