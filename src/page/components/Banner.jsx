import React from 'react'
import img from './sax.png'
function Banner() { 
  return (
    <div className='banner' id='Home'>
        <div className='content'>
        <h1>  Hi i'm <span className='Banner-name'>Abdullahi</span> </h1>
        <h2>Fullstack developer</h2>
        <p>a passionate developer with a keen interest </p>
        <span>in creating meaningful projects</span>
        <br />
        <button className='get'>get in touch</button>
        </div>
        <div className='sax'>
        <img className='img' src={img} alt="" />
        </div>    
    </div>
  )
}

export default Banner
