import React, { useContext, useState } from 'react';
import {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
  }from "../firebase";



const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    const signUp = ({firstName, lastName, phoneNumber, email, password}) => registerWithEmailAndPassword({firstName, lastName, phoneNumber, email, password, phoneNumber})
  
    const login = ({ email, password}) => logInWithEmailAndPassword({email, password})
  
    const value = {
        currentUser,
        signUp,
        login
    }

    
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
