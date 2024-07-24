// src/pages/index.js
import * as React from 'react'
import Layout from '../components/layout'
import Banner from '../components/mainpage/Banner'
import Introduction from '../components/mainpage/Introduction'
import { StaticImage } from 'gatsby-plugin-image'
import AnimatedText from '../components/mainpage/AnimatedText'
import './index.css'

const IndexPage = () => {
  return (
    <div className="mainpage-controls">
      <Layout pageTitle>
          <div className='front-page-banner'>
            
          </div>
          {/* <StaticImage
            alt="The 23'-24' Badminton UCD Team Photo"
            src="../images/bucd_formal_funny.jpg"
            className="front-page-banner"
          /> */}
        <Banner />
        <Introduction />
      </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
