import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const location = useLocation();
  const navigate = useNavigate();

  const getLoginToken = async (userEmail, userPassword) => {
    const creds = {
      email: userEmail,
      password: userPassword
    }
    console.log(creds)
    try {
      const response = await fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify(creds)
      }
      )

      const  {encodedToken} = await response.json();
      localStorage.setItem("token", encodedToken);
        if (location?.state?.from === undefined) {
          navigate("/");
        } else {
          navigate(location?.state?.from);
        }
      console.log(encodedToken)
    } catch (error) {
      console.log(error);
    }
  };
  const userLoginDetails = localStorage.getItem("userLoginDetails");

  const handleLogin = (userName, password) => {
    getLoginToken(userName, password);
  };

  //Sign Up
  const getSignUpToken = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(signUpDetails),
      });
      const data = await response.json();

      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(data.createdUser));
    } catch (error) {
      console.log(error);
    }
  };

  const encodedToken = localStorage.getItem("token");

  const signUpHandler = () => {
    getSignUpToken();
    navigate("/");
  };

  //LogOut

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUserEmail("");
    setUserPassword("");
    navigate("/");
    
  };

  return (
    <AuthContext.Provider value={{ handleLogin, userEmail, setUserEmail, userPassword, setUserPassword, signUpDetails, setSignUpDetails, userLoginDetails, logoutHandler,signUpHandler,encodedToken }}>
      {children}
    </AuthContext.Provider>
  )
}