import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
const LoginStatus = () => {
    const {isAuth}=useContext(AuthContext);
  return (
    <div>
        <h1>{isAuth ? "Logged In":"Logged Out"}</h1>
    </div>
  )
}

export default LoginStatus