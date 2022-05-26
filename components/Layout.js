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
  let headerSize = 0
  const headerRef = useRef()
  const transTime = 200

  const getHeaderSize = () => {
    if (!headerRef.current) return
    return headerRef.current.offsetHeight
  }

  const handleScroll = () => {
    console.log ("handlescroll")
    if (window.scrollY >= headerSize * 2 && !navSticky) {
      setNavSticky(true)
    }
    else if (window.scrollY < headerSize * 2 && navSticky) {
      setNavSticky(false)
    }
  }

  useEffect(() => {
    headerSize = getHeaderSize()
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [navSticky, narrowMode])

  return (
    <>
      <header ref={headerRef}>
        {/* <Sidebar><Navbar ref={ref} vertical={true}/></Sidebar> */}
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
        ): null}

      </header>
      {props.children}
      <div style={{ marginBottom: '4rem' }} />
      <Footer scrollRefs={ref} />
    </>
  )
}

export default forwardRef(Layout)