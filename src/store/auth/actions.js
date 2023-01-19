import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const apiUrl = process.env.REACT_APP_URL //la url de nuestra API es sensible, conviene protegerla

const registrar_usuario = createAsyncThunk('registrar_usuario', async (data) => {
    let url = `${apiUrl}api/auth/signup`
    try {
        let res = await axios.post(url,data)
        return { 
            success: true,
            response: res.data.response
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const iniciar_sesion = createAsyncThunk('iniciar_sesion', async (data) => {
    let url = `${apiUrl}api/auth/signin`
    try {
        let res = await axios.post(url,data)
        return { 
            success: true,
            response: res.data.response
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const iniciar_sesion_con_token = createAsyncThunk('iniciar_sesion_con_token', async (token) => {
    let url = `${apiUrl}api/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let res = await axios.post(url,null,headers)
        return { 
            success: true,
            response: {
                ...res.data.response,
                token
            }
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const cerrar_sesion = createAsyncThunk('cerrar_sesion', async (token) => {
    let url = `${apiUrl}api/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        await axios.post(url,null,headers)
        return { 
            success: true,
            response: null
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const authActions= { registrar_usuario,iniciar_sesion,iniciar_sesion_con_token,cerrar_sesion }

export default authActions