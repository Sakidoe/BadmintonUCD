import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './aboutnavbar.css'

const AboutNavbar = () => {
  return (
    <nav className="about-navbar">

        <button className="nav-buttons">
          <span> WHO WE ARE
          </span>
        </button>
        <button className="nav-buttons">
          <span> EVENTS
          </span>
        </button>
        <button className="nav-buttons">
          <span> DAVIS OPEN
          </span>
        </button>
    </nav>
  )
}

export default AboutNavbar
