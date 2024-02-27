import React, { useEffect, useState } from 'react'
import './App.css'
import { Link, NavLink } from 'react-router-dom'
import {FaUserAlt}  from 'react-icons/fa';
import {BiLogInCircle}  from 'react-icons/bi';
import Logo from './Zomato-Logo.png'
import Card from './Card';
import City from './City';
import Footer from './Footer';
import img from './BackGround.png'

// import Login from './Login'
// import SignUp from './SignUp'

const Home = () => {
  const [data , setdata] = useState(null)
  useEffect(()=>{
    let data1 = localStorage.getItem('userData',)
    console.log(data1,'dataa');
    let newData = JSON.parse(data1)
    console.log(newData);
    setdata(newData)

  },[])

  let remove = ()=>{
    localStorage.clear('userData')
    setdata(null)
  }
  return (
    <div>
          <div className='parent'>
        <img src={img}/>
        <div className='Navbar'>
            <div className='Navbar-left'>
                <span className='text'><NavLink to='/view' className='text' > View food</NavLink></span>
                <span className='text'><NavLink to='/addres' className='text'>Add restorent</NavLink></span>

            </div>
            <div className='Navbar-right'>
                             

{
   data? (  <>   <p className='text' > {data.userData} </p>
    <span  onClick={remove}   className='floar-right1'> <NavLink  className='text'>Logout<BiLogInCircle/> </NavLink> </span>  

    </>

   ):

   (     <>   
   <span  className='floar-right1'><Link to='/Login' className='text'>Login <BiLogInCircle/></Link> </span> 
               <span  className='floar-right1'><Link to='/signup' className='text'><FaUserAlt /> SignUp</Link></span> </>)

} 

            
               {/* <span  className='floar-right1'><Link to='/Login' className='text'>Login <BiLogInCircle/></Link> </span> 
               <span  className='floar-right1'><Link to='/signup' className='text'><FaUserAlt /> SignUp</Link></span> */}

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
            <div className='inp'>
              <select name='' id='select' ><img src=''/>

                <option value="channai">Chennai</option>
                <option value="bhopal">Bhopal</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option selected value="gwalior">Gwalior</option>
                <option value="ujjain">Ujjain</option>
              </select>
              
              <input className='p-3 hm' type='text'  placeholder=' Search for a restaurant or a dish'/>

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