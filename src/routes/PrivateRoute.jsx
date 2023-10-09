import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default PrivateRoute;