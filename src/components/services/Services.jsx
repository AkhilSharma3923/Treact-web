import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className='service'>
      <div className="serleft">

      </div>
      <div className="serright">
        <h1>We have the best service.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="counting">
            <div>

            <div className="number">
                <p>192</p>
                <p className='yash'>Countries</p>
            </div>
            <div className="number">
                <p>492</p>
                <p className='yash'>Hotels</p>
            </div>
            </div>

            <div>
            <div className="number">
                <p>4092</p>
                <p className='yash'>Rooms</p>
            </div>
            <div className="number">
                <p>10347</p>
                <p className='yash'>Workers</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
