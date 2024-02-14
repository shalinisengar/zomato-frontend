import { useState } from 'react'
import { Link } from "react-router-dom"

// import axios from 'axios'
// import { Route, Routes,useNavigate } from 'react-router-dom'
const SignUp = () => {
    let [input, Setinput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        passWord: ''
      })
      const fun3 = async(e) => {
        e.preventDefault();
      }
      const fun2 = (e) => {
        let { name, value } = e.target
        Setinput({ ...input, [name]: value })
      }
  return (
    <div>
       <fieldset>
        <legend><h2>SignUp form</h2></legend>
      <span> FirstName </span>
      <input value={input.firstName} name='firstName' type='text' placeholder="Enter your firstName" onChange={fun2} />
      <br></br>
      <br></br>

      <span> LastName </span>
      <input value={input.lastName} name='lastName' type='text' placeholder="Enter your LastName" onChange={fun2} />
      <br></br>
      <br></br>

      <span>Email </span>
      <input value={input.email} name='email' type='email' placeholder="Enter your Email" onChange={fun2} />
      <br></br>
      <br></br>

      <span> Password</span>
      <input value={input.passWord} name='passWord' type='password' placeholder="Enter your password" onChange={fun2} />
      <br></br>
      <br></br>

      <button type='submit' onClick={fun3}>Submit</button>  
          <Link to='/login'>Login</Link>

      </fieldset>
      
    </div>
  )
}

export default SignUp