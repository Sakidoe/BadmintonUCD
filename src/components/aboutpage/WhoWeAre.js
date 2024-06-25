import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './whoweare.css'

const WhoWeAre = () => {
  return (
    <div>
        <div className="who-we-are-container">
            <nav className="who-we-are">
                <h1 className="title-text">Who We Are</h1>
                <p className="test2">Our Mission: “Provide access to badminton facilities for students to come together, fostering good sportsmanship and leadership skills at all levels”</p>
            </nav>
            <div className="photo-container">
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/bucd_formal_funny.jpg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/bucd_grads_funny.jpg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/bucd_kevin_smash.jpg"
                className="who-we-are-photo"
                />
                <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/bucd_bsc_social.jpeg"
                className="who-we-are-photo"
                />
            </div>
        </div>
        <div className="goals-container">
            <nav className="goals">
                <h1 className="title-text">Our Goals</h1>
            </nav>
            <div className = "goals-list">
                <nav className="team-bonding">
                    <h1 className="goal-title-text">Team Bonding</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/bucd_2021_bonding1.JPG"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        As a team, we want to create an environment for members to find lifelong friends. 
                        From quarterly bonding events, meetups, and many boba trips,
                        we prioritize our members to learn and grow with each other as one team.
                    </p>
                </nav>
                <nav className="community">
                    <h1 className="goal-title-text">Community</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/bucd_berkeley_meet.jpg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        As apart of the badminton community, we want to maintain a healthy relationship
                        with other school clubs, as well as other associations within California. We
                        consistently host school meets against other local schools, notably SJSU, UCSC,
                        Stanford, and UC Berkeley. We also encourage club members to attend local tournaments,
                        as well as aid in creating our own.
                    </p>
                </nav>
                <nav className="Victory">
                    <h1 className="goal-title-text">Victory</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/bucd_collegiate_pic.jpg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        Our vision for our club is to win the National Collegiate Championships. To do this,
                        our weekly practices promote members to match with others who are at their level.
                        We want our players to be the best that they can be, with access to peers who are
                         willing to help each other improve.
                    </p>
                </nav>
                <nav className="resources">
                    <h1 className="goal-title-text">Resources</h1>
                    <StaticImage
                    alt="The 23'-24' Badminton UCD Team Photo"
                    src="../../images/bucd_courts.jpg"
                    className="who-we-are-photo"
                    />
                    <p className="g1">
                        To help our members have a seamless experience while playing badminton, we offer 
                        many accomodations for them. This includes free birds for every match, an abundance 
                        of courts to play on, and contacts in case of stringing needs or for new gear.
                    </p>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre
