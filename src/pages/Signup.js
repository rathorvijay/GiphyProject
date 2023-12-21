import React from 'react'
import Template from '../Components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
          title="Signup"
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
        />
  )
}

export default Signup
