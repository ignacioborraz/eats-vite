import React, { useRef } from "react"
import { useDispatch } from 'react-redux'
import { Link as Anchor,useNavigate } from 'react-router-dom'
import "../Login/form.css"

import authActions from "../../store/auth/actions"
const { registrar_usuario } = authActions

const SignUp = () => {

	const dispatch = useDispatch()
	const mail = useRef("")
	const photo = useRef("")
	const password = useRef("")
    const navigate = useNavigate()

	const captureData = (e) =>{
		e.preventDefault()
		//console.log(mail.current.value,photo.current.value,password.current.value)
		let data = {
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value
		}
        console.log(data)
		dispatch(registrar_usuario(data))
        navigate("/signin",{ replace:true })
	}

    return (
        <div className="container">
            <div className="grow bkg div2" style={{backgroundImage: "url('https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
            <form action="post" className="grow col flex">
                <fieldset>
                    <label htmlFor="">Mail</label>
                    <input type="text" placeholder="Mail" ref={mail}/>
                    <label htmlFor="">Photo</label>
                    <input type="text" placeholder="Photo" ref={photo}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" ref={password}/>
                    <input onClick={(e)=>captureData(e)} type="submit" value="enviar" />
                </fieldset>
                <div>
                    <p>Do you already have an account? then</p>
                    <Anchor to="/signin">Login!</Anchor>
                </div>
            </form>
        </div>
    )

}

export default SignUp