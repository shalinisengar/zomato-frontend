import { useState } from 'react'
import { Link } from "react-router-dom"
import './signup.css'
import axios from 'axios'
import { Route, Routes,useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate = useNavigate()

 let [input, Setinput] = useState({
    name: '',
    email: '',
    passWord: ''
  })
  const fun2 = (e) => {
    let { name, value } = e.target
    Setinput({ ...input, [name]: value })
  }
  const fun3 = async(e) => {
      e.preventDefault();
      

      let res = await axios.post('http://localhost:4000/api/users',input)

      if(res){
        navigate('/login')
      }
      
      console.log(res);

      // console.log(input);
      
  }
  
  return (
    <div id='main'>
      <fieldset>
        <legend ><h2>SignUp form</h2></legend>
      

      <span> FulltName </span>
      <input value={input.name} name='name' type='text' placeholder="Enter your fullName" onChange={fun2} />
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

      <button id='botton' type='submit' onClick={fun3}>Submit</button>  
          <Link to='/login'>Login</Link>

      </fieldset>
    </div>
  )
}

export default Signup