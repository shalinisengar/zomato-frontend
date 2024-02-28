import { useState } from 'react'
import { Link, } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  let [input, Setinput] = useState({
    email: '',
    passWord: ''
  })
  const fun3 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/login', input)
      console.log(res,'rrrrr');

      localStorage.setItem('userData', JSON.stringify(res.data))
      if (res.data) {
        navigate('/')
      }

      
    } catch (err) {
      console.error(err, 'error');
    }

  }
  const fun2 = (e) => {
    let { name, value } = e.target
    Setinput({ ...input, [name]: value })
  }
  return (
    <div id='main'>
      <fieldset>
        <legend><h2>Login form</h2></legend>


        <span>Email </span>
        <input value={input.email} name='email' type='email' placeholder="Enter your Email" onChange={fun2} />
        <br></br>
        <br></br>

        <span> Password</span>
        <input value={input.passWord} name='passWord' type='password' placeholder="Enter your password" onChange={fun2} />
        <br></br>
        <br></br>

        <button type='submit' onClick={fun3}>Submit</button>
        <Link to='/signup'>SignUp</Link>

      </fieldset>
    </div>
  )
}

export default Login