import React, { useContext } from 'react';

import { AuthContext } from '../Contexts/AuthContext';
import "./UserProfile.css";
import Header from "../components/Header";
import ProfileCard from '../components/Profile/ProfileCard';

const UserProfile = () => {
  return (
    <div>
      <Header />
      <ProfileCard />
    </div>
  )
}

export default UserProfile;