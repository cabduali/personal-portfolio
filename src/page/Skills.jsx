import React from 'react'
import './global.css'
import icon1 from './image/icon-1.png'
import icon2 from './image/icon-2.png'
import icon3 from './image/icon-3.png'
import icon6 from './image/icon-6.png'
import icon4 from './image/icon-4.jpg'
import icon5 from './image/icon-5.png'

function Skills() {
  return (
    
    <div className="container">
      <div className="main-title">
        <h1>My Skills</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row">
        <section className="col">
          <div className="sub-title">
            <h2>Programming Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">Java</div>
              <div className="progress-bar" value="94%">
                <div className="progress-line" style={{ maxWidth: '94%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">python</div>
              <div className="progress-bar" value="83%">
                <div className="progress-line" style={{ maxWidth: '83%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JavaScript</div>
              <div className="progress-bar" value="88%">
                <div className="progress-line" style={{ maxWidth: '88%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Php</div>
              <div className="progress-bar" value="68%">
                <div className="progress-line" style={{ maxWidth: '68%' }}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="col">
          <div className="sub-title">
            <h2>Framework Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">react</div>
              <div className="progress-bar" value="82%">
                <div className="progress-line" style={{ maxWidth: '82%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Spring</div>
              <div className="progress-bar" value="74%">
                <div className="progress-line" style={{ maxWidth: '74%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Django</div>
              <div className="progress-bar" value="63%">
                <div className="progress-line" style={{ maxWidth: '63%' }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">bootstrap</div>
              <div className="progress-bar" value="91%">
                <div className="progress-line" style={{ maxWidth: '91%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default Skills