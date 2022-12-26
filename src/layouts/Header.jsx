import React, { useState } from 'react'

const Header = () => {

  // const {nombreDePropiedad} = objeto;
  // const nombreDePropiedad = objeto.nombreDePropiedad;

  const [variable, setVariable] = useState(false)

  const handleMenu = () => {
    // if(variable === true) {
    //   setVariable(false)
    // }

    // if(variable === false) {
    //   setVariable(true)
    // }

    setVariable(!variable)
  }

  return (
    <div>
      <p onClick={handleMenu}>ICONO - Menu hamburguesa</p>
      {
        variable
          ? (
            <div>
              <a style={{ margin: '10px' }} href="">Home</a>
              <a style={{ margin: '10px' }} href="">Comics</a>
              <a style={{ margin: '10px' }} href="">About us</a>
            </div>
          )
          : null
      }

    </div>
  )
}

export default Header