import React from 'react'
import image1 from './image/bg1.png'
function myContact() {
  return (
    <div  id='myContact' className='containers'>
      <div className='item'>
        <div className='contact-me'>
          <div className='first'> let Get in touch</div>
          <img src={image1} alt="" className='bg1'/>
        </div>
        <div className="submit-form">
          <h4>Contact Us</h4>
          <form action="">
            <div className='input-text'>
            <input placeholder='Enter you name' type="text" className='input'/>
            <label for =""></label>
            </div>
            <div className='input-text'>
            <input placeholder='Enter you Email' type="Email" className='input'/>
            <label for =""></label>
            </div>
            <div className='input-text'>
            <input placeholder='Enter you phone' type="tel" className='input'/>
            <label for =""></label>
            </div>
            <div className='input-text'>
            <label for =""></label>
           <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button type='submit' className='submit'>submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default myContact