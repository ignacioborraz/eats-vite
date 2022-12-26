import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = (props) => {
    // Elementos que se repiten en todas las paginas
    // NAV Y FOOTER
    console.log(props)
  return (
    <div>
    <Header/>
    <div>{props.children}</div>
    <Footer/>
    </div>
  )
}

export default Layout