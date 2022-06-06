import React, { forwardRef, useRef } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'

const Navbar = (props, ref) => {
  const verticalStyle = {flexDirection: 'column',
  justifyContent:'space-evenly',
  alignItems: 'flex-start',
  marginLeft: '2rem',
  minHeight: 'inherit'
}

  return (
      <nav style={props.vertical === true ?  verticalStyle : null} className={styles.navWrapper}>
        <div className={styles.navElement} onClick={() => scrollTo(ref.topRef)}>
          <Image
            src='/logo.png'
            width='30'
            height='30'
            alt='The Gastronauti Logo'
          />
        </div>
        <a className={styles.navElement} onClick={() => scrollTo(ref.kassenRef)}> Modules </a>
        <a className={styles.navElement} onClick={() => scrollTo(ref.blogRef)}> Blog </a>
        <a className={styles.navElement} onClick={() => scrollTo(ref.empfehlungsRef)}> Recommendations </a>
        <a className={styles.navElement} onClick={() => scrollTo(ref.kontaktRef)}> Contact </a>
      </nav>
  )
}

export default forwardRef(Navbar)