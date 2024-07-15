import * as React from 'react'
import Layout from '../components/layout'
import YearPage from '../components/yearpage/YearPage'
import YearBanner from '../components/yearpage/YearBanner'
const ThisYear = () => {
    return (
      <Layout pageTitle="2023-2024">
        <YearBanner />
        <YearPage />
      </Layout>
    )
}

export default ThisYear