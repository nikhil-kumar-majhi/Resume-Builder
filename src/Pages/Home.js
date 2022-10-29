import React from 'react'
import '../css/home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    // NAVBAR
    <div className="Container">
      <div className='NavbarSec'>
        <div className='Logo'>LOGO</div>
        <div className='menusec'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      {/* Header SEC */}
      <div className='HeaderSec'>
      <div className='HeaderTxt'>
        <div  className='MainTxt'>Create Your Resume</div>
        <div className='Brief'>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className='button'>
          <button className='btn1'>
            <Link to="/builder" className='btn1txt'>Create</Link>
          </button>
          <button className='btn2'>
            Contact
          </button>
        </div>
      </div>
      <img src={require('../Components/Img/Notifications_Monochromatic.png')} className="headerpic" alt='Notifications_Monochromatic'/>
      </div>
    </div>
  )
}

export default Home