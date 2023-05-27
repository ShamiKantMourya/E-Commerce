import React from 'react';
import "../components/CSS/footer.css";
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='explore box'>
            <h2>Explore</h2>
            <div className='links'>
                <Link className='underline-hover-effect' to= "">Our pets</Link>
                <Link className='underline-hover-effect' to= "">Our Products</Link>
                <Link className='underline-hover-effect' to= "">Curling Tails Blogs</Link>
            </div>
        </div>
            <div className='needHelp box'>
                <h2>Need Help ?</h2>
                <div className='links '>
                    <Link className='underline-hover-effect' to="">Track Your Order</Link>
                    <Link className='underline-hover-effect' to= "">Privacy Policy</Link>
                    <Link className='underline-hover-effect' to="">Return and Refunds</Link>
                </div>
            </div>
            <div className='stayConnected box'>
                <h2>Stay Connected</h2>
                  <ul className='social-icons'>
                    <li><i><BsFacebook /></i></li>
                    <li><i><BsInstagram /></i></li>
                    <li><i><BsTwitter /></i></li>
                    <li><i><BsYoutube /></i></li>
                </ul>
            </div>
      </div>
    <div class="wrapper">
      <h4>&copy;2023 <strong> Curling Tails</strong>, All Rights Reserved </h4>
      <nav class="footer-nav">
        <Link className='underline-hover-effect'  to= "">Back to Top</Link>
        <Link className='underline-hover-effect' to="">Terms of Use</Link>
        <Link className='underline-hover-effect' to="">Privacy</Link>
      </nav>
    </div>
  </footer>
  )
}

export default Footer;
