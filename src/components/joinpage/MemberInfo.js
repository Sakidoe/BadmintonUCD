import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './memberinfo.css'

const MemberInfo = () => {
  return (
    <div>
        <div className="mem-info-container">
            <div className="mem-info">
                <h1 className="mem-info-title">Other Steps</h1>
            </div>
            <div className="other-steps-container">
                <nav className='step-cell'> 
                        <h1 className='step-info-title'>Membership Dues</h1>
                        <p className='step-info-description'>
                        ∆ An membership fee of $175 per year OR $65 per Quarter must be paid 
                            to one of our treasurers Jon/Kevin through Zelle (davisbadminton@gmail.com)
                             or cash by October 6th. <br />
                             ∆ When sending in your dues please comment
                            "Badminton Dues - [Your Name]". Note that dues are NON-REFUNDABLE.
                              </p>
                    </nav>
                <nav className='step-cell'>
                    <h1 className='step-info-title'>Complete Fusion Insurance</h1>
                    <p className='step-info-description'>
                        This insurance is enforced across all UC Davis Sports Clubs. Scroll down to "Sports Club" 
                        then sign into your UC Davis account. Scroll down to "Sport Club (Badminton)" 
                        and pay the insurance fee. There is also a waiver for for the Fusion fee provided 
                        by the school (highly recommend and only takes 5 minutes to fill out!). 
                    </p>
                    <a href="https://rec.ucdavis.edu/" download class="fusion btn--link">Fusion Link</a>{` `}
                    <a href="https://campusrecreation.ucdavis.edu/fee-waiver" download class="fusion btn--link">Fusion Waiver</a>{` `}

                </nav>
                <nav className='step-cell'>
                    <h1 className='step-info-title'>Complete Team Policy Acknowledgement Form</h1>
                    <p className='step-info-description'>
                    To help ensure all players are kept safe, we are asking all active members to sign off
                     and agree to our Team Policy Acknowledgement. Signing off means that you have read and 
                     understood our Constitution and are accepting of your responsibilities as an active member 
                     of the Badminton Club at UC Davis. 
                    </p>
                    <a href="https://forms.gle/Sw35m6A4aNDya26J7" download class="tpf btn--link">Team Policy Form</a>{` `}
                </nav>
                <nav className='step-cell'> 
                        <h1 className='step-info-title'>Complete DoSportsEasy</h1>
                        <p className='step-info-description'>
                            Complete DoSportsEasy (DSE) by October 13th. This registration is enforced across all UC 
                            Davis Sports Clubs. To register follow the button link, 
                            scroll down to "Badminton" and click "Registration." Sign in to your UC Davis account and then 
                            fill out the registration form.</p>
                            <a href="https://campusrecreation.ucdavis.edu/dosportseasy" download class="dse btn--link">DoSportsEasy</a>{` `}
                    </nav>
            </div>
        </div>
    </div>
  )
}

export default MemberInfo
