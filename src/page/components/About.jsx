import React from 'react'
import im from './sax.png'
function About() {
  return (
    <section id='Bio'>
    <div className='aboutME'>
        <div className="box-container">
            <div className="imgs">
            <img src={im} alt="Me" />
            </div>
            <div className="text">
                <h1>About Me</h1>
                <p>Hi there! My name is Abdullahi dirie farah, and I'm thrilled to share a bit about myself with you. My journey into the world of coding began in Semister(I) when I took my first computer science class. The moment I wrote my first line of code and saw a program come to life, I was hooked. There was something magical about the way I could create something tangible from more lines of text, and I knew then that coding was something I wanted to pursue further.</p>
                <a href="#Bio">Learn More</a>
            </div>
        </div>
    </div>
  </section>

  )
}

export default About