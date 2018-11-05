import { Fragment } from 'react'
import Head from 'next/head'
import TopNavigation from '../components/TopNavigation'
import LandingHeader from '../components/LandingHeader'
import JobsList from '../components/JobsList'
import Footer from '../components/Footer'
import 'bulma/css/bulma.css'

export default () => (
  <Fragment>
    <Head>
      <title>WeWantWork</title>
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
    </Head>
    <TopNavigation />
    <LandingHeader />
    <JobsList title='ตำแหน่งงานล่าสุด' />
    <JobsList title='งานสำหรับนักเรียน นักศึกษา' />
    <Footer />
  </Fragment>
)
