import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth'

export default function SignOut() {
    const {setAuth}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
  return (
    <div>
        {localStorage.removeItem('userInfo')||setAuth(null)||navigate(location.state?.from?.pathname || "/signin",{replace:true})}
    </div>
  )
}
