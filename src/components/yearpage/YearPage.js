import React from 'react';
import { useEffect, useState } from 'react';
import './yearpage.css'
import Modal from './Modal';
import { StaticImage } from 'gatsby-plugin-image'
import firstPractice from '../../images/first_practice_kinda.jpg'
import ucdAtCalImage from '../../images/ucd_at_cal.jpg';
import trimeetPic from '../../images/trimeet_all_pic.jpg';
import irvinePic from '../../images/irvine_2022_team.jpg';
import stanfordPic from '../../images/stanford.jpg';
import norcalPic from '../../images/bucd_kevin_smash.jpg';
import bostonPic from '../../images/boston_photo.jpg';
import interclubPic from '../../images/davis_interclub_AMD.jpg';
import davisopenPic from '../../images/Davis_Open_Photo1.jpg';
import banquetPic from '../../images/bucd_banquet_team.jpg';



const YearPage = () => {
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
    <div className="timeline-container">
      <div className="timeline-gallery">

        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('firstPractice')}>
          <StaticImage
            src="../../images/first_practice_kinda.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">First Practice</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'firstPractice'}
          onClose={handleCloseModal}
          imageSrc={firstPractice}
          title="First Practice"
          secondary="The First Practice of the year"
          text="The first practice is very different from the rest, as it is more of an info session + getting used to 
                the Davis courts! The turnout is usually higher than normal practices, and usually contains only officers
                and new players."
        />

        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('trimeet')}>
          <StaticImage
            src="../../images/trimeet_all_pic.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">UCSC x SJSU x UCD Trimeet</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'trimeet'}
          onClose={handleCloseModal}
          imageSrc={trimeetPic}
          title="UCSC x SJSU x UCD Trimeet"
          secondary="A Trimeet"
          text="For the first Badminton Meet of the quarter, we hosted the teams from SJSU(San Jose State)
                and UCSC(Santa Cruz) for a trimeet in Davis. Although UCD won the event, we appreciated all
                schools for coming out an playing!"
        />

        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('berkeley')}>
          <StaticImage
            src="../../images/ucd_at_cal.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Berkeley Away Meet</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'berkeley'}
          onClose={handleCloseModal}
          imageSrc={ucdAtCalImage}
          title="Berkeley Away Meet"
          secondary="A meet against Cal Badminton, our first away game!"
          text="For our second meet, we took our very first away trip to Berkeley 
                for this meet! It was a close fight, and an extremely fun time for all."
        />

        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('irvine')}>
          <StaticImage
            src="../../images/irvine_2022_team.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Irvine Trip</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'irvine'}
          onClose={handleCloseModal}
          imageSrc={irvinePic}
          title="Irvine Trip"
          secondary="Our Annual Team trip to participate in the Anteater Open!"
          text="text here"
        />

        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('stanford')}>
          <StaticImage
            src="../../images/stanford.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Stanford Meet</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'stanford'}
          onClose={handleCloseModal}
          imageSrc={stanfordPic}
          title="Stanford Meet"
          secondary="Our first ever meet against Stanford Badminton!"
          text="text here"
        />
        {/*start next*/}
        <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('norcal')}>
          <StaticImage
            src="../../images/bucd_kevin_smash.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">NorCal Collegiate Tournament</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'norcal'}
          onClose={handleCloseModal}
          imageSrc={norcalPic}
          title="NorCal Collegiate Tournament"
          secondary="Winning the First Ever NorCal Collegiate Championships"
          text="text here"
        />
      {/*start next*/}
      <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('boston')}>
          <StaticImage
            src="../../images/boston_photo.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Boston Collegiate Nationals</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'boston'}
          onClose={handleCloseModal}
          imageSrc={bostonPic}
          title="Boston Collegiate Nationals"
          secondary="Playing in our very first cross-country tournament!"
          text="text here"
        />

			{/*start next*/}
      <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('interclub')}>
          <StaticImage
            src="../../images/davis_interclub_AMD.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">UC Davis Interclub Tournament</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'interclub'}
          onClose={handleCloseModal}
          imageSrc={interclubPic}
          title="UC Davis Interclub Tournament"
          secondary="Hosting a Davis Exclusive tournament"
          text="text here"
        />
      {/*start next*/}
      <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('davisopen')}>
          <StaticImage
            src="../../images/Davis_Open_Photo1.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Davis Open 2024</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'davisopen'}
          onClose={handleCloseModal}
          imageSrc={davisopenPic}
          title="Davis Open 2024"
          secondary="Hosting a Davis Exclusive tournament"
          text="text here"
        />
			{/*start next*/}
      <div className="gallery-item" tabIndex="0" onClick={() => handleShowModal('banquet')}>
          <StaticImage
            src="../../images/bucd_banquet_team.jpg"
            className="gallery-image"
            alt="Gallery"
          />
          <div className="gallery-item-info">
            <li className="gallery-item-likes">Year-End Banquet</li>
          </div>
        </div>

        <Modal
          show={activeModal === 'banquet'}
          onClose={handleCloseModal}
          imageSrc={banquetPic}
          title="Year-End Banquet"
          secondary="A Celebration of a fun year together"
          text="text here"
        />
      

    </div>
	</div>
  )
}


export default YearPage;
