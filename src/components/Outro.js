import * as React from 'react'
import './outro.css'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
const Outro = () => {
  return (
    <div className="outro">
      <div className="outro-section">
        <h1 className='outro-title'>Follow Us For Updates</h1>
        <ul className='outro-links'>
          <li>
            <a href="https://www.facebook.com/groups/ucdavisbadminton" class="rounded-button">
                <StaticImage
                  src="../images/facebook5.png"
                  className="social-icon"
                  />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/badminton_ucd/" class="rounded-button">
              <StaticImage
                  src="../images/instagram.png"
                  className="social-icon"
                  />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/bssTuRwBZx" class="rounded-button">
              <StaticImage
                src="../images/discord.png"
                className="social-icon"
                />
            </a>
          </li>
        </ul>
        <p className="outro-email">Question? Email us at <a href= "mailto: davisbadminton@gmail.com"> davisbadminton@gmail.com</a></p>
        <p className="outro-dev"><a href="https://www.linkedin.com/in/ridhuang/" target='_blank'>Developed by Richard Huang, Publicity Coordinator</a></p>
        <p className="outro-love">With 💜 from the officers of the Badminton Club at UC Davis</p>
      </div>
    </div>
  )
}

export default Outro