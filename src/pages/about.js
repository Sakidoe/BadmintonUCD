
import * as React from 'react'
import Layout from '../components/layout'
import BannerImage from '../components/aboutpage/BannerImage'
import AboutNavbar from '../components/aboutpage/AboutNavbar'
import WhoWeAre from '../components/aboutpage/WhoWeAre'
import Events from '../components/aboutpage/Events'
import DavisOpen from '../components/aboutpage/DavisOpen'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <BannerImage />
      <AboutNavbar />
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="davis-open">
        <DavisOpen />
      </div>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage