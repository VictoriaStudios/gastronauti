import { forwardRef, useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import Transition from 'react-transition-group/cjs/Transition'


const Layout = (props, ref) => {
  const [navSticky, setNavSticky] = useState(false)
  let headerSize = 0
  const headerRef = useRef()
  const transTime = 200

  const getHeaderSize = () => {
    if (!headerRef.current) return
    return headerRef.current.offsetHeight
  }

  const handleScroll = () => {
    if (window.scrollY >= headerSize*2 && !navSticky) {
      setNavSticky(true)
    }
    else if (window.scrollY < headerSize*2 && navSticky) {
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
            <>
            <div style={{
              transition: `all ${transTime}ms ease-in-out`,
              top: state === 'entering' ? 0 : state === 'entered' ? 0 : '-10%',
              height: state === 'entering' ? `${headerSize}px` : state === 'entered' ? `${headerSize}px` : 0
            }} 
            className={styles.sticky} ><Navbar ref={ref} /></div>
            </>
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