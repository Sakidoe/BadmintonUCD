import React from 'react';
import { useEffect, useState } from 'react';
import './yearpage.css'
import { StaticImage } from 'gatsby-plugin-image'

const YearPage = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [circlePosition, setCirclePosition] = useState('10%');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('.full-page-container');
        const timelineHeight = 80; // Percentage height of the timeline (80vh)
        const sectionHeight = 100 / sections.length; // Percentage height of each section
        let currentSection = 0;
  
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = index;
          }
        });
  
        setActiveSection(currentSection);
        setCirclePosition(`${10 + currentSection * sectionHeight * 0.8}%`); // Adjust the position within the 80% height
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="page-wrapper">
      <div className="full-page-container" data-section="0">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/first_practice_kinda.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>First Practice</b></h3>
                <h5>The First Practice of the year! <span className="w3-opacity">27 Sept, 2023</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  The first practice is very different from the rest, as it is more of an info session + getting used to 
                  the Davis courts! The turnout is usually higher than normal practices, and usually contains only officers
                  and new players.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/wild_ethan.jpg"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/bucd_courts.jpg"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/trimeet_all_pic.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>UCD X SJSU X UCSC Trimeet</b></h3>
                <h5>A 3-School match hosted at UC Davis <span className="w3-opacity">11 November, 2023</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/diana_alpha.jpg"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/ucd_at_cal.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>UCD x Berkeley Meet</b></h3>
                <h5>A meet against Cal Badminton, our first away game! <span className="w3-opacity">11 November, 2023</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                For our second meet, we took our very first away trip to Berkeley 
                for this meet! It was a close fight, and an extremely fun time for all. 
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w3-col l4 s12">
             <div className="image-stack">
              <StaticImage
                src="../../images/xin_rob_cal.jpg"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/bucd_bsc_social.jpeg"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div> */} 
        </div>
      </div>
      

      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/irvine_2022_team.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>Irvine Trip</b></h3>
                <h5> Our Annual Team trip to participate in the Anteater Open! <span className="w3-opacity">12-15 January, 2024</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/irvine_collage.PNG"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/irvine_2022_team.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>Irvine Trip</b></h3>
                <h5> Our Annual Team trip to participate in the Anteater Open! <span className="w3-opacity">12-15 January, 2024</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/irvine_collage.PNG"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/irvine_2022_team.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>Irvine Trip</b></h3>
                <h5> Our Annual Team trip to participate in the Anteater Open! <span className="w3-opacity">12-15 January, 2024</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/irvine_collage.PNG"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/irvine_2022_team.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>Irvine Trip</b></h3>
                <h5> Our Annual Team trip to participate in the Anteater Open! <span className="w3-opacity">12-15 January, 2024</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/irvine_collage.PNG"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-container" data-section="1">
        <div className="w3-content">
          <div className="w3-col l8 s12">
            <div className="w3-card-4 w3-margin w3-white">
              <StaticImage
                src="../../images/irvine_2022_team.jpg"
                className="timeline-images2"
              />
              <div className="w3-container">
                <h3><b>Irvine Trip</b></h3>
                <h5> Our Annual Team trip to participate in the Anteater Open! <span className="w3-opacity">12-15 January, 2024</span></h5>
              </div>

              <div className="w3-container">
                <p className="timeline2-yap">
                  For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                  and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                  schools for coming out an playing!
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l4 s12">
            <div className="image-stack">
              <StaticImage
                src="../../images/irvine_collage.PNG"
                className="timeline-test-photos"
              />
              <p className="timeline2-yap2">
                It was our very first practice! Like always, week 0 is free for all.
              </p>
              <StaticImage
                src="../../images/trimeet_after.png"
                className="timeline-test-photos"
              />
              <p className='timeline2-yap2'>
                Our practices are always hosted @ Hickey Gym! It has 8 courts, and for the first
                few practices we organize it with supervision to ensure all members understand the system.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Vertical Timeline */}
      <div className="vertical-timeline">
        <div
          className="timeline-point"
          style={{ top: circlePosition }}
        ></div>
      </div>
    </div>
  )
}

export default YearPage
