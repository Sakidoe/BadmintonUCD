import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  nav,
  logoContainer,
  logo,
  navLinks,
  navLinkItem,
  navLinkText
} from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={nav}>
      <div className={logoContainer}>
        <Link to="/">
          <StaticImage
            src="../images/ucd_logo_opaque.png"
            alt="UCD Logo"
            className={logo}
            placeholder="tracedSVG"
          />
        </Link>
      </div>
      <div className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/officers" className={navLinkText}>
            Officers
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/join" className={navLinkText}>
            Join
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/FAQ" className={navLinkText}>
            FAQ
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
