import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './joinbanner.css'

const JoinBanner = () => {
    return (
        <div className="join-container">
        <nav className="join">
            <StaticImage 
                src="../../images/2022_davis_open_logo.png"
            />
            <h1 className="join-title-text">As fall quarter approaches, we would like to let everyone know the steps for becoming a member for the upcoming 2024-2025 school year!</h1>
        </nav>
         </div>
    )
  }
  
export default JoinBanner
