import React from 'react'
import "../styles/Main.css"
const Main = (props) => {
  let { texto, numero } = props
  
  return (
    <div className='Main'>
        <h2>Este es el Main</h2>
        <p>{texto}</p>
        <p>{!numero ? numero = "no exist" : numero}</p>
    </div>
  )
}

export default Main