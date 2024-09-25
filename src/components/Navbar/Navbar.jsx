import React from 'react'
import './Navbar.css'
const Navbar = () => {
    
  return (
    <div className='nav'>
        <div className="left">
            <div className="navi">

        <div className="logo">
                <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                <h1>Treact</h1>
            </div>
            <div className="list">
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Login</li>
                </ul>
            </div>
            </div>
            <div className="down">
                <h1>Find Perfect Hotels
                    <span> anywhere you go.</span>
                </h1>
                <p>We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.</p>
<div className="btn">

                <div className="sign">Sign Up</div>
                <div className="search">
                    Search Hotels
                </div>
</div>
            </div>
        </div>
        <div className="right"></div>
      
    </div>
  )
}

export default Navbar
