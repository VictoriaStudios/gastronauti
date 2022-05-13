import React, { forwardRef } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'

const Navbar = (props, ref) => {
  return (
      <nav className={styles.navWrapper}>
        <div className={styles.navElement} onClick={() => scrollTo(ref.heroRef)} style={{ position: 'relative', top: '7px' }}>
          <Image
            src='/logo.png'
            width='30'
            height='30'
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