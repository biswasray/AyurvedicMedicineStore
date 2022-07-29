import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/useAuth';
import userIcon from '../assets/images/usericon.png';
import './sign.css';
export default function SignUp() {
    const {auth,setAuth}=useAuth();
    const navigate=useNavigate();
    const location = useLocation();
    const submitHandler=async (e)=> {
        e.preventDefault();
        const {name,email,password,type}=document.forms[0];
        let data = {
            'userName':name.value,
            'userEmail':email.value,
            'userPassword':password.value,
            'role':type.value
        };
        axios.post('http://localhost:8081/user/signUp',data)
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
                    <input type="text" id="name" className="fadeIn second" name="name" placeholder="Name" />
                    <input type="text" id="email" className="fadeIn third" name="email" placeholder="Email" />
                    <input type="password" id="password" className="fadeIn fourth" name="password" placeholder="Password" />
                    <label class="select fadeIn fifth" for="type">
                        <select id="type" name="type" required="required">
                            <option value="" disabled="disabled" selected="selected">Sign in as :</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                        <svg>
                            <use xlinkHref="#select-arrow-down"></use>
                        </svg>
                    </label>

                    <svg class="sprites">
                        <symbol id="select-arrow-down" viewbox="0 0 10 6">
                            <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                    </svg><br />
                    <input type="submit" className="fadeIn fifth" value="Sign Up" />
                </form>

                <div id="formFooter">
                    Already have an account .
                    <Link className="underlineHover" to="/signin">Sign In</Link>
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
