
import * as React from 'react'
import Layout from '../components/layout'
import OfficerList from '../components/officerpage/OfficerList'
const OfficersPage = () => {
  return (
    <Layout pageTitle="Officers">
      <OfficerList />
    </Layout>
  )
}

export const Head = () => <title>Officers</title>

export default OfficersPage