/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";


export  const AuthContext = createContext( null );

const AuthProvider = ( { children } ) => {

    const googleProvider = new GoogleAuthProvider();

    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    
    const auth = getAuth(app)
    
    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    const loginUser = ( email, password ) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password );
    }

    const googleLogin = () => {
        return signInWithPopup( auth, googleProvider );
    }
    const singOutUser = () => {
        setLoading( true );
        return signOut( auth );
    }

    useEffect( () => {
        onAuthStateChanged( auth, ( user ) => {
            setUser( user );
            setLoading( false );
       } );
       
        
    },[auth])
    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        singOutUser,
        
        
    }




    return (
        <AuthContext.Provider value={authInfo}>
            
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;