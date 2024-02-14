import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
     <div className='container'>
    
     <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password"/>
        </div>
         <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to='/'>SignUp</Link>
      </p>
   </form>

     </div>
      
      


    </div>
  )
}

export default Login