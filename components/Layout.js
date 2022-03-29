import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        {props.children}
    </div>
  )
}

export default Layout