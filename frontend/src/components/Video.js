import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'


import zeldaVideo from '../assets/zelda.mp4'

const Video = () => {
  return (
    <div className='hero'>

    <video autoPlay loop muted id = 'video'>
        <source src={zeldaVideo} type='video/mp4'/>
    </video>

    <div className='content'>

        <h1> your safe space.  </h1>
        <p>navigate your emotions.</p> 

   
    <div>
        <Link to='/training' className='btn'> My safe spots </Link>
        <Link to='/contact' className='btn'> Let's figure it out </Link>

    </div>
    </div>
    </div>
  )
}

export default Video