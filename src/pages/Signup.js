import React, { useState } from 'react'
// import login from '../assets/login.png';
import Login_Img from '../assets/loginimage.jpg'
import {toast} from "react-hot-toast";

function Signup() {
  const[formData,setformData]=useState({
    firstname:"",lastname:"",email:"",password:"",confirmPassword:"",
  })

  function changeHandler (eve){
    setformData((prevData) => (
      {
        ...prevData,
      [eve.target.name]:[eve.target.value]
      }
    ))
  }
  function submitHandler(event){
    event.preventDefault();
    toast.success("Registered Successfully");
    console.log(formData);
  }
  return (
    <div className='flex w-11/12max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div>
      <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem ]'>Hello</h1>
      <p className='text-white font-semibold text-[1.126rem] leading-[1.625rem ]'>Create a new account</p>
      <form onSubmit={submitHandler}>
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>Firstname<sup>*</sup></p>
          <input
          required
          type="text"
          name="firstname"
          onChange={changeHandler}
          value={formData.firstname}
          className='bg-richblack-800 rounded-[0.5rem] w-full text-white'
          />
        </label>
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>Lastname<sup>*</sup></p>
          <input
          required
          type="text"
          name="lastname"
          onChange={changeHandler}
          value={formData.lastname}
          className='bg-richblack-800 rounded-[0.5rem] w-full text-white'
          />
        </label>
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>email<sup>*</sup></p>
          <input
          required
          type="text"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          className='bg-richblack-800 rounded-[0.5rem] w-full text-white'
          />
        </label>
        <label>
          <p className='text-white font-semibold text-[1rem] leading-[1.375rem ]'>password<sup>*</sup></p>
          <input
          required
          type="password"
          name="password"
          onChange={changeHandler}
          value={formData.password}
          className='bg-richblack-800 rounded-[0.5rem] w-full text-white'
          />
        </label>
        <br/>
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium px-[12x] py-[8px] mt-6'dxdds>
          SignUp
        </button>
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

export default Signup
