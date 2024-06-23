import * as React from 'react'
import './outro.css'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
const Outro = () => {
  return (
    <div className="outro">
      <div className="outro-paragraph">
        <h1>Follow Us For Updates</h1>
        <ul>
          <li>
            <a className="facebook" href="https://www.facebook.com/groups/ucdavisbadminton">
                <span>
                    <StaticImage
                    src="../images/facebook5.png"
                    className="social-icon"
                    />
                </span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="instagram" href="https://www.instagram.com/badminton_ucd/">
              <span>
                <StaticImage
                    src="../images/instagram.png"
                    className="social-icon"
                /></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="discord" href="https://discord.gg/bssTuRwBZx">
              <span>
                <StaticImage
                    src="../images/discord.png"
                    className="social-icon"
                /></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-discord" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p className="p1">Question? Email us at davisbadminton@gmail.com</p>
        <p className="p2">Developed by Richard Huang, Publicity Coordinator</p>
        <p className="p3">With 💜 from the officers of the Badminton Club at UC Davis</p>
      </div>
    </div>
  )
}

export default Outro