import React from 'react';
import "../components/CSS/footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='explore'>
            <h2>Explore</h2>
            <div className='links'>
                <Link className='underline-hover-effect' to= "">Check Breeds</Link>
                <Link className='underline-hover-effect' to= "">Our Products</Link>
                <Link className='underline-hover-effect' to= "">Curling Tails Blogs</Link>
            </div>
        </div>
            <div className='needHelp'>
                <h2>Need Help ?</h2>
                <div className='links'>
                    <Link className='underline-hover-effect' to="">Track Your Order</Link>
                    <Link className='underline-hover-effect' to= "">Privacy Policy</Link>
                    <Link className='underline-hover-effect' to="">Return and Refunds</Link>
                </div>
            </div>
            <div className='stayConnected'>
                <h2>Stay Connected</h2>
                  <ul className='social-icons'>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
      </div>
    <div class="wrapper">
      <small>&copy;2023 <strong>Curling Tails</strong>, All Rights Reserved </small>
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
