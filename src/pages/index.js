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
    <Layout pageTitle>
      <div className="image-container">
        <StaticImage
          alt="The 23'-24' Badminton UCD Team Photo"
          src="../images/ucd_team2.jpg"
          className="full-width-image"
        />
        <AnimatedText />
      </div>
      <Banner />
      <Introduction />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
