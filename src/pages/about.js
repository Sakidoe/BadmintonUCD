
import * as React from 'react'
import Layout from '../components/layout'
import BannerImage from '../components/aboutpage/BannerImage'
import AboutNavbar from '../components/aboutpage/AboutNavbar'
import WhoWeAre from '../components/aboutpage/WhoWeAre'
import Events from '../components/aboutpage/Events'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <BannerImage />
      <AboutNavbar />
      <WhoWeAre />
      <Events />
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage