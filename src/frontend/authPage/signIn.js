import * as React from 'react';
import { useContext} from "react"
import { Link } from 'react-router-dom';


import {AuthContext} from "../Contexts/AuthContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./signin.css";
import IMAGES from '../image';


export default function SignIn() {

  const {handleLogin,userEmail,setUserEmail,userPassword,setUserPassword}=useContext(AuthContext);


  return (
    <>
    <Header />
    {/* <img src=''  alt='pets'/> */}
    <div className='login-container'>
      <form action='#'>
        <img className='avatar' src= {IMAGES.Avatar} alt='avatar' />
      <h2 className='txt'>Welcome</h2>
      <div className='inputbox one focus'>
        <div className='i'>
        <i class="fa-regular fa-user"></i>
        </div>
        <div className='input-field'>
      <input type='email' value={userEmail} placeholder='Username' onChange={(event) => setUserEmail(event.target.value)} />
      </div>
      </div>
      <div className='inputbox two'>
        <div className='i'>
        <i class="fa-solid fa-lock"></i>
      </div>
      <div className='input-field'>
      <input type='password' value={userPassword} placeholder='Password' onChange={(event) => setUserPassword(event.target.value)} />
      </div>
    </div>
      <button className='btn'  onClick={()=> handleLogin()}>Login</button>
      <div className='signin-links'>
      <Link to="">Forget Password ?</Link>
      <Link to="/signup">Don't have an account ? SignUp</Link>
      </div>
      </form>
    </div>
    <Footer />
    </>
  );
}
