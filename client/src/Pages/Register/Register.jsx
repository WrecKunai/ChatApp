import React from 'react'

import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import "./register.css"
import { red } from '@mui/material/colors'

const Register = () => {
    const URL="http://localhost:4000"
    const navigate=useNavigate()
    const [Registerdetails,setRegisterdetails]=useState({
        username:undefined,
        Firstname:undefined,
        Lastname:undefined,
        email:undefined,
        password:undefined,
        image:undefined
    })
    const handleChange=(e)=>{setRegisterdetails((prev)=>({
        ...prev,[e.target.id]:e.target.value
    }))};
    const fileChange=(e)=>{setRegisterdetails((prev)=>({
        ...prev,image:e.target.files[0]
    }))};
    const test=()=>{
        console.log(Registerdetails)
    }

    const register=async(e)=>{
        e.preventDefault()
        const formdata=new FormData();

        formdata.append("username",Registerdetails.username)
        formdata.append("Firstname",Registerdetails.Firstname)
        formdata.append("Lastname",Registerdetails.Lastname)
        formdata.append("email",Registerdetails.email)
        formdata.append("password",Registerdetails.password)
        formdata.append("image",Registerdetails.image)
        try{
            const res=await axios.post(URL+"/api/Auth/register",formdata)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
        
    }
    const redirect=()=>{
        navigate("/")
    }
  return (
    <div className="register-container">
    <h1 className="log-h1">REGISTER</h1>
    <div className="register-form">
    <form className="reg-form" onSubmit={register} encType="multipart/form-data">
    <label className='label-register'>Username</label>
            <input className="register-input" placeholder="Enter username" type="text" id="username" onChange={handleChange} />
            <label className='label-register'>First name</label>
            <input className="register-input" placeholder="Enter your First name" type="text" id="Firstname" onChange={handleChange} />
            <label className='label-register'>Last name</label>
            <input className="register-input" placeholder="Enter your Last name" type="text" id="Lastname" onChange={handleChange} />
            <label className='label-register'>email</label>
            <input className="register-input" placeholder="Enter your Email" type="email" id="email" onChange={handleChange} />
            <label className='label-register'>Password</label>
            <input className="register-input" placeholder="Enter password" type="text" id="password" onChange={handleChange} />
            <label className='label-register'>Profile image</label>
            <input className="upload-input" name='image' type="file" id="file" onChange={fileChange} />
            <button className='register-btn' type='submit'>Register</button>
            
    </form>
    <button className='login-btn' onClick={redirect}>Login</button>

            
        
    </div>
    </div>
  )
}

export default Register