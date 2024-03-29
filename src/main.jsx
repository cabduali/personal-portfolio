import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home.jsx'
import Bio from './page/Bio.jsx'
import Skills from './page/Skills.jsx'
import MyContact from './page/myContact.jsx'
import Project from './page/Project.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
   <Bio/>
  <Skills/>
    <Project/>
    <MyContact/>
 
  </React.StrictMode>,
)
  