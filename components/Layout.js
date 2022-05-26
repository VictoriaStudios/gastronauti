import { forwardRef, useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import Transition from 'react-transition-group/cjs/Transition'
import Footer from './Footer'
import Sidebar from './Sidebar'
import useWindowDimensions from './utils/useWindowDimensions'


const Layout = (props, ref) => {
  const [narrowMode, setNarrowMode] = useState(false)
  const [navSticky, setNavSticky] = useState(false)
  const [sidebarVis, setSidebarVis] = useState(false)
  const { width, height } = useWindowDimensions()
  let headerSize = 50
  const headerRef = useRef()
  const transTime = 200

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
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [navSticky, narrowMode])

  useEffect(() => {
    if (width < 460 && !narrowMode) setNarrowMode(true)
    if (width >= 460 && narrowMode) setNarrowMode(false)
  }, [width])

  return (
    <>
      <header ref={headerRef}>
        {!narrowMode ? (
          <>
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
          </>
        ) :
          <Sidebar><Navbar ref={ref} vertical={true} /></Sidebar>
        }

      </header>
      {props.children}
      <div style={{ marginBottom: '4rem' }} />
      <Footer scrollRefs={ref} />
    </>
  )
}

export default forwardRef(Layout)