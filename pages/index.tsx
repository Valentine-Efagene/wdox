import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.css'
import HomeView from '../components/HomeView/HomeView'
import Footer from '../components/IndexFooter/Footer'
import Team from '../components/Team/Team'
import Navs from '../components/Navs/Navs'
import Investment from '../components/Investment/Investment'
import Verification from '../components/Verification/Verification'
import HomeWhitePaper from '../components/HomeWhitePaper/HomeWhitePaper'
import EcoSystem from '../components/EcoSystem/EcoSystem'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WDOX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <WelcomeCard /> */}
      <Navs />
      <main className={styles.main}>
        {/* <div className={styles.navGuard} /> */}
        <HomeView />
        {/* <ImageTab /> */}
        <div className={styles.body}>
          <EcoSystem />
          <Verification />
          <Investment />
          {/* <Achievements /> */}
          <Team />
          {/* <FrequentlyAsked /> */}
          <HomeWhitePaper />
        </div>
        {/* <JoinDiscord /> */}
        <Footer />
      </main>
    </div>
  )
}

export default Home
