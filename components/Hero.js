import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = (props) => {
  return (
    <div className={styles.heroWrapper}>
        <Image 
        className={styles.heroBG}
        src='/hero_bg.jpg'
        // width={1920}
        // height={1080}
        layout='fill'
        objectFit='cover'
        />
    </div>
  )
}

export default Hero