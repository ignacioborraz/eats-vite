import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../Login/signin.css'
const SignIn = () => {
    const inputMail = useRef("")
    const inputPass = useRef("")
    const capturaDeDatos = (e) =>{
        e.preventDefault()
        console.log(inputMail.current.value)
        console.log(inputPass.current.value)
    }
  return (
    <div className='container'>
        <form action="post" className='grow col flex'>
            <fieldset>
                <label htmlFor="mail">
                    Email
                </label>
                <input type="text" placeholder='Email'id='mail' ref={inputMail}/>
                <label htmlFor="pass">
                    Password
                </label>
                <input type="password" id='pass' placeholder='password' ref={inputPass}/>
                <input onClick={(e)=>capturaDeDatos(e)} type="submit" value="enviar" />
            </fieldset>
            <div>
                <p>Still don't have an account?</p><Link to={"/signup"}>Sign up!</Link>
            </div>
        </form>

        <div className='grow bkg div2'>
        </div>
    </div>
  )
}

export default SignIn