import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
const Navbar = () => {
    const {isLight,toggleTheme}=useContext(ThemeContext);
    const {isAuth,login,logout}=useContext(AuthContext);
   
  return (
    <div>

<button onClick={()=>{
        if(isAuth){
          logout()
        }else{
          login("R","Z")
        }
      }}>{isAuth ? "LogOut":"Login"}</button>

        <div>Theme Change</div>
        <button onClick={toggleTheme}>{isLight ? "Dark":"light"}</button>
      
    </div>
  )
}

export default Navbar