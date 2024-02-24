import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { Route, Routes,useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  let [input ,setinput] = useState({
    email:"",
    password:""
  })

  const click = async(e)=>{
    e.preventDefault();
    // let res = await axios.post('http://localhost:4000/api/login',input)
    navigate('/home')
    // console.log(res);
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
       <h4 class="form-title">Sign in to your account</h4>
        <div class="input-container">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name='email'value={input.email} onChange={changeinput}/>
          <span>
          </span>
      </div>
      <div class="input-container">
        <label>Password</label>
          <input type="password" placeholder="Enter your password" value={input.password} name='password' onChange={changeinput}/>
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