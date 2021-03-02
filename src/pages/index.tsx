import Head from 'next/head';

import { Nav } from '../components/Nav';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Colégio Braga Mello</title>
      </Head>

      <section>
        <Nav />
      </section>
      
    </section>
  )
}
