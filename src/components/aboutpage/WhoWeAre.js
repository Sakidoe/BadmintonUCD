import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './whoweare.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const WhoWeAre = () => {

  const images = [
    "../../images/ray.jpeg",
    "../../images/Davis_Open_Xin.jpg",
    "../../images/2022_team_fullpic.jpg",
  ];

  return (
    <div>
        {/*nav side bar*/}
        <nav class="about-sidebar-nav about-sidebar about-background1 about-position" id="mySidebar"><br />
            <div class="about-container-sidebar">
                <h3 class="about-padding-64"><b>About Us</b></h3>
            </div>
            <div class="about-bar-block">
                <a href="#"  class="about-bar-item about-button about-hover-white">Home</a> 
                <a href="#who-we-are"  class="about-bar-item about-button about-hover-white">Who We Are</a> 
                <a href="#events"  class="about-bar-item about-button about-hover-white">Events</a> 
                <a href="#davis_open" class="about-bar-item about-button about-hover-white">Davis Open</a> 
            </div>
        </nav>
<div class='about-main' className='about-container-style'>

  <div class="about-container" className='about-class-style' id="showcase">
    <h1 class="about-large-font"><b>Badminton Club at UC Davis</b></h1>
    <h1 class="about-showcase-font about-font-color"><b>Showcase.</b></h1>
    <hr />
  </div>
  {/*showcase*/}
  <div className="test-div">
  <Slide className="about-slideshow">
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/ray.jpeg"
        className='about-photo-frame1'
        />
    </div>
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/Davis_Open_Xin.jpg"
        className='about-photo-frame1'
        />
    </div>
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/2022_team_fullpic.jpg"
        className='about-photo-frame1'
        />
    </div>
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/bucd_bsc_social.jpeg"
        className='about-photo-frame1'
        />
    </div>
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/bucd_kevin_smash.jpg"
        className='about-photo-frame1'
        />
    </div>
    <div className="each-slide-effect">
      <StaticImage
        src="../../images/bucd_formal_funny.jpg"
        className='about-photo-frame1'
        />
    </div>
    </Slide>
    </div>
  <div class="about-showcase-grid">
    <div class="showcase-div1">
      <StaticImage
      src="../../images/ray.jpeg"
       className='about-photo-frame1'
      />
      </div>
      <div class="showcase-div2">
      <StaticImage
      src="../../images/Davis_Open_Xin.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="showcase-div3">
      <StaticImage
      src="../../images/2022_team_fullpic.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="showcase-div4">
      <StaticImage
      src="../../images/bucd_bsc_social.jpeg"
       className='about-photo-frame1'
      />
      </div>
      <div class="showcase-div5">
      <StaticImage
      src="../../images/bucd_kevin_smash.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="showcase-div6">
      <StaticImage
      src="../../images/bucd_formal_funny.jpg"
       className='about-photo-frame1'
      />
      </div>
  </div> 

  <div class="about-container" className='area1-style' id="who-we-are">
    <h1 class="about-xxxlarge-font about-font-color"><b>Who We Are</b></h1>
    <hr />
    <p className='about-bold-paragraph'>Our Mission: “Provide access to badminton 
    facilities for students to come together, fostering good sportsmanship and 
    leadership skills at all levels”</p>
    <p className='about-paragraph'>Our Goals:
    </p>
  </div>
  
  <div class="about-row-padding">
    <div class="about-column-settings">
      <div class="about-section-background">
      <StaticImage
      src="../../images/bucd_2021_bonding1.JPG"
      className="about-photo-frame2"
      />
      
        <div class="about-container">
          <h3>Team Bonding</h3>
          <p class="about-opacity">Comaraderie</p>
          <p className='about-paragraph'>
            As a team, we want to create an environment for members to find 
            lifelong friends. From quarterly bonding events, meetups,
             and many boba trips, we prioritize our members to learn
           and grow with each other as one team.</p>
        </div>
      </div>
    </div>
    <div class="about-column-settings">
      <div class="about-section-background">
        <StaticImage
        src="../../images/davis_open_team.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Community</h3>
          <p class="about-opacity">Leadership & Etiquette</p>
          <p className='about-paragraph'>As apart of the badminton community, 
          we want to maintain a healthy relationship with other school clubs,
           as well as other associations within California. We consistently 
           host school meets against other local schools, notably SJSU, UCSC, 
           Stanford, and UC Berkeley. We also encourage club members to attend 
           local tournaments, as well as aid in creating our own.</p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/diana_alpha.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Victory</h3>
          <p class="about-opacity">Training & Competition</p>
          <p>Our vision for the club is to win the National Collegiate Championships. 
            To do this, our weekly practices promote members to match with others who 
            are at their level. We want our players to be the best that they can be, 
            with access to peers who are willing to help each other improve.</p>
        </div>
      </div>
    </div>
    {/* <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/bucd_courts.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Resources</h3>
          <p class="about-opacity">Birds, Courts, & Teammates!</p>
          <p>To help our members have a seamless experience while playing badminton, 
            we offer many accomodations for them. This includes free birds for every match,
             an abundance of courts to play on, and contacts in case of stringing needs or 
             for new gear.</p>
        </div>
      </div>
    </div> */}
  </div>
  
  <div class="about-container" className='area1-style' id="events">
    <h1 class="about-xxxlarge-font about-font-color"><b>Events</b></h1>
    <hr />
    <p className='about-bold-paragraph'>fun fun fun fun fun!</p>
    <p className='about-paragraph'>
    Each year, our team holds several events for all members to take apart in. 
    Below you can find a list
    of all of them that we plan to have every single year!
    </p>
  </div>

  <div class="about-row-padding">
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
      src="../../images/wild_ethan.jpg"
      className="about-photo-frame2"
      />
      
        <div class="about-container">
          <h3>Weekly Practices</h3>
          <p class="about-opacity">Mon, Wed, Fri @ Hickey Gym</p>
          <p className='about-paragraph'>
            Each week, the BCUCD holds 3 practices in an open gym style. Each court 
            has its own system of play to accomodate for every level of play. From 
            challenge courts for people to challenge higher level players to open gym 
            signup style courts for beginners to play, all levels of players get a 
            chance to play! Birds are given out to all members per match, with safety 
          officers and other officers there to supervise conduct and play.</p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
        <StaticImage
        src="../../images/stanford.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>School Meets</h3>
          <p class="about-opacity">Home & Away Games against Schools.</p>
          <p className='about-paragraph'>
            Each quarter, we aim to hold 2 or more meets, 
            sometimes even trimeets. Each school team sends in a team 
            ranking and a roster list, where members with the same 
            rankings in their respective events play against each other 
            for points. Most points out of the schools wins! 
            </p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/ucd_x_berk_social.png"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Bonding Events</h3>
          <p class="about-opacity">Team Building and Lasting Memories</p>
          <p>
            To push members to meet and bond with each other, 
            our event coordinators create many opportunities inside 
            and outside badminton for members to come and meet each other! 
            Events that we have created in the past include a Six Flags trip,
             MU Game Room trips, group Karaoke, Night Market, and so much more.</p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/irvine2022_dinner.jpeg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Irvine Trip</h3>
          <p class="about-opacity">Annual Road Trip Tradition</p>
          <p>
            A longstanding tradition of this club is to take a team road trip to Irvine
             to participate in the annual Irvine collegiate tournament! By coordinating 
             travel plans, AirBnBs and food accomodations, we want this trip to be a core
              memory for all members of our club. Members tend to split into groups to 
              participate in the tournament, or to explore the city, and come back to 
              reconvene with everyone for night bonding activities!
              </p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/boston_photo.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Collegiate Championships</h3>
          <p class="about-opacity">Playing Against Other Schools in Boston</p>
          <p>
            Beginning in 2024, California has been invited to participate in the USA 
            Badminton Collegiate Nationals, hosted in Boston. Two times a year, 
            we participate in a Northern California Regional Tournament to fight 
            for 1 of 3 spots to represent NorCal at the nationals. We are reigning 
            regional champions this year, and are pushing to defend our titles next year!
            </p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/bucd_banquet_team.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Year-End-Banquet</h3>
          <p class="about-opacity">Celebrating the Fun Times in the Year</p>
          <p>At the end of the year, the club hosts a member-exclusive year-end 
            banquet to commemorate the memories and friends made throughout the year. 
            Catered by restaurants like Panda Express, Chipotle, or Guads Tacos & Beer, 
            it is a celebratory event that all members come formally dressed to attend. 
            
             </p>
        </div>
      </div>
    </div>
    </div>
    <div class="about-container" className='area1-style' id="davis_open">
    <h1 class="about-xxxlarge-font about-font-color"><b>Davis Open</b></h1>
    <hr />
    <p className='about-bold-paragraph'>
        The Largest Northern California Badminton Tournament, with over 400 entries and 20 events.
    </p>
  </div>
    <hr />
  
  <div class="davis-open-grid">
    <div class="DO-div1">
      <StaticImage
      src="../../images/davis_open_bianca_justin.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="DO-div2">
      <StaticImage
      src="../../images/davis_open_steffi_josh.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="DO-div3">
      <StaticImage
      src="../../images/Davis_Open_Photo1.jpg"
       className='about-photo-frame1'
      />
      </div>
      <div class="DO-div4">
      <StaticImage
      src="../../images/davis_open_tiff.jpg"
       className='about-photo-frame1'
      />
      </div>
  </div>
  <p className='DO-info'>Davis Open Services:</p>
  
  <div class="about-row-padding">
    {/* <div class="about-column-settings  ">
        <div class="about-section-background">
            <StaticImage
            src="../../images/2022_davis_open_logo.png"
            className='about-photo-frame2'
            />
            <div class="about-container">
            <h3>Shirts</h3>
            <p class="about-opacity">Cute & Iconic : )</p>
            <p className='about-paragraph'>Each year, the Davis Open shirts are available to pre-order or purchase the day of the tournament. With incredibly cute designs coupled with unique pastel colors, the Davis Open cotton shirts have been an iconic part of this event.</p>
            </div>
        </div>
        </div> */}
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
      src="../../images/u_center.jpeg"
      className="about-photo-frame2"
      />
      
        <div class="about-container">
          <h3>Credit Union Center</h3>
          <p class="about-opacity">Stadium Environment</p>
          <p className='about-paragraph'>
          Hosted in the prestigious and professional Credit Union Center,
           the Davis Open provides comptetitors a truly inspiring environment to play. 
           With over 13 courts, unintrusive lighting, and a strong and coherent sound
           system, it is the most optimal location to host a badminton tournament.</p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/davis_open_team.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Student Ran</h3>
          <p class="about-opacity">Club Coordinated</p>
          <p>Ran by the Badminton Club at UC Davis, all scheduling,
            marketing, and tournament operations are completely student ran. 
            Led by players and organizers of the tournament of several years, 
            we strive to show our leadership and mentorship abilities to seamlessly
            operate this massive competition.
            </p>
        </div>
      </div>
    </div>
    <div class="about-column-settings  ">
      <div class="about-section-background">
      <StaticImage
        src="../../images/Davis_Open_Charlie.jpg"
         className='about-photo-frame2'
        />
        <div class="about-container">
          <h3>Awards</h3>
          <p class="about-opacity">Themed Trophies and Cash Prizes</p>
          <p>
            From Davis-themed trophies, cash prizes, and shirts, the Davis Open offers
            many unique awards for it's players!
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default WhoWeAre
