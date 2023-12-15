import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'
export const LoginSignup = () => {
  const navigate=useNavigate();
  const submit = ()=>{
    let userName=document.getElementById("userName").value;
    let userEmailId=document.getElementById("userEmailId").value;
    let userPassword=document.getElementById("userPassword").value;

    if(userName==="preet@123" && userEmailId==="preet@gmail.com" && userPassword==="123456"){
        navigate("/");
    }
    else{
      alert("User not found, please enter correct information");
    }
      

  }
  return (
    
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>login Here</h1>
        <div className="loginsignup-fields">
          <input id="userName" type="text" placeholder='Your Name' />
          <input id="userEmailId" type="email" placeholder='Email Address'/>
          <input id="userPassword" type="password" placeholder='Password' />
        </div>
        <button onClick={submit}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
