import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './joinbanner.css'
import downloadFile from '../../../public/static/UCD_Physical.pdf' 


const ucdPhysForm = {
    rows: [
        {
            title: <h classname="FAQ-question">
                    &nbsp; UCD Physical Form Download
                   </h>,
            content:<a href={downloadFile} onclick="w3_close()" class="about-bar-item about-button about-hover-white">UCD Physical Form Download</a> ,
        },
    ],
  };

  const fusionInsuranceLink = {
    rows: [
        {
            title: <h classname="FAQ-question">
                    &nbsp; Fusion Insurance Link
                   </h>,
            content:<a href="https://rec.ucdavis.edu/" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">Fusion Insurance Link</a> ,
        },
        {
            title: <h classname="FAQ-question">
                    &nbsp; Fusion Insurance Waiver Link
                   </h>,
            content:<a href="https://campusrecreation.ucdavis.edu/fee-waiver" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">Fusion Insurance Waiver Link</a> ,
        },
    ],
  };
  const teamAckForm = {
    rows: [
        {
            title: <h classname="FAQ-question">
                    &nbsp; Team Acknowledgement Form
                   </h>,
            content:<a href="https://forms.gle/Sw35m6A4aNDya26J7" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">Team Acknowledgement Form Link</a> ,
        },
    ],
  };
  const dseForm= {
    rows: [
        {
            title: <h classname="FAQ-question">
                    &nbsp; DoSportsEasy Link
                   </h>,
            content:<a href="https://campusrecreation.ucdavis.edu/dosportseasy" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">DSE Link</a> ,
        },
    ],
  };
  const styles = {
    titleTextColor: "white",
    bgColor: '#9AADC2',
    rowTitleColor: "white",
    rowContentColor: '#cecece',
    arrowColor: "white",
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '50px',
    rowContentPaddingTop: '0px',
  };
  
  const config = {
    animate: true,
    tabFocus: true
  };


const JoinBanner = () => {
    return (

        <div className="join-page-container">
             <nav class="join-sidebar-nav join-sidebar" id="mySidebar"><br />
                    <h3 class="join-sidebar-fontsize">
                        <b>
                            Join Page
                        </b>
                    </h3>
                    <div class="w3-bar-block">
                        <a href={downloadFile} onclick="w3_close()" class="about-bar-item about-button about-hover-white">UCD Physical Form Download</a> 
                        <a href="https://rec.ucdavis.edu/" target="_blank" class="about-bar-item about-button about-hover-white">Fusion Insurance Link</a> 
                        <a href="https://campusrecreation.ucdavis.edu/dosportseasy" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">DoSportsEasy Link</a> 
                        <a href="https://forms.gle/Sw35m6A4aNDya26J7" target="_blank" onclick="w3_close()" class="about-bar-item about-button about-hover-white">Team Policy Acknowledgement</a> 
                    </div>
            </nav>
            <div class=' join-main' className='join-container-style'>

            <div class="join-container" className='join-class-style' id="showcase">
                <h1 class="join-jumbo-size"><b>Joining the Club</b></h1>
                <h1 class="join-secondary-font"><b>Steps.</b></h1>
                <hr/>
            </div>
            <p className='join-bold-paragraph'>
                As fall quarter approaches, we would like to let everyone know the steps 
                for becoming a member for the upcoming 2024-2025 school year! (Open to all
                current undergraduate and graduate student in UC Davis)
                </p>
            <div class="join-row-padding">
                <div class="join-col m4">
                    <div class="join-background1">   
                        <div class="join-container">
                        <h3>1. UCD Physical Form</h3>
                        <p class="join-opacity">Mandatory as of 2023</p>
                        <p className='join-paragraph'>
                            A completed physical form (see below) must be completed and uploaded to DSE by 
                        October 6th. You can have it completed by your primary care physician or other healthcare 
                        providers. If you wish to complete it at the UC Davis student health center, you can make 
                        an appointment through Health-e-Messaging or by calling (530) 752-2349.
                        </p>
                        <div className="join-links-container">
                        <Faq
                            data={ucdPhysForm}
                            styles={styles}
                            config={config}
                            className="faq-title"
                        />
                        </div>
                    </div>
                </div>
            </div>
                <div class="join-col m4">
                <div class="join-background1">
                    <div class="join-container">
                    <h3>2. Membership Dues</h3>
                    <p class="join-opacity">Quarterly / Yearly</p>
                    <p className='join-paragraph'>
                        An membership fee of $175 per year OR $65 per Quarter must be paid 
                        to one of our treasurers Jon/Kevin through Zelle (davisbadminton@gmail.com)
                        or cash by October 6th. <br />
                        When sending in your dues please comment
                        "Badminton Dues - [Your Name]". Note that dues are NON-REFUNDABLE.</p>
                    </div>
                    
                </div>
                </div>
                <div class="join-col m4">
                <div class="join-background1">
                    <div class="join-container">
                    <h3>3. Fusion Insurance</h3>
                    <p className="join-opacity">Insurance for UC Davis</p>
                    <p className='join-paragraph'>
                        This insurance is enforced across all UC Davis Sports Clubs. Scroll down to "Sports Club" 
                        then sign into your UC Davis account. Scroll down to "Sport Club (Badminton)" 
                        and pay the insurance fee. There is also a waiver for for the Fusion fee provided 
                        by the school (highly recommend and only takes 5 minutes to fill out!). 
                    </p>
                    <div className="join-links-container">
                        <Faq
                            data={fusionInsuranceLink}
                            styles={styles}
                            config={config}
                            className="faq-title"
                        />
                        </div>
                    </div>
                </div>
                </div>
                <div class="join-col m4">
                <div class="join-background1">
                    <div class="join-container">
                        <h3>4. Team Policy Acknowledgement Form</h3>
                        <p className="join-opacity">Agreement to Club Conduct</p>
                        <p className='join-paragraph'>To help ensure all players are kept safe, we are asking all active members to sign off
                            and agree to our Team Policy Acknowledgement. Signing off means that you have read and 
                            understood our Constitution and are accepting of your responsibilities as an active member 
                            of the Badminton Club at UC Davis. 
                        </p>
                        <div className="join-links-container">
                        <Faq
                            data={teamAckForm}
                            styles={styles}
                            config={config}
                            className="faq-title"
                        />
                        </div>
                    </div>
                </div>
                </div>
                <div class="join-col m4">
                <div class="join-background1">
                    <div class="join-container">
                    <h3>5. DoSportsEasy</h3>
                    <p className="join-opacity">Becoming an Official Member</p>
                    <p className='join-paragraph'>
                        Complete DoSportsEasy (DSE) by October 13th. This registration is enforced across all UC 
                        Davis Sports Clubs. To register follow the button link, 
                        scroll down to "Badminton" and click "Registration." Sign in to your UC Davis account and then 
                        fill out the registration form.
                        </p>
                        <div className="join-links-container">
                        <Faq
                            data={dseForm}
                            styles={styles}
                            config={config}
                            className="faq-title"
                        />
                        </div>
                    </div>
                </div>
                </div>
                <div class="join-col m4">
                <div class="join-background1">
                    <div class="join-container">
                    <h3>6. Questions / Concerns</h3>
                    <p className="join-opacity">For Prices, form completion, etc.</p>
                    <p className='join-paragraph'>
                        For whatever reason if the price of quarterly/yearly dues becomes an issue,
                        or there are difficulties with the forms, please contact any of the officers on 
                        <a href="https://discord.gg/bssTuRwBZx" class='join-link-highlight'> discord</a>, the 
                        <a href="https://www.instagram.com/badminton_ucd/" class='join-link-highlight'> instagram page</a>, or email
                         <a href= "mailto: davisbadminton@gmail.com" class='join-link-highlight'> davisbadminton@gmail.com</a> ! We
                        do not want these issues to stop you from participating in our events, so please let us help you with a solution!
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    )
  }
  
export default JoinBanner
