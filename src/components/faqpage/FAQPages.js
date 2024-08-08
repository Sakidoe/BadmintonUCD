
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './faqpages.css'
const datapage = {
  title: "FAQ",
  rows: [
      {
          title: <h classname="FAQ-question">
                  &nbsp; When and where are our practices?
                 </h>,
          content: `Our practice information for Fall Quarter 2024-2025 are: <br />
                   Location: Hickey Gymnasium350 Howard Way, Davis, CA 95616 <br />
                   Practice Times: <br />
                   Monday: 9:30pm - 11:00pm <br />
                   Wednesday: 7:30pm - 9:00pm <br />
                   Friday: 7:30pm - 9:00pm`,
      },
      {
          title: <h classname="FAQ-question">
                  &nbsp; How much are our practices?
                </h>,
          content: 'Here are our payments info: Zelle: davisbadminton@gmail.com <br /> Year     Membership (UCD students only): $175 <br /> Quarter Membership (UCD students only): $65 <br /> 1-Time Drop-In: 15$ <br />',
      },
      {
          title: <h classname="FAQ-question">
            &nbsp; What do our practices look like?
            </h>,
          content:
          'Our practices follow an open-gym approach.<br /> Of the 8 courts that Hickey Gym offers, we separate courts depending on skill level for all members to be able to play.<br /> There are "challenge courts" for higher level players, as well as designated "rec courts" for casual members.',
          styles: {
            rowContentPaddingLeft: '50px',
          }
      },
      {
        title: <h classname="FAQ-question">
          &nbsp; How can you contact officers of the Badminton Club?
          </h>,
        content:
        "If you would like to directly contact any of us, in person will always be the best. <br /> If this isn't possible, you can reach us individually or all together through discord! You can also DM us @badminton_ucd on IG, <br />and email us at davisbadminton@gmail.com",
        styles: {
          rowContentPaddingLeft: '50px',
        }
    },
  ],
};

const styles = {
  titleTextColor: "white",
  bgColor: '#022851',
  rowTitleColor: "white",
  rowContentColor: '#cecece',
  arrowColor: "white",
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '50px',
};

const config = {
  animate: true,
  // arrowIcon: "",
  tabFocus: true
};
const FAQPages = () => {
  return (

    <div className="faq-container">
            <Faq
                data={datapage}
                styles={styles}
                config={config}
                className="faq-title"
            />
        </div>
  );
}
export default FAQPages
