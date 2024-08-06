import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage} from 'gatsby-plugin-image'
import { navigate } from 'gatsby';
import {
  largeScreenNavbar,
  logoContainer,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
  currentyearholder,
  blogText,
  blogLink,
  smallScreenDropdown,
  ssDropDownStyle,
  ssDropDownTitle,
} from './navbar.module.css'

const Navbar = () => {

  const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <div>
    <nav className={largeScreenNavbar}>
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
      {/* <div className={blogLink}>
        <Link to="/2023-2024" className={blogText}>
          2023-2024
        </Link>
      </div> */}
      
      <div className={navLinks}>
        <li className={navLinkItem}>
        <Link to="/2023-2024" className={navLinkText}>
          2023-2024
        </Link>
          </li>
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

    
    <div className={smallScreenDropdown}>
      <h1 className={ssDropDownTitle}>Badminton at UC Davis</h1>
        <select className={ssDropDownStyle} onChange={handleNavigation}>
          <option value="/">☰</option>
          <option value="/">Home</option>
          <option value="/2023-2024">2023-2024</option>
          <option value="/about">ABOUT</option>
          <option value="/officers">OFFICERS</option>
          <option value="/join">JOIN</option>
          <option value="/FAQ">FAQ</option>
        </select>
      </div>
      
    </div>
  )
}

export default Navbar
