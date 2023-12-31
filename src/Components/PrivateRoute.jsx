/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ( { children } ) => {

    const location = useLocation();
    

    const { user, loading } = useContext( AuthContext );
    
    if ( loading ) {
        return <p className="text-center text-2xl font-semibold text-blue-500 h-screen">Loading.......</p>
    }

    if ( user ) {
       return children
    } else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;