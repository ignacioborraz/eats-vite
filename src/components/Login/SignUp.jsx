import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import "../Login/signup.css";

const SignUp = () => {

  const inputMail = useRef("")
  const inputPhoto = useRef("")
  const inputPassword = useRef("")

  const capturaDeDatos = (e) =>{
    e.preventDefault()
    console.log(inputMail.current.value)
    console.log(inputPhoto.current.value)
    console.log(inputPassword.current.value)
  }

  return (
    <div className="container">
      <div className="grow bkg div2"></div>
      <form action="post" className="grow col flex">
        <fieldset>
          <label htmlFor="">Mail</label>
          <input type="text" placeholder="Mail" ref={inputMail}/>
          <label htmlFor="">Photo</label>
          <input type="text" placeholder="Photo" ref={inputPhoto}/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" ref={inputPassword}/>
          <input onClick={(e)=>capturaDeDatos(e)} type="submit" value="enviar" />
        </fieldset>
        <div>
          <p>Do you already have an account? then</p>
          <Link to="/signin"> Login!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
