import React from 'react'
import { Link } from 'react-router-dom'

function Footor() {
  return (
    <div className='footor'>
        <h4 className='text-center '>All Right Reserved &copy; Imran Shahid</h4>
        <p className='text-center mt-3'>
      <Link to='/about'>About</Link>
      |
      <Link to='/contact' >Contact</Link> 
      |
      <Link to='/policy' >Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footor