import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        {props.children}
        <footer className='placeholder'>
          Footer
        </footer>
    </div>
  )
}

export default Layout