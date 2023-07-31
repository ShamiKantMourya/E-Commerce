import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/header.css";
import { FilterContext } from "../Contexts/filterContext";
import IMAGES from "../image";
import { AuthContext } from "../Contexts/AuthContext";

function Header() {
  const [searchProduct, setSearchProduct] = useState("");
  const { filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();

  const searchProductHandler = (searchProduct) => {
    navigate("/products");
    filterDispatch({ type: "filter_by_search", payLoad: searchProduct });
   
  };

  const { token } = useContext(AuthContext);
  // console.log(token, "token");
  
  return (
    <>
      <div className="headerParent">
        <div className="header">
          { }
          <p className="code">We are Barking Discounts! Use Code <strong>HAPPYDOGO</strong></p>
          <div className="contact">
            <p className="mob">
              <span>{<FontAwesomeIcon icon={faPhone} />} </span>+91-765477470*
            </p>
            <p className="email">
              <span><FontAwesomeIcon icon={faEnvelope} /> </span> shamikant300@gmail.com
            </p>
          </div>
        </div>
        <div className="logoPart">
          <Link className="imgParent" to="/">
            <img className="logoImg" src={IMAGES.logo} alt=" site logo" />
          </Link>
          <div className="searchBar">
            <input
              type="text"
              id="header-search"
              placeholder="search for your pet"
              onChange={(event) => setSearchProduct(event.target.value)}
            />
            <button onClick={() => searchProductHandler(searchProduct)}>
              {
                <FontAwesomeIcon
                  className="searchIcon"
                  icon={faMagnifyingGlass}
                />
              }
            </button>
          </div>
          <div className="link">
            <div className="linkChild">
              <span className="text-product"><Link to="/products">Products</Link></span>
              <Link to="/cart">
                {<FontAwesomeIcon className="cart" icon={faCartShopping} />}
              </Link>
              <Link to="/wishlist">
                {<FontAwesomeIcon className="wishlist" icon={faHeart} />}
              </Link>
              {!token ? (
                <Link to="/signin">
                  <FontAwesomeIcon className="header-user-icon" icon={faUser} />
                </Link>
              ) : (
                <Link to="/profile">
                  <FontAwesomeIcon className="header-user-icon" icon={faUser} />
                </Link>
              )}</div>
          </div>
        </div>
      </div>
      {/* <div className="side-navbar">
        <div className="link">
          <div className="linkChild">
            <span className="text-product"><Link to="/products">Products</Link></span>
            <Link to="/cart">
              {<FontAwesomeIcon className="cart" icon={faCartShopping} />}
            </Link>
            <Link to="/wishlist">
              {<FontAwesomeIcon className="wishlist" icon={faHeart} />}
            </Link>
            {!encodedLoginToken ? (
              <Link to="/signin">
                {" "}
                <button>Login</button>
              </Link>
            ) : (
              <button className="logout" onClick={logoutHandler}>Logout</button>
            )}</div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
