import React ,{useContext,useEffect, useState}from 'react'
import "./topbar.css"
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'
const Topbar = ({toggle,toggletop,id}) => {
  const URL="http://localhost:4000"
  // const URL="https://chatbackend.up.railway.app"
  // const URL="https://chatbackend-a45f.onrender.com"
  const [User,setUser]=useState([])
  useEffect(()=>{
    const getuser=async ()=>{
      const res= await axios.get(`${URL}/api/Auth/${id}`)
      setUser(res.data)
    }
    
    id?getuser():console.log("no id")
    
  },[id])
 
  return (
    <div className="topbar">
    <div className='topbar-wrapper'>
    {User[0]&&<div className="friend-profile">
    <img className='img-friend' src={`${URL}/public/images/${User[0].image}`} alt="..." onError={event => {event.target.src =`${URL}/public/images/7.jpeg`
     event.onerror = null}}/>
    <p className='name-friend'>{User[0].Firstname}</p>
    
    </div>}
    </div>
    </div>
  )
}

export default Topbar