import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [token, setToken] = useState();
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
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
    // console.log(creds)
    try {
      const response = await fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify(creds)
      }
      )

      const data = await response.json();
      localStorage.setItem("token", data?.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(data?.foundUser));
      if (location?.state?.from === undefined) {
        navigate("/");
      } else {
        navigate(location?.state?.from);
      }
      // console.log(encodedToken)
    } catch (error) {
      console.log(error);
    }
  };
  // const userLoginDetails = localStorage.getItem("userLoginDetails");

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
      const user = await response.json();

      console.log(user, "signup");

      localStorage.setItem("token", user?.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(user?.createdUser));
      setToken(localStorage.getItem("token"));
      console.log(localStorage.getItem("userDetails"));
      const signUpData = JSON.parse(localStorage.getItem("userDetails"));
      // console.log(signUpData);
    } catch (error) {
      console.log(error);
    }
  };

  // const encodedToken = localStorage.getItem("token");
  // console.log(encodedToken);

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
    <AuthContext.Provider value={{ handleLogin, userEmail, setUserEmail, userPassword, setUserPassword, signUpDetails, setSignUpDetails, logoutHandler, signUpHandler, token }}>
      {children}
    </AuthContext.Provider>
  )
}