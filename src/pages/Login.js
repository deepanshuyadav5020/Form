import React, { useState } from 'react'
import Login_Img from '../assets/loginimage.jpg'
import {toast} from "react-hot-toast"

function Login() {
  const[formData, setformData] = useState({
    email:"",password:"",
  })
function changeHandler(event) {
  setformData((prevData) => (
    {
     ...prevData,
    [event.target.name]:[event.target.value]
    }
  ));
}

function submitHandler(event){
  event.preventDefault();
  toast.success("Logged In");
}

  return (
    <div className='flex w-11/12max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div>
      <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem ]'> Welcome Back</h1>
      <p className='text-white font-semibold text-[1.126rem] leading-[1.625rem ]'>Glad to see you again!..</p>
      <br/>
      {/* <br/> */}
      <form onSubmit={submitHandler}>
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>Email address<sup className='text-pink-200'>*</sup></p>
          <input
            required
            type="text"
            value = {formData.email}
            onChange={changeHandler}
            placeholder="Enter your email address"
            name="email"
            className=' bg-richblack-800 rounded-[0.5rem] w-full text-white'
            />
        </label>
        
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>Password<sup className='text-pink-200'>*</sup></p>
          <input
            required
            type="password"
            value = {formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            name="password"
            className=' bg-richblack-800 rounded-[0.5rem] w-full text-white'
            />
        </label>
        
        <br/>
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium px-[12x] py-[8px] mt-6'>Log in</button>
      </form>
      </div>
      
      <div>
      <img src={Login_Img}
      width={500}
      height={500}/>
      </div>
    </div>
  )
}

export default Login
