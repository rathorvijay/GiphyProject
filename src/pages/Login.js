import React from 'react'
import Template from '../Components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Login"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
