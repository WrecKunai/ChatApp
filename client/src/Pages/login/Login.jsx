import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import "./login.css"
const URL="http://localhost:4000"
const Login = () => {
    const navigate=useNavigate()
    const {loading,error,dispatch}=useContext(AuthContext)
    const [loginDetails,setLoginDetails]=useState({
        username:undefined,
        password:undefined
    })
    const handleChange=(e)=>{setLoginDetails((prev)=>({
        ...prev,[e.target.id]:e.target.value
    }));


    }
    const handleClick=async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res= await axios.post(URL+"/api/Auth/login",loginDetails)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
            navigate("/convo")
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload:err.response.data});
            console.log(err)
            console.log("pass is wrong")
            
          }
    }
    const logout=()=>{
      dispatch({type:"LOGOUT"})
    }
  return (
    <div className="login-container">
    <h1 className="log-h1">LOGIN</h1>
    <div className="login-form">
            <label className='label-login'>Username</label>
            <input className="login-input" placeholder="Enter username" type="text" id="username" onChange={handleChange} />
            <label className='label-login'>Password</label>
            <input className="login-input" placeholder="Enter password" type="text" id="password" onChange={handleChange} />
            <button className='Login-btn' onClick={handleClick}>LOGIN</button>
            <button className="register-redirect" onClick={()=>navigate("/register")}>Register</button>
         
            
        
    </div>
    </div>

  )
}

export default Login