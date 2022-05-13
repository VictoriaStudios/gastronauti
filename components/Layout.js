import {forwardRef} from 'react'
import Navbar from './Navbar'

const Layout = (props, ref) => {
  return (
    <div>
        <header>
            <Navbar ref={ref}/>
        </header>
        {props.children}
        <footer className='placeholder'>
          Footer
        </footer>
    </div>
  )
}

export default forwardRef (Layout)