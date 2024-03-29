import React from 'react'
import './global.css'
import icon1 from './image/image-11.jpg'
import icon2 from './image/image-12.jpg'
import icon3 from './image/image-13.jpg'
import icon6 from './image/image-14.jpg'
import icon4 from './image/image-15.jpg'
import icon5 from './image/image-16.jpg'
function Project() {
  return (
    <div id='projects' class="containeres">

    <h1 class="heading">my Projects</h1>
    
    <div class="box-containers">
    
        <div class="box-1">
            <img src={icon1} alt="" />
            <h3> ecommerce website</h3>       
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
       <img src={icon2} alt="" />
            <h3>School management system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
          <img src={icon3} alt="" />
            <h3>Elearing website</h3>    
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
           <img src={icon4} alt="" />
            <h3>Inventory management system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
       <img src={icon5} alt="" />
            <h3>food delivery</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
          <img src={icon6} alt="" />
            <h3> car rental system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div> 
    </div> 
    </div>
  )
}

export default Project