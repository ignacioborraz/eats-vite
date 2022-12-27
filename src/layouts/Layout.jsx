import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

const Layout = (props) => {
  // Elementos que se repiten en todas las paginas
  // NAV Y FOOTER
  //console.log(props)
  let optNav = [
    {name: "Home"},
    {name: "Comics"},
    {name: "About Us"}
  ]
  let optUser = [
    {name: 'Sign In'},
    {name: 'Sign Up'}    
  ]

  return (
    <div className='layout-container'>
      <div className='header-container'>
        <Header type='nav' options={optNav} />
        <Header type='user' options={optUser} />
      </div>
      <div className='layout-grow'>{props.children}</div>
      <Footer/>
    </div>
  )
}

export default Layout