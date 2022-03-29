import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'



const Hero = (props) => {
  return (
    <div className={styles.heroWrapper}>
      {console.log (props)}
      <Image
        className={styles.heroBG}
        src='/hero_bg.jpg'
        layout='fill'
        objectFit='cover'
      />
      <div className={styles.heroCard}>
        <h1 className={styles.heroTitle}>Umsatz erhöhen.</h1>
        <h1 className={styles.heroTitle}>Prozesse automatisieren.</h1>
        <h1 className={styles.heroTitle}>Kosten optimieren.</h1>
        <div className={styles.heroTitle}>
          <h1 style={{ display: "inline" }}>Alles aus einer </h1>
          <h1 onClick={() => scrollTo(props.moreRef)} className={styles.heroHighlight} style={{ display: "inline" }}>Hand</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero