import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faMagnifyingGlass,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons';
import "./CSS/header.css";

import IMAGES from "../image";

function Header() {
  return (
    <div>
      <div className="header">
                    <h5 className="mob">{<FontAwesomeIcon icon={faPhone} />} +91-765477470*</h5>
                    <p className="email"><FontAwesomeIcon icon={faEnvelope} /> shamikant300@gmail.com</p>
                    <h4 className="code">We are Barking Discounts! Use Code HAPPYDOGO</h4>
            </div>
            <div className="logoPart">
               <Link to= "/"><img className="logoImg" src= {IMAGES.logo} alt=" site logo" /></Link>
               <form action="" className="searchBar">
               <input
                    type="text"
                     id="header-search"
                      placeholder= "search for your pet"
                      name="s"
                />
                     <button type="submit">{<FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />}</button>
               </form>
               <div className="link">
               <Link to= "/cart">{<FontAwesomeIcon className="cart" icon={faCartShopping} />}</Link>
               <Link  to= "/wishlist">{<FontAwesomeIcon className="wishlist" icon={faHeart} />}</Link>
               <Link to= "/signin">{<button>Login</button>}</Link>
               </div>
            </div>
    </div>
  )
}

export default Header;
