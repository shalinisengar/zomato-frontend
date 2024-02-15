import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  let [input ,setinput] = useState({
    email:"",
    password:""
  })

  const click = (e)=>{
    e.preventDefault();
    console.log(input);
  }
  const changeinput = (e) => {
    let { name, value } = e.target
   console.log( setinput({ ...input, [name]: value })); 
    setinput({ ...input, [name]: value })
  }
  return (
    <div>
     <div className='container'>
    
     <form class="form"> 
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email" name='email'value={input.email} onChange={changeinput}/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password" value={input.password} name='password' onChange={changeinput}/>
        </div>
         <button type="submit"  onClick={click} >
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