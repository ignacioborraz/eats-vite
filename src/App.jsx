import './App.css'
import { useEffect } from 'react'

import { router } from './router'
import { RouterProvider } from "react-router-dom"

import { useDispatch } from 'react-redux'
import authActions from "./store/auth/actions"
const { iniciar_sesion_con_token } = authActions

function App() {

    //useSelector(store => console.log(store))
    let dispatch = useDispatch()
  
    useEffect(() => {
        let token = localStorage.getItem('token')
        //console.log(token)
        if (token) {
            dispatch(iniciar_sesion_con_token(token))
        }
    },[])

    return (
        <RouterProvider router={ router } />
    )
}

export default App