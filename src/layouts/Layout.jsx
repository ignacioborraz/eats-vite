import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

const Layout = (props) => {
    let optNav = [
        {name: "Home", to: "/"},
        {name: "Comics", to: "/comics"},
        {name: "About Us", to: "/about"},
        {name: "New Category", to: "/newcategory"}
    ]

    let optUser = [
        {name: 'Sign In'},
        {name: 'Sign Up'}
    ]

    return (
        <div className='layout-container'>
            <div className='header-container'>
                <Header type='nav' options={optNav}/>
                <Header type='user' options={optUser}/>
            </div>
            <div className='layout-grow'><Outlet /></div>
            <Footer/>
        </div>
    )
}

export default Layout
