
import * as React from 'react'
import Layout from '../components/layout'
import JoinBanner from '../components/joinpage/JoinBanner'
import PhysicalInfo from '../components/joinpage/PhysicalInfo'
import MemberInfo from '../components/joinpage/MemberInfo'
const JoinPage = () => {
  return (
    <Layout pageTitle="Join">
      <JoinBanner />
      <PhysicalInfo />
      <MemberInfo />
    </Layout>
  )
}

export const Head = () => <title>Join</title>

export default JoinPage