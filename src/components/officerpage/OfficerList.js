import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './officerlist.css';
import OfficerModal from './officerModal'; // Ensure this is the correct path and capitalization
import firstPractice from '../../images/first_practice_kinda.jpg';
import ucdAtCalImage from '../../images/ucd_at_cal.jpg';
import trimeetPic from '../../images/trimeet_all_pic.jpg';
import irvinePic from '../../images/irvine_2022_team.jpg';
import stanfordPic from '../../images/stanford.jpg';
import norcalPic from '../../images/bucd_kevin_smash.jpg';
import bostonPic from '../../images/boston_photo.jpg';
import interclubPic from '../../images/davis_interclub_AMD.jpg';
import davisopenPic from '../../images/Davis_Open_Photo1.jpg';
import banquetPic from '../../images/bucd_banquet_team.jpg';
import richardHorizontal from '../../images/richard_horizontal.png';
import cooper from '../../images/cooper.png';
import jeremyHorizontal from '../../images/officer_horizontal_jeremy.png';
import steffiHorizontal from '../../images/officer_horizontal_steffi.png';
import ethanHorizontal from '../../images/officer_horizontal_ethan.jpg';
import claudiaHorizontal from '../../images/officer_horizontal_claudia.jpeg';
import joyHorizontal from '../../images/officer_horizontal_joy.jpg';
import irisHorizontal from '../../images/officer_horizontal_iris.jpg';
import kevinHorizontal from '../../images/bucd_kevin_smash.jpg';
import jonHorizontal from '../../images/officer_horizontal_jon.jpg';
import adrianHorizontal from '../../images/officer_horizontal_adrian.jpeg';

const DavisOpen = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleShowModal = (modalId) => {
    setActiveModal(modalId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const [activeSection, setActiveSection] = useState(0);
  const [circlePosition, setCirclePosition] = useState('10%');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.full-page-container');
      const timelineHeight = 80;
      const sectionHeight = 100 / sections.length;
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
    <div>
      <div className="davis-open-container">
        <div className="officer-title-container">
          <h1 className="DO-title-text">24'-25' BCUCD OFFICERS</h1>
          <p className="DO-title-description">Introducing our 2024 - 2025 Badminton Club Officers! (Click on the photos!)</p>
          <hr className='officer-title-bar'/>
        </div>
        <div className="DO-photo-container">
          <nav className="officer-cell" onClick={() => handleShowModal('ethan')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_ethan2.jpeg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Ethan Chen</p>
                <p className="officer-title-hovering">President</p>
              </div>
            </div>
            <p className="officer-name">Ethan Chen</p>
                <p className="officer-title">President</p>
                <p className="officer-info">Year: Senior</p>
                <p className="officer-info">Major: Chemistry</p>
          </nav>
          <OfficerModal
            show={activeModal === 'ethan'}
            onClose={handleCloseModal}
            imageSrc={ethanHorizontal}
            title="Ethan Chen"
            secondary="President"
            text="Hey everyone! I'm Ethan and I'm a fourth year chemistry major at Davis! I'll be your club president for the 2024-25 school year and I'm excited to meet everyone!"
            text2="I grew up in the Bay but I also spent a few years in Taiwan. I've been playing badminton since high school and it's been nothing but wonderful meeting everyone in the community."
          />

          <nav className="officer-cell" onClick={() => handleShowModal('claudia')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_claudia2.jpeg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Claudia Xu</p>
                <p className="officer-title-hovering">Vice President</p>

              </div>
            </div>
            <p className="officer-name">Claudia Xu</p>
            <p className="officer-title">Vice President</p>
            <p className="officer-info">Year: Senior</p>
            <p className="officer-info">Major: Animal Science</p>
          </nav>
          <OfficerModal
            show={activeModal === 'claudia'}
            onClose={handleCloseModal}
            imageSrc={claudiaHorizontal}
            title="Claudia Xu"
            secondary="Vice President"
            text="Hello friends! My name is Claudia and I’m a fourth year Animal Science Major who LOVES dogs, capybaras, and white bread"
            text2='Outside of badminton I enjoy baking, making matcha lattes, eating yummy foods, and sharing fruits with my dog 😃'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('joy')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_joy.png"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Joy Yang</p>
                <p className="officer-title-hovering">Secretary & Safety Officer</p>
 
              </div>
            </div>
            <p className="officer-name">Joy Yang</p>
            <p className="officer-title">Secretary & Safety Officer</p>
            <p className="officer-info">Year: Senior</p>
            <p className="officer-info">Major: MPB</p>
          </nav>
          <OfficerModal
            show={activeModal === 'joy'}
            onClose={handleCloseModal}
            imageSrc={joyHorizontal}
            title="Joy Yang"
            secondary="Secretary"
            text="Hi everyone, I'm Joy, and I'll be serving as your secretary for 2025-2026. Please feel free reach out with any questions or just to chat! :) I've been playing badminton since high school, and it's become a big part of my active lifestyle."
            text2="Joining the badminton club has connected me with incredible people and opportunities, and I can't wait to welcome the new cohort to our amazing community!"
          />

          <nav className="officer-cell" onClick={() => handleShowModal('kevin')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_kevin.jpg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Kevin Cuan</p>
                <p className="officer-title-hovering">Treasurer</p>

              </div>
            </div>
            <p className="officer-name">Kevin Cuan</p>
            <p className="officer-title">Treasurer</p>
            <p className="officer-info">Year: Junior</p>
            <p className="officer-info">Major: Math, Psychology</p>
          </nav>
          <OfficerModal
            show={activeModal === 'kevin'}
            onClose={handleCloseModal}
            imageSrc={kevinHorizontal}
            title="Kevin Cuan"
            secondary="Treasurer"
            text="Hey guys! I’m Kevin, a third year studying Math and Psychology here at UCD. I’ve been training badminton since high school and am excited to be able to help out the community at the badminton club by serving as a Treasurer this year."
            text2='I’m looking forward to seeing all the new talent this new year brings, and the new memories we can create!'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('jon')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_jon.png"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Jon Moser</p>
                <p className="officer-title-hovering">Treasurer</p>
              </div>
            </div>
            <p className="officer-name">Jon Moser</p>
            <p className="officer-title">Treasurer</p>
            <p className="officer-info">Year: Sophomore</p>
            <p className="officer-info">Major: NPB</p>
          </nav>
          <OfficerModal
            show={activeModal === 'jon'}
            onClose={handleCloseModal}
            imageSrc={jonHorizontal}
            title="Jon Moser"
            secondary="Treasurer"
            text="Hey everyone I’m Jon! I am a second year majoring in Neurobiology, Physiology, and Behavior at UC Davis. I will be the other treasurer for the 2024-2025 season! I grew up playing badminton in the Bay which I have been doing for about 10 years, where I got to meet and play against so many fun and passionate players."
            text2='For this season I am excited to share and experience this sport with all the newcomers and returners again!'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('iris')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_iris2.jpg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Iris Lee</p>
                <p className="officer-title-hovering">Fundraising Coordinator</p>
              </div>
            </div>
            <p className="officer-name">Iris Lee</p>
            <p className="officer-title">Fundraising Coordinator</p>
            <p className="officer-info">Year: Masters</p>
            <p className="officer-info">Major: Nutritional Biology</p>
          </nav>
          <OfficerModal
            show={activeModal === 'iris'}
            onClose={handleCloseModal}
            imageSrc={irisHorizontal}
            title="Iris Lee"
            secondary="Fundraising Coordinator"
            text="Hi everyone! I'm Iris and I'm a first year master’s student studying Nutritional Biology. I grew up in the Bay and have been playing badminton since high school."
            text2="I am looking forward to supporting our badminton club as this year’s fundraising coordinator!"
          />

          <nav className="officer-cell" onClick={() => handleShowModal('steffi')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_steffi.png"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Steffi Ling</p>
                <p className="officer-title-hovering">Event Coordinator</p>
              </div>
            </div>
            <p className="officer-name">Steffi Ling</p>
            <p className="officer-title">Event Coordinator</p>
            <p className="officer-info">Year: Junior</p>
            <p className="officer-info">Major: Managerial Economics</p>
          </nav>
          <OfficerModal
            show={activeModal === 'steffi'}
            onClose={handleCloseModal}
            imageSrc={steffiHorizontal}
            title="Steffi Ling"
            secondary="Event Coordinator"
            text="Hi everyone, my name is Steffi and I’m this year’s Event Coordinator for the badminton club!"
            text2='Outside of playing badminton, I love trying new desserts with friends and online shopping'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('adrian')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_adrian.jpeg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Adrian Lam</p>
                <p className="officer-title-hovering">Event Coordinator</p>

              </div>
            </div>
            <p className="officer-name">Adrian Lam</p>
                <p className="officer-title">Event Coordinator</p>
                <p className="officer-info">Year: Senior</p>
                <p className="officer-info">Major: Computer Science</p>
          </nav>
          <OfficerModal
            show={activeModal === 'adrian'}
            onClose={handleCloseModal}
            imageSrc={adrianHorizontal}
            title="Adrian Lam"
            secondary="Event Coordinator"
            text=" Sup y’all. I’m Adrian and I’ll be one of your event coordinators for 2025-2026. I’m a 4th year Computer Science and Statistics student at Davis. I’ve been playing badminton since high school and I hope to meet lots of new faces this year and make tons of memories."
            text2="Feel free to contact me if you have any questions. See y’all on the courts! 😀"
          />

          <nav className="officer-cell" onClick={() => handleShowModal('jeremy')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_jeremy.png"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Jeremy Leung</p>
                <p className="officer-title-hovering">Travel Coordinator & Safety Officer</p>
              </div>

            </div>
            <p className="officer-name">Jeremy Leung</p>
                <p className="officer-title">Travel Coordinator & Safety Officer</p>
                <p className="officer-info">Year: Junior</p>
                <p className="officer-info">Major: Animal Science</p>
          </nav>
          <OfficerModal
            show={activeModal === 'jeremy'}
            onClose={handleCloseModal}
            imageSrc={jeremyHorizontal}
            title="Jeremy Leung"
            secondary="Travel Coordinator"
            text="Hey guys! I’m Jeremy and I’m a 3rd year studying animal science and public health with aspirations of becoming a veterinarian!"
            text2="I’ve been playing badminton for over 6 years and am so excited to be a part of the officer team this year!"
          />

          <nav className="officer-cell" onClick={() => handleShowModal('richard')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_richard2.jpg"
                className="officer-photo"
              />
              <div className="officer-photo-overlay">
                <p className="officer-name">Richard Huang</p>
                <p className="officer-title-hovering">Publicity Coordinator</p>
              </div>
              </div>
              <p className="officer-name">Richard Huang</p>
            <p className="officer-title">Publicity Coordinator</p>
            <p className="officer-info">Year: Senior</p>
            <p className="officer-info">Major: Computer Science and Engineering</p>
          </nav>
          <OfficerModal
            show={activeModal === 'richard'}
            onClose={handleCloseModal}
            imageSrc={richardHorizontal}
            title="Richard Huang"
            secondary="Publicity Coordinator"
            text="Hey y'all, I'm Richard, a senior studying Comp Sci + Eng here in UC Davis! I've been
                apart of the team for the past 3 years, and I can't wait to be an officer again this year!
                "
            text2="Outside of badminton I like to grind out in coding projects, and hang out with my friends
                with food.:)"
          />
        </div>
      </div>
    </div>
  );
};

export default DavisOpen;
