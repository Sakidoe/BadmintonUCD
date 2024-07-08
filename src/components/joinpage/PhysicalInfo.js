import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './physicalinfo.css'
import downloadFile from '../../../public/static/UCD_Physical.pdf' 

const PhysicalInfo = () => {
    return (
        <div className="phys-container">
        <nav className="phys">
            <h1 className="phys-title-text">1. UCD Physical</h1>
            <p className="phys-description">
            A completed physical form (see below) must be completed and uploaded to DSE by 
            October 6th. You can have it completed by your primary care physician or other healthcare 
            providers. If you wish to complete it at the UC Davis student health center, you can make 
            an appointment through Health-e-Messaging or by calling (530) 752-2349
            </p>
        </nav>
         <a href={downloadFile} download class="ucd-phys btn--download">Download PDF</a>{` `}
        </div>
    )
  }
  
export default PhysicalInfo