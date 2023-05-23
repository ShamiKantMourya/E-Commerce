import { createContext, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [userEmail,setUserEmail]=useState("");
  const  [userPassword, setUserPassword]=useState("");
  const [signUpDetails , setSignUpDetails] = useState({
    firstname: "",
    lastname: "",
    emailId: "",
    password:"",
    confirmPassword:""
  });
 
  const location = useLocation();
  const navigate = useNavigate();

  const getLoginToken=async ()=>{
    const creds ={
        email: userEmail,
        password:userPassword
    }
    try{
        const response= await fetch('/api/auth/login',{
        method:"POST",
        body:JSON.stringify(creds)
     }
     )
     const {encodedToken}= await response.json();
     localStorage.setItem("encodedLoginToken",encodedToken);
     console.log(encodedToken)
    }catch(error){
        console.log(error);
    }
}

const encodedLoginToken = localStorage.getItem("encodedUserLoginToken");

const handleLogin = async () => {
  if (!encodedLoginToken) {
    await getLoginToken();
    if (encodedLoginToken !== undefined) {
      if (location?.state?.from === undefined) {
        navigate("/");
      } else {
        navigate(location?.state?.from);
      }
    }
  }
}
  return (
     <AuthContext.Provider value={{handleLogin,userEmail,setUserEmail,userPassword,setUserPassword,signUpDetails,setSignUpDetails}}>
            {children}
      </AuthContext.Provider>
  )
}