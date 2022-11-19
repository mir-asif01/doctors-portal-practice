import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)  
const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserName = (name) =>{
        return updateProfile(auth.currentUser,{
            displayName : name
        })
    }
    const userLoginWithEmailPass =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const subsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=> subsubscribe()
    },[])

    const authInfo = { createUser ,updateUserName ,userLoginWithEmailPass }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;