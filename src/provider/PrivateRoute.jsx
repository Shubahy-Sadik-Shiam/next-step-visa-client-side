import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user){
        return children;
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
};

export default PrivateRoute;