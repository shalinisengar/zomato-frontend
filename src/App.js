import React from 'react'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import { Route, Routes } from 'react-router-dom'
import Addrestro from './Addrestro'
import Veiwfood from './Veiwfood'



const App = () => {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/login' element={<Login />} />

        <Route path='/addres' element={<Addrestro />} />
        <Route path='/view' element={<Veiwfood />} />


      </Routes>
    </div>
  )
}

export default App