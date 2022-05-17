import { forwardRef, useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = (props, ref) => {
  const [navSticky, setNavSticky] = useState(false)
  let headerSize = 0
  const headerRef = useRef()

  const getHeaderSize = () => {
    if (!headerRef.current) return
    return headerRef.current.offsetHeight
  }

  const handleScroll = () => {
    let shouldBeSticky = false
    console.log (window.scrollY)
    if (window.scrollY >= headerSize) {
      console.log ("Should be sticky")
      shouldBeSticky = true
    }
    else {
      console.log ("Shouldn't be sticky")
      shouldBeSticky = false
    }
    console.log ("navsticky is " + navSticky)
    if (shouldBeSticky && !navSticky) setNavSticky (true)
    else if (!shouldBeSticky && navSticky) setNavSticky (false)

  }

  useEffect(() => {
    headerSize = getHeaderSize()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <header ref={headerRef}>
        <div className={styles.stickyDivOff} />
        {!navSticky ? <Navbar ref={ref} /> : null}
      </header>
      {props.children}
      <footer className='placeholder'>
        Footer
      </footer>
    </>
  )
}

export default forwardRef(Layout)