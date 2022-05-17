import { forwardRef, useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import Transition from 'react-transition-group/cjs/Transition'


const Layout = (props, ref) => {
  const [navSticky, setNavSticky] = useState(false)
  let headerSize = 0
  const headerRef = useRef()
  const transTime = 400

  const getHeaderSize = () => {
    if (!headerRef.current) return
    return headerRef.current.offsetHeight
  }

  const handleScroll = () => {
    if (window.scrollY >= headerSize && !navSticky) {
      setNavSticky(true)
    }
    else if (window.scrollY < headerSize && navSticky) {
      setNavSticky(false)
    }
  }

  useEffect(() => {
    headerSize = getHeaderSize()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [navSticky])

  return (
    <>
      <header ref={headerRef}>
        {!navSticky ? <Navbar ref={ref} /> : <div style={{ visibility: 'hidden' }}><Navbar ref={ref} /></div>}
        <Transition in={navSticky} timeout={transTime}>
          {state => (
            <div style={{
              transition: `${transTime}`,
              opacity: state === 'entering' ? .75 : 'entered' ? .75 : 0
            }} 
            className={!navSticky ? styles.stickyDivOff : styles.stickyDivOn} ><Navbar ref={ref} /></div>
          )}
        </Transition>
      </header>
      {props.children}
      <footer className='placeholder'>
        Footer
      </footer>
    </>
  )
}

export default forwardRef(Layout)