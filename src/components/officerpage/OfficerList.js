import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './officerlist.css'

const DavisOpen = () => {
  return (
    <div>
        <div className="davis-open-container">
            <div className="davis-open">
                <h1 className="DO-title-text">24'-25' BCUCD OFFICERS</h1>
                <p className="DO-title-description">Introducing our 2024 - 2025 Badminton Club Officers!</p>
                <hr className= 'w3-round'/>
            </div>
            <div className="DO-photo-container">
                <nav className='officer-cell'>
                        <StaticImage
                        alt="The 23'-24' Badminton UCD Team Photo"
                        src="../../images/officers_ethan2.jpeg"
                        className="officer-photo"
                        />
                        <p className='officer-name'>Ethan Chen</p>
                        <p className='officer-title'>President</p>
                        <p className='officer-info'>Year: Senior</p>
                        <p className='officer-info'>Major: Chemistry</p>
                    </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_claudia.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Claudia Xu</p>
                    <p className='officer-title'>Vice President</p>
                    <p className='officer-info'>Year: Senior</p>
                    <p className='officer-info'>Major: Animal Science</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_joy.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Joy Yang</p>
                    <p className='officer-title'>Secretary</p>
                    <p className='officer-info'>Year: Senior</p>
                    <p className='officer-info'>Major: MPB</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_kevin.jpg"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Kevin Cuan</p>
                    <p className='officer-title'>Treasurer</p>
                    <p className='officer-info'>Year: Junior</p>
                    <p className='officer-info'>Major: Math, Psychology</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_jon.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Jon Moser</p>
                    <p className='officer-title'>Treasurer</p>
                    <p className='officer-info'>Year: Sophomore</p>
                    <p className='officer-info'>Major: Bintang Coach</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_iris.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Iris Lee</p>
                    <p className='officer-title'>Fundraising Coordinator</p>
                    <p className='officer-info'>Year: Masters</p>
                    <p className='officer-info'>Major: Nutritional Biology</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_steffi.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Steffi Ling</p>
                    <p className='officer-title'>Event Coordinator</p>
                    <p className='officer-info'>Year: Junior</p>
                    <p className='officer-info'>Major: Managerial Economics</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_adrian.jpeg"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Adrian Lam</p>
                    <p className='officer-title'>Event Coordinator</p>
                    <p className='officer-info'>Year: Senior</p>
                    <p className='officer-info'>Major: Computer Science</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_jeremy.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Jeremy Leung</p>
                    <p className='officer-title'>Travel Coordinator</p>
                    <p className='officer-info'>Year: Junior</p>
                    <p className='officer-info'>Major: Animal Science</p>
                </nav>
                <nav className='officer-cell'>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/officers_richard.png"
                    className="officer-photo"
                    />
                    <p className='officer-name'>Richard Huang</p>
                    <p className='officer-title'>Publicity Coordinator</p>
                    <p className='officer-info'>Year: Senior</p>
                    <p className='officer-info'>Major: Computer Science and Engineering</p>
                </nav>
                
            </div>
        </div>
    </div>
  )
}

export default DavisOpen
