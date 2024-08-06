// src/pages/index.js
import * as React from 'react'
import Layout from '../components/layout'
import Banner from '../components/mainpage/Banner'
import Introduction from '../components/mainpage/Introduction'
import { StaticImage } from 'gatsby-plugin-image'
import AnimatedText from '../components/mainpage/AnimatedText'
import './index.css'
import { Link } from 'gatsby'
const IndexPage = () => {
  return (
    <div className="mainpage-controls">
      <Layout pageTitle>
          <div className='front-page-banner'>
            <div class="typewriter">
              <h1>Badminton @ UC Davis</h1>
            </div>
            
          </div>
        <Banner />
        <Introduction />
      </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
