import React, { useState } from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
export default function Register() {
    const [values,setValues]=useState({
        userId:"",
        password:"",
        confirmpassword:""
    })
    function handleChange(e){
      setValues((prevState)=>{
        return{
          ...prevState,
          [e.target.name]:e.target.value
        }
      })
    }
    async function handleSubmit(e){
      e.preventDefault();
      try {
       if(values && values.password===values.confirmpassword){
        await axios.post('http://localhost:5000/register',{
          userId:values.userId,
          password:values.password
        }).then(res=>alert(res.data.message))
       }
       else{
         console.log("invalid user")
       }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='register-form'>
        <div className='register'>
        <p className='login-logo'>Logo</p>
        <p className='login-text'>create new account</p>
        <form action="" className='form-register' onSubmit={handleSubmit}>
            <input type="email" placeholder='userId' name='userId' value={values.userId}
            onChange= {handleChange} required />
            <input type="password" name="password" value={values.password}   placeholder='password' onChange= {handleChange} required />
            <input type="password" name="confirmpassword" value={values.confirmpassword}  placeholder='confirm password' onChange= {handleChange} required />
            <button className='sign-up-button' type="submit">Sign up</button>
        </form>
        </div>
        <Link className='sign-in-link'  to="/">Sign in</Link>
    </div>
  )
}
