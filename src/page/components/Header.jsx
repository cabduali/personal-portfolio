import React from 'react'
function Header() {
  return (
    <div className='header'>
        
        <div className='name'>
        <span className='code'>C</span>ode  
        <span className='code'> with</span> 
        <span className='code'> A</span>bdullahi
      </div>
        <div className='nav'>
        <nav>
            <a href="">Home</a>
            <a href="#BIO">About</a>
            <a href="#Skills">Skills</a>
            <a href="#projects " >projects</a>
            <a href="#myContact " className='contact'>contact</a>
        </nav>
        </div>
        
    </div>
  )
}

export default Header