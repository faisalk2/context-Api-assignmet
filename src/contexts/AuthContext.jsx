import {createContext} from "react"
import { useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
  const [isAuth,toggleAuth]=useState(false);

const login=(userName,password)=>{
    if(userName && password)
    {
        toggleAuth(true);
    }
}

const logout=()=>{
    toggleAuth(false);
}


    return ( <AuthContext.Provider value={{login,logout,isAuth}}>{children}</AuthContext.Provider>)
}