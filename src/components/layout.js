import * as React from 'react'
import Navbar from './Navbar'
import Outro from './Outro'
import {
  heading,
  fullWidthContainer
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {


  return (
    <section>
      <div className={fullWidthContainer}>
      <Navbar />
        <main>
          {children}
        </main>
      <Outro />
      </div>
    </section>
  )
}

export default Layout