import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className={styles.navWrapper}>
        <div style={{position:'relative',  top:'7px'}}>
        <Image
          src='/logo.png'
          width='30'
          height='30'
        />
        </div>
        <Link href="/konzepte"><a className={styles.navElement}> Konzepte </a></Link>
        <Link href="/module"><a className={styles.navElement}> Module </a></Link>
        <Link href="/hardware"><a className={styles.navElement}> Hardware </a></Link>
        <Link href="/netzwerk"><a className={styles.navElement}> Netzwerk </a></Link>
        <Link href="/schnittstellen"><a className={styles.navElement}> Schnittstellen </a></Link>
        <Link href="/referenzen"><a className={styles.navElement}> Referenzen </a></Link>
        <Link href="/blog"><a className={styles.navElement}> Blog </a></Link>
        <Link href="/webinare"><a className={styles.navElement}> Webinare </a></Link>
        </div>
    </nav>
  )
}

export default Navbar