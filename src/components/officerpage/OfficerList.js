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
            imageSrc={cooper}
            title="Ethan Chen"
            secondary="President"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('claudia')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_claudia.png"
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
            imageSrc={cooper}
            title="Claudia Xu"
            secondary="Vice President"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
                <p className="officer-title-hovering">Secretary</p>
 
              </div>
            </div>
            <p className="officer-name">Joy Yang</p>
            <p className="officer-title">Secretary</p>
            <p className="officer-info">Year: Senior</p>
            <p className="officer-info">Major: MPB</p>
          </nav>

          <OfficerModal
            show={activeModal === 'joy'}
            onClose={handleCloseModal}
            imageSrc={cooper}
            title="Joy Yang"
            secondary="Secretary"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
            imageSrc={cooper}
            title="Kevin Cuan"
            secondary="Treasurer"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
            <p className="officer-info">Major: Bintang Coach</p>
          </nav>

          <OfficerModal
            show={activeModal === 'jon'}
            onClose={handleCloseModal}
            imageSrc={cooper}
            title="Jon Moser"
            secondary="Treasurer"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('iris')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_iris.png"
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
            imageSrc={cooper}
            title="Iris Lee"
            secondary="Fundraising Coordinator"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
            imageSrc={cooper}
            title="Steffi Ling"
            secondary="Event Coordinator"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
            imageSrc={cooper}
            title="Adrian Lam"
            secondary="Event Coordinator"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
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
                <p className="officer-title-hovering">Travel Coordinator</p>
              </div>

            </div>
            <p className="officer-name">Jeremy Leung</p>
                <p className="officer-title">Travel Coordinator</p>
                <p className="officer-info">Year: Junior</p>
                <p className="officer-info">Major: Animal Science</p>
          </nav>

          <OfficerModal
            show={activeModal === 'jeremy'}
            onClose={handleCloseModal}
            imageSrc={cooper}
            title="Jeremy Leung"
            secondary="Travel Coordinator"
            text="[text - ideally 3 - 4 sentences]"
            text2='[text - ideally 1 - 2 sentences]'
          />

          <nav className="officer-cell" onClick={() => handleShowModal('richard')}>
            <div className="officer-photo-container">
              <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/officers_richard.png"
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
