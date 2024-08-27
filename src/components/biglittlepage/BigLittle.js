import React from 'react';
import { useEffect, useState } from 'react';
import './biglittle.css'
import { StaticImage } from 'gatsby-plugin-image'


const BigLittlePage = () => {
    return(
        <div className='biglittle-container'>
            <h1 className='biglittle-header'>
                Coming soon
            </h1>
           {/* <StaticImage
                alt="The 23'-24' Badminton UCD Team Photo"
                src="../../images/under_construction.png"
                className="construction-photo"
              />  */}
        </div>
    );

};

export default BigLittlePage;