import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './davisopen.css'

const DavisOpen = () => {
  return (
    <div>
        <div className="davis-open-container">
            <nav className="davis-open">
                <h1 className="DO-title-text">THE DAVIS OPEN</h1>
                <p className="DO-title-description">The Largest Northern California Badminton Tournament, with over 400 entries and 20 events.</p>
            </nav>
            <div className="DO-photo-container">
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/ray.jpeg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/Davis_Open_Xin.jpg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/Davis_Open_Photo1.jpg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/Davis_Open_Stadium.jpg"
                className="who-we-are-photo"
                />
            </div>
        </div>
        <div className="DO-about-container">
            <nav className="DO-about">
                <h1 className="DO-about-title-text">Details</h1>
            </nav>
            <div className = "DO-about-list">
                <nav className="DO-location">
                    <h1 className="DO-about-title">The Credit Union Center</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/u_center.jpeg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        Hosted in the prestigious and professional Credit Union Center, the Davis Open provides comptetitors a truly inspiring environment to play.
                        With over 13 courts, unintrusive lighting, and a strong and coherent sound system, it is the most optimal location to host a badminton 
                        tournament.
                    </p>
                </nav>
                <nav className="resources">
                    <h1 className="DO-about-title">Shirts</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/Davis_Open_Design.png"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        Each year, the Davis Open shirts are available to pre-order or purchase the day of the tournament. 
                        With incredibly cute designs coupled with unique pastel colors, the Davis Open cotton shirts have been an
                        iconic part of this event. 
                    </p>
                </nav>
                <nav className="student-ran">
                    <h1 className="DO-about-title">Student Ran</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/Davis_Open_Team.jpg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        Ran by the Badminton Club at UC Davis, all scheduling, marketing, and tournament operations are completely
                        student ran. Led by players and organizers of the tournament of several years, we strive to show our 
                        leadership and mentorship abilities to seamlessly operate this massive competition.
                    </p>
                </nav>
                <nav className="Victory">
                    <h1 className="DO-about-title">Prizes</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/Davis_Open_Charlie.jpg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        At this tournament, we offer unique Davis themed trophies that are truly unique to earn.
                        Competitors from A-consolations, B, C, and D flight levels may earn a trophy, while the 1st
                        and 2nd place of A receive cash prizes! 
                    </p>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default DavisOpen
