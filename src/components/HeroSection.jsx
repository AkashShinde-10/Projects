import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero container'>
       <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='hero-btn'>
          <button>Shop Now</button>
          <button className='second-btn'>Category</button>
        </div>

        <div className="shopping">
        <p>Also Available On</p>
        <div className="icon">
          <a href="#"><img src="/Images/flipkart.png" alt="Flipkart_logo" /></a>
          <a href="#"><img src="/Images/amazon.png" alt="Amazon_logo" /></a>
        </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src='/Images/shoe_image.png'/>
      </div>
    </div>
  )
}

export default HeroSection
