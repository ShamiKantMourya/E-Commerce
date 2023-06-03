import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({ hasError: false, message: "" });
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const {fullName,userName , email,password} = signUpDetails;
  const location = useLocation();
  const navigate = useNavigate();

  const getLoginToken = async () => {
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

      const  encodedToken = await response.json();
      localStorage.setItem("encodedLoginToken", encodedToken);
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

  const handleLogin = () => {
    getLoginToken();
  };

  //SignUp

  const getSignUpToken = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({fullName,userName , email,password}),
      });
      const encodedToken = await response.json();
      localStorage.setItem("encodedSignUpToken",encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  const encodedSignUpToken =  localStorage.getItem("encodedSignUpToken");
  const signUpHandler = async () => {
    await getSignUpToken();
    try {
      setErrorMessage({ hasError: false, message: "" });
        if (signUpDetails.password.length > 0 && signUpDetails.password === signUpDetails.confirmPassword) {
          if (encodedSignUpToken !== null) {
            navigate("/login");
          }
        } else {
          setErrorMessage({
            hasError: true,
            message: "Passwords Do Not Match",
          });
        }
    } catch (error) {

      console.log(error);
    }
}

  //LogOut

  const logoutHandler = () => {
    localStorage.removeItem("encodedLoginToken");
    setUserEmail("");
    setUserPassword("");
    navigate("/");
    
  };

  return (
    <AuthContext.Provider value={{ handleLogin, userEmail, setUserEmail, userPassword, setUserPassword, signUpDetails, setSignUpDetails, userLoginDetails, logoutHandler,signUpHandler,errorMessage,setErrorMessage }}>
      {children}
    </AuthContext.Provider>
  )
}