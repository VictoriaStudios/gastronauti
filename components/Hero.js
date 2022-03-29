import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/dist/client/link'

const Hero = (props) => {
  return (
    <div className={styles.heroWrapper}>
      <Image
        className={styles.heroBG}
        src='/hero_bg.jpg'
        layout='fill'
        objectFit='cover'
      />
      <div className={styles.heroCard}>
        <h1>Umsatz erhöhen.</h1>
        <h1>Prozesse automatisieren.</h1>
        <h1>Kosten optimieren.</h1>
        <div>
          <h1 style={{ display: "inline" }}>Alles aus einer </h1>
          <Link href='/more'>
            <h1 className={styles.heroHighlight} style={{ display: "inline" }}>Hand</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero