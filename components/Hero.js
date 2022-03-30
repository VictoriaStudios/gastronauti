import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'



const Hero = (props) => {
  const handleScroll = (ref) => {
    if (ref) scrollTo (ref)
  }


  return (
    <div className={styles.heroWrapper}>
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
        <div className={styles.heroTitle} style={{marginBlockStart:"1.33em", marginBlockEnd:"1.33em"}}>
          <h1 style={{ display: "inline" }}>Alles aus einer </h1>
          <h1 onClick={() => handleScroll(props.scrollRef)} className={styles.heroHighlight} style={{ display: "inline" }}>Hand</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero