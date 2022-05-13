import { forwardRef, useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = (props, ref) => {
  const [navSticky, setNavSticky] = useState(false)
  const headerRef = useRef()

  const getHeaderSize = () => {
    if (!headerRef.current) return
    console.log (headerRef.current.offsetHeight)
  }

  const handleScroll = () => {
    console.log (window.scrollY)
    console.log ("Headersize: ")
    getHeaderSize()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <>
      <header ref={headerRef}>
        <div className={styles.stickyDivOff}/>
        <Navbar ref={ref} />
      </header>
      {props.children}
      <footer className='placeholder'>
        Footer
      </footer>
    </>
  )
}

export default forwardRef(Layout)