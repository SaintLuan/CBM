import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { History } from '../components/Home/History';
import { Slider } from '../components/Home/Slider';

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Colégio Braga Mello</title>
      </Head>

      <section>
        <Header />
        <Slider />
        <History />
        <Footer />
      </section>
      
    </section>
  )
}
