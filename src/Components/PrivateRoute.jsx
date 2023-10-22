import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ( { children } ) => {

    const { user } = useContext( AuthContext );

    if ( user ) {
       return children
    } else {
        <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;