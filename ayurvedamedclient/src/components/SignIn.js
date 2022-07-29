import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/useAuth';
import userIcon from '../assets/images/usericon.png';
import './sign.css';
export default function SignIn() {
    const {auth,setAuth}=useAuth();
    const navigate=useNavigate();
    const location = useLocation();
    const submitHandler=async (e)=> {
        e.preventDefault();
        const {email,password}=document.forms[0];
        let config={
            headers:{
                'Content-Type': 'application/json'
            }
        };
        let data = {
            'userEmail':email.value,
            'userPassword':password.value,
        };
        axios.post('http://localhost:8081/user/signIn',data)
        .then((res)=>res.data)
        .then((data)=>data&&(localStorage.setItem('userInfo',JSON.stringify(data))||setAuth(data)||navigate(location.state?.from?.pathname || "/",{replace:true})))
        .catch((err)=>alert(err));
    }
    const sform = (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={userIcon} id="icon" alt="User Icon" />
                </div>

                <form onSubmit={submitHandler}>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" />
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>

                <div id="formFooter">
                    Doesn't have account ?
                    <Link className="underlineHover" to="/signup">Create Account</Link>
                </div>

            </div>
        </div>
    );
    return (
        <div>
            {auth?navigate(location.state?.from?.pathname || "/",{replace:true}):sform}
        </div>
    );
}
