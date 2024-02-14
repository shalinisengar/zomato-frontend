import React from 'react'
import './App.css'
import { Link, NavLink } from 'react-router-dom'
import {FaUserAlt}  from 'react-icons/fa';
import { IoFastFood } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
import {BiLogInCircle}  from 'react-icons/bi';
import Logo from './Zomato-Logo.png'
import Card from './Card';
import City from './City';
import Footer from './Footer';


// import Login from './Login'
// import SignUp from './SignUp'

const Home = () => {
  return (
    <div>
          <div className='parent'>
        
       <img src='data:image/jpeg;base64,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'/>
        <div className='Navbar'>
            <div className='Navbar-left'>
                <span className='text'><NavLink to='/view' className='text' > View food</NavLink></span>
                <span className='text'><NavLink to='/addres' className='text'>Add restorent</NavLink></span>

            </div>
            <div className='Navbar-right'>
               <span  className='floar-right1'><Link to='/Login' className='text'>Login <BiLogInCircle/></Link> </span> 
               <span  className='floar-right1'><Link to='/' className='text'><FaUserAlt /> SignUp</Link></span>

            </div>

        </div>
        <div className='zomato-logo'>
          <img className='img'  src={Logo} alt='logo'/>
          <br/>
          {/* <h1 className='img'>zomato</h1> */}
        </div>
        <div className='input-search'>
            <h3 style={{fontWeight:395}}>Discover the best foods & drinks in Chitkara</h3>
            <br/>
            <div className='input'>
              <select name='' id='' ><img src=''/>

                <option value="channai">Chennai</option>
                <option value="bhopal">Bhopal</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option selected value="gwalior">Gwalior</option>
                <option value="ujjain">Ujjain</option>
              </select>
              {/* <IoSearch
              style={{backgroundColor:'white', color:'black',  borderRadius: 10,width:20, height: 50}} /> */}
              {/* <div className='search1'>
              <IoSearch /></div> */}
              <input className='p-3' type='text' placeholder=' Search for a restaurant or a dish'/>

            </div>

        </div>
        <Card/>
        <section>
          <City/>
        </section>
        <footer>
          <Footer/>
        </footer>
        
        </div>
    </div>
  )
}

export default Home