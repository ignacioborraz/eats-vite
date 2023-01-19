import React, { useRef } from "react"
import { useDispatch } from 'react-redux'
import { Link as Anchor,useNavigate } from 'react-router-dom'
import "../Login/form.css"

import authActions from "../../store/auth/actions"
const { iniciar_sesion } = authActions

const SignIn = () => {

	const dispatch = useDispatch()
	const mail = useRef("")
	const password = useRef("")
    const navigate = useNavigate()

	const captureData = (e) =>{
		e.preventDefault()
		//console.log(mail.current.value,password.current.value)
		let data = {
            mail: mail.current.value,
            password: password.current.value
		}
		dispatch(iniciar_sesion(data))
        navigate("/",{ replace:true })
	}

    return (
        <div className='container'>
            <form action="post" className='grow col flex'>
                <fieldset>
                    <label htmlFor="mail">Mail</label>
                    <input type="text" placeholder='Email'id='mail' ref={mail}/>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' placeholder='password' ref={password}/>
                    <input onClick={captureData} type="submit" value="enviar" />
                </fieldset>
                <div>
                    <p>Still don't have an account?</p>
                    <Anchor to={"/signup"}>Sign up!</Anchor>
                </div>
            </form>
            <div className='grow bkg div2' style={{backgroundImage: "url('https://images.pexels.com/photos/4841961/pexels-photo-4841961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
        </div>
    )
//https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
}

export default SignIn