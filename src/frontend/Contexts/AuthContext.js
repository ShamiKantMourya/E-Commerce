import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    userName: "",
    emailId: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const location = useLocation();
  const navigate = useNavigate();

  const getLoginToken = async () => {
    const creds = {
      email: userEmail,
      password: userPassword
    }
    try {
      const response = await fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify(creds)
      }
      )

      const { encodedToken, foundUser } = await response.json();
      localStorage.setItem("encodedLoginToken", encodedToken);
      localStorage.setItem("userLoginDetails", JSON.stringify(foundUser));
        if (location?.state?.from === undefined) {
          navigate("/");
        } else {
          navigate(location?.state?.from);
        }
      console.log(encodedToken)
    } catch (error) {
      console.log(error);
    }
  }

  const encodedLoginToken = localStorage.getItem("encodedLoginToken");
  const userLoginDetails = localStorage.getItem("userLoginDetails");

  const handleLogin = () => {
    getLoginToken();
  };

  //SignUp

  const getSignUpToken = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(signUpDetails),
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  // const encodedSignUpToken = localStorage.getItem("encodedSignUpToken");

  const signUpHandler = async () => {
    await getSignUpToken();
  }

  //LogOut

  const logoutHandler = () => {
    localStorage.removeItem("encodedLoginToken");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ handleLogin, userEmail, setUserEmail, userPassword, setUserPassword, signUpDetails, setSignUpDetails, signUpHandler, userLoginDetails, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  )
}