import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Lottie from "react-lottie";

import { AuthContext } from "../../Contexts/AuthContext";
import { AddressCard } from "../../addressPage/AddressCard";
import OrderCard from "../OrderCard/OrderCard";
import Hello from "../../Animations/Hello.json";

import "./ProfileCard.css";

const ProfileCard = () => {
  const { logoutHandler } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const { firstName, lastName, email } = user;
  const location = useLocation();

  const getStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      backgroundColor: isActive ? "#06272b" : "",
      color: isActive ? "#d3edf1" : "",
    };
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hello,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="profile-card-container">
      <div className='profile-card-animation'>
          <Lottie
            options={defaultOptions}
            height={100}
            width={150}
          />
          <p>
            {firstName} {lastName}
          </p>
        </div>
      <div className="user-profile-card">
        <div className="profile-card-header">
          <NavLink
            style={getStyle}
            className="profile-card-user-details"
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            style={getStyle}
            className="profile-card-user-details"
            to="/address"
          >
            Address
          </NavLink>
          <NavLink
            style={getStyle}
            className="profile-card-user-details"
            to="/orderSummary"
          >
            My Orders
          </NavLink>
        </div>
        {
        location.pathname === "/profile" ? (
            <div className="user-details-content">
              <div className="user-name">
                <p className="user-detail-heading">Name :</p>
                <p>
                  {firstName} {lastName}
                </p>
              </div>
              <div className="user-email">
                <p className="user-detail-heading">Email :</p>
                <p>{email}</p>
              </div>
              <button
                className="user-card-logout-btn"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </div>
          ) : location.pathname === "/address" ? (
            <AddressCard />
          ) : (
            <OrderCard />
          )
        }
      </div>
    </div>
  )
}

export default ProfileCard;