import {forwardRef} from 'react'
import Navbar from './Navbar'

const Layout = (props, ref) => {
  return (
    <>
        <header>
            <Navbar ref={ref}/>
        </header>
        {props.children}
        <footer className='placeholder'>
          Footer
        </footer>
    </>
  )
}

export default forwardRef (Layout)