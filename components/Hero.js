import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'



const Hero = (props) => {
  const handleScroll = (ref) => {
    if (ref) scrollTo (ref)
  }


  return (
    <section className={styles.heroWrapper}>
      <Image
        className={styles.heroBG}
        src='/hero_bg.jpg'
        layout='fill'
        objectFit='cover'
        priority='true'
      />
      <div className={styles.heroCard}>
        <h1 className={styles.heroTitle}>Increase Revenue.</h1>
        <h1 className={styles.heroTitle}>Automate Processes.</h1>
        <h1 className={styles.heroTitle}>Optimise Costs.</h1>
        <div className={styles.heroTitle} style={{marginBlockStart:"1.33em", marginBlockEnd:"1.33em"}}>
          <h1 className={styles.heroLineTitle} style={{ display: "inline" }}>The All-In-One </h1>
          <h1 className={`${styles.heroLineTitle} ${styles.heroHighlight}`} onClick={() => handleScroll(props.scrollRef)} style={{ display: "inline" }}>Solution</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero