import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './whoweare.css'

const WhoWeAre = () => {
  return (
    
    <div>
        
        <nav class="sidebar-nav w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" id="mySidebar"><br />
            <a href="javascript:void(0)" onclick="w3_close()" class="sidebar-ref w3-button w3-hide-large w3-display-topleft" >Close Menu</a>
            <div class="w3-container">
                <h3 class="w3-padding-64"><b>About Us</b></h3>
            </div>
            <div class="w3-bar-block">
                <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
                <a href="#services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Who We Are</a> 
                <a href="#designers" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Events</a> 
                <a href="#davis_open" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Davis Open</a> 
            </div>
        </nav>
<div class=' w3-main' className='about-container-style'>

  <div class="w3-container" className='about-class-style' id="showcase">
    <h1 class="w3-jumbo"><b>Badminton Club at UC Davis</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>Showcase.</b></h1>
    <hr className= 'w3-round'/>
  </div>
  <div class="w3-showcase-grid">
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

  <div class="w3-container" className='area1-style' id="services">
    <h1 class="w3-xxxlarge w3-text-red"><b>Who We Are.</b></h1>
    <hr className= 'w3-round'/>
    <p className='about-bold-paragraph'>Our Mission: “Provide access to badminton facilities for students to come together, fostering good sportsmanship and leadership skills at all levels”</p>
    <p className='about-paragraph'>Our Goals:
    </p>
  </div>
  
  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
      src="../../images/bucd_2021_bonding1.JPG"
      className="about-photo-frame2"
      />
      
        <div class="w3-container">
          <h3>Team Bonding</h3>
          <p class="w3-opacity">Comaraderie</p>
          <p className='about-paragraph'>
            As a team, we want to create an environment for members to find lifelong friends. From quarterly bonding events, meetups, and many boba trips, we prioritize our members to learn
           and grow with each other as one team.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
        <StaticImage
        src="../../images/davis_open_team.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Community</h3>
          <p class="w3-opacity">Leadership & Etiquette</p>
          <p className='about-paragraph'>As apart of the badminton community, we want to maintain a healthy relationship with other school clubs, as well as other associations within California. We consistently host school meets against other local schools, notably SJSU, UCSC, Stanford, and UC Berkeley. We also encourage club members to attend local tournaments, as well as aid in creating our own.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/diana_alpha.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Victory</h3>
          <p class="w3-opacity">Training & Competition</p>
          <p>Our vision for the club is to win the National Collegiate Championships. To do this, our weekly practices promote members to match with others who are at their level. We want our players to be the best that they can be, with access to peers who are willing to help each other improve.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/bucd_courts.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Resources</h3>
          <p class="w3-opacity">Birds, Courts, & Teammates!</p>
          <p>To help our members have a seamless experience while playing badminton, we offer many accomodations for them. This includes free birds for every match, an abundance of courts to play on, and contacts in case of stringing needs or for new gear.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="w3-container" className='area1-style' id="designers">
    <h1 class="w3-xxxlarge w3-text-red"><b>Events.</b></h1>
    <hr className= 'w3-round'/>
    <p className='about-bold-paragraph'>fun fun fun fun fun!</p>
    <p className='about-paragraph'>
    Each year, our team holds several events for all members to take apart in. 
    Below you can find a list
    of all of them that we plan to have every single year!
    </p>
  </div>

  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
      src="../../images/sid_jon.png"
      className="about-photo-frame2"
      />
      
        <div class="w3-container">
          <h3>Weekly Practices</h3>
          <p class="w3-opacity">Mon, Wed, Fri @ Hickey Gym</p>
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
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
        <StaticImage
        src="../../images/stanford.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>School Meets</h3>
          <p class="w3-opacity">Home & Away Games against Schools.</p>
          <p className='about-paragraph'>
            Each quarter, we aim to hold 2 or more meets, 
            sometimes even trimeets. Each school team sends in a team 
            ranking and a roster list, where members with the same 
            rankings in their respective events play against each other 
            for points. Most points out of the schools wins! The 
            Badminton Club at UC Davis will host these meets sometimes, 
            but we also take team trips to other colleges and gyms to be hosted!
            </p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/ucd_x_berk_social.png"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Bonding Events</h3>
          <p class="w3-opacity">Team Building and Lasting Memories</p>
          <p>
            To push members to meet and bond with each other, 
            our event coordinators create many opportunities inside 
            and outside badminton for members to come and meet each other! 
            Events that we have created in the past include a Six Flags trip,
             MU Game Room trips, group Karaoke, Night Market, and so much more.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/irvine2022_dinner.jpeg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Irvine Trip</h3>
          <p class="w3-opacity">Annual Road Trip Tradition</p>
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
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/boston_photo.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Collegiate Championships</h3>
          <p class="w3-opacity">Playing Against Other Schools in Boston</p>
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
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/bucd_banquet_team.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Year-End-Banquet</h3>
          <p class="w3-opacity">Celebrating the Fun Times in the Year</p>
          <p>At the end of the year, the club hosts a member-exclusive year-end 
            banquet to commemorate the memories and friends made throughout the year. 
            Catered by restaurants like Panda Express, Chipotle, or Guads Tacos & Beer, 
            it is a celebratory event that all members come formally dressed to attend. 
            Events include saying goodbye to graduating members, unveiling new officers,
             and presenting superlatives.
             </p>
        </div>
      </div>
    </div>
    </div>
    <div class="w3-container" className='area1-style' id="davis_open">
    <h1 class="w3-xxxlarge w3-text-red"><b>Davis Open</b></h1>
    <hr className= 'w3-round'/>
    <p className='about-bold-paragraph'>
        The Largest Northern California Badminton Tournament, with over 400 entries and 20 events.
    </p>
  </div>
    <hr className= 'w3-round'/>
  
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
  <p></p>
  
  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col m4 w3-margin-bottom">
        <div class="w3-light-grey">
            <StaticImage
            src="../../images/2022_davis_open_logo.png"
            className='about-photo-frame2'
            />
            <div class="w3-container">
            <h3>Shirts</h3>
            <p class="w3-opacity">Cute & Iconic : )</p>
            <p className='about-paragraph'>Each year, the Davis Open shirts are available to pre-order or purchase the day of the tournament. With incredibly cute designs coupled with unique pastel colors, the Davis Open cotton shirts have been an iconic part of this event.</p>
            </div>
        </div>
        </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
      src="../../images/u_center.jpeg"
      className="about-photo-frame2"
      />
      
        <div class="w3-container">
          <h3>Credit Union Center</h3>
          <p class="w3-opacity">Stadium Environment</p>
          <p className='about-paragraph'>
          Hosted in the prestigious and professional Credit Union Center,
           the Davis Open provides comptetitors a truly inspiring environment to play. 
           With over 13 courts, unintrusive lighting, and a strong and coherent sound
           system, it is the most optimal location to host a badminton tournament.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/davis_open_team.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Student Ran</h3>
          <p class="w3-opacity">Club Coordinated</p>
          <p>Ran by the Badminton Club at UC Davis, all scheduling,
            marketing, and tournament operations are completely student ran. 
            Led by players and organizers of the tournament of several years, 
            we strive to show our leadership and mentorship abilities to seamlessly
            operate this massive competition.
            </p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom">
      <div class="w3-light-grey">
      <StaticImage
        src="../../images/Davis_Open_Charlie.jpg"
         className='about-photo-frame2'
        />
        <div class="w3-container">
          <h3>Awards</h3>
          <p class="w3-opacity">Themed Trophies and Cash Prizes</p>
          <p>At this tournament, we offer unique Davis themed trophies that are truly 
            unique to earn. Competitors from A-consolations, B, C, and D flight levels 
            may earn a trophy, while the 1st and 2nd place of A receive cash prizes!
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  
    // <div>
    //     <div className="who-we-are-container">
    //         <nav className="who-we-are">
    //             <h1 className="title-text">Who We Are</h1>
    //             <p className="test2">Our Mission: “Provide access to badminton facilities for students to come together, fostering good sportsmanship and leadership skills at all levels”</p>
    //         </nav>
    //         <div className="photo-container">
    //             <StaticImage
    //             alt="The 23'-24' Badminton UCD Team Photo"
    //             src="../../images/bucd_formal_funny.jpg"
    //             className="who-we-are-photo"
    //             />
    //             <StaticImage
    //             alt="The 23'-24' Badminton UCD Team Photo"
    //             src="../../images/bucd_grads_funny.jpg"
    //             className="who-we-are-photo"
    //             />
    //             <StaticImage
    //             alt="The 23'-24' Badminton UCD Team Photo"
    //             src="../../images/bucd_kevin_smash.jpg"
    //             className="who-we-are-photo"
    //             />
    //             <StaticImage
    //             alt="The 23'-24' Badminton UCD Team Photo"
    //             src="../../images/bucd_bsc_social.jpeg"
    //             className="who-we-are-photo"
    //             />
    //         </div>
    //     </div>
    //     <div className="who-we-are2-container">
    //         <nav className="goals">
    //             <h1 className="title-text">Our Goals</h1>
    //         </nav>
    //         <div className = "goals-list">
    //             <nav className="team-bonding">
    //                 <h1 className="goal-title-text">Team Bonding</h1>
    //                 <StaticImage
    //                 alt="The 23'-24' Badminton UCD Team Photo"
    //                 src="../../images/bucd_2021_bonding1.JPG"
    //                 className="who-we-are-photo"
    //                 />
    //                 <p className="g1">
    //                     As a team, we want to create an environment for members to find lifelong friends. 
    //                     From quarterly bonding events, meetups, and many boba trips,
    //                     we prioritize our members to learn and grow with each other as one team.
    //                 </p>
    //             </nav>
    //             <nav className="community">
    //                 <h1 className="goal-title-text">Community</h1>
    //                 <StaticImage
    //                 alt="The 23'-24' Badminton UCD Team Photo"
    //                 src="../../images/bucd_berkeley_meet.jpg"
    //                 className="who-we-are-photo"
    //                 />
    //                 <p className="g1">
    //                     As apart of the badminton community, we want to maintain a healthy relationship
    //                     with other school clubs, as well as other associations within California. We
    //                     consistently host school meets against other local schools, notably SJSU, UCSC,
    //                     Stanford, and UC Berkeley. We also encourage club members to attend local tournaments,
    //                     as well as aid in creating our own.
    //                 </p>
    //             </nav>
    //             <nav className="Victory">
    //                 <h1 className="goal-title-text">Victory</h1>
    //                 <StaticImage
    //                 alt="The 23'-24' Badminton UCD Team Photo"
    //                 src="../../images/bucd_collegiate_pic.jpg"
    //                 className="who-we-are-photo"
    //                 />
    //                 <p className="g1">
    //                     Our vision for our club is to win the National Collegiate Championships. To do this,
    //                     our weekly practices promote members to match with others who are at their level.
    //                     We want our players to be the best that they can be, with access to peers who are
    //                      willing to help each other improve.
    //                 </p>
    //             </nav>
    //             <nav className="resources">
    //                 <h1 className="goal-title-text">Resources</h1>
    //                 <StaticImage
    //                 alt="The 23'-24' Badminton UCD Team Photo"
    //                 src="../../images/bucd_courts.jpg"
    //                 className="who-we-are-photo"
    //                 />
    //                 <p className="g1">
    //                     To help our members have a seamless experience while playing badminton, we offer 
    //                     many accomodations for them. This includes free birds for every match, an abundance 
    //                     of courts to play on, and contacts in case of stringing needs or for new gear.
    //                 </p>
    //             </nav>
    //         </div>
    //     </div>
    // </div>
  )
}

export default WhoWeAre
