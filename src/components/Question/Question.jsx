import React from 'react'
import './Question.css'
import { BsPlusCircleFill } from "react-icons/bs";
const Question = () => {
  return (
    <div className='question'>
      <div className="qleft">
        <h1>Questions</h1>
        <p>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.</p>
        
        <div className='qq'>
            <h3>Lorem ipsum dolor sit amet.?</h3>
            <BsPlusCircleFill className='plus'/>
        </div>
        <div className='qq'>
            <h3>Lorem ipsum dolor sit amet.?</h3>
            <BsPlusCircleFill className='plus'/>
        </div>
        <div className='qq'>
            <h3>Lorem ipsum dolor sit amet.?</h3>
            <BsPlusCircleFill className='plus'/>
        </div>
        <div className='qq'>
            <h3>Lorem ipsum dolor sit amet.?</h3>
            <BsPlusCircleFill className='plus'/>
        </div>
      </div>
      <div className="qright">

      </div>
    </div>
  )
}

export default Question
