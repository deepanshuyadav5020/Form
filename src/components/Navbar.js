import React from 'react'
import { Link } from 'react-router-dom'; 
import {toast} from 'react-hot-toast'

function Navbar() {
  return (
    <div className='flex justify-evenly items-centre w-11/12 max-w-[1160px] py-4 mx-auto' >
        
        <nav>
        <Link to='/'>
            <button className='text-white bg-richblack-800 py-[9px] px-[12px] rounded-[8px] border border-richblack-700' 
            onClick={() =>{
                toast.success("Login Page");
            }}>
                Login
            </button>
        </Link>
        </nav>
        
        <nav>
        <Link to='/Signup'>
            <button className='text-white bg-richblack-800 py-[9px] px-[12px] rounded-[8px] border border-richblack-700' 
            onClick={() =>{
                toast.success("Signup Page");
            }}>
            SignUp
            </button>

            </Link>
        </nav>
            
        
        
    </div>
  )
}

export default Navbar