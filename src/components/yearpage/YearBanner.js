//Banner Title for the Year 2023-2024 page.
import * as React from 'react'
import './yearbanner.css'


const YearBanner = () => {
  return (
    <div>
    <div className='yearpage-banner'>
      <div class="yearpage-typewriter">
        <h1>Welcome to the 2023-2024</h1>
        <h1>Collection!</h1>
        <p className="yearpage-description">Press Any Image for More Info</p>
      </div>  
    </div>
    <div className="yearpage-title-container">
      <hr className= 'yearpage-style-block'/>
    </div>
    </div>
      // <div className="yearpage-title-container">
      //   <h1 className="DO-title-text">Welcome to the 2023-2024 Collection!</h1>
      //   <p className="DO-title-description">Press Any Image for More Info</p>
      //   <hr className= 'yearpage-style-block'/>
      // </div>
  )
}

export default YearBanner