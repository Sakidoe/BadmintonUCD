import * as React from 'react'
import './introduction.css'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Introduction = () => {
  return (
    <div className='introduction-color'>
      <div className="introduction">
        <div className="introduction-position">
          <h1 className='introduction-title'>A United Team</h1>
          <p className="introduction-description">
            The Badminton Club at UC Davis is a student-run sports club
            affiliated with the UC Davis Sports Club Program. It is 
            currently open for all Undergraduate and Graduate students. 
          </p>
          <Link to="/about" className="button-link">
            <button className="animated-button">
              <StaticImage
                alt="BUCD Cow"
                src="../../images/BUCD_cow.png"
                className="button-image"
              />
              <span className="text">A B O U T</span>
              <span className="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="introduction-photo">
          <StaticImage
            alt="BUCD Heart"
            src="../../images/BUCD_heart_square.jpg"
            className="curved-heart-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction