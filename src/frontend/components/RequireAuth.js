import { Navigate , useLocation } from 'react-router-dom';

function RequireAuth({children}) {
  const encodedLoginToken = localStorage.getItem("token");
  const location = useLocation();
  return encodedLoginToken ? (children) : ( <Navigate to="/signin" state={{ from: location }} />)
  
}
 

export default RequireAuth;
