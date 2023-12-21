import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from "./SignUp"

const Template = ({title, formtype, setIsLoggedIn}) => {
  return (
    <div className='mx-auto items-center flex justify-center w-11/12 max-w-[1160px] py-12'>

        <div className='w-11/12 max-w-[450px]' >
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                {title}
            </h1>
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        </div>
    </div>
  )
}

export default Template
