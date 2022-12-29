import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//import apiUrl from '../../url'

const obtenerCategorias = createAsyncThunk('obtenerCategorias', async () => {
    let url = 'http://localhost:8000/categories'
    try {
        let res = await axios.get(url)
        return { 
            success: true,
            response: res.data.response
        }
    } catch (error) {
        console.log(error)
        return {
            success: true,
            response: error.data.response
        }
    }
})

const crearCategoria = createAsyncThunk('crearCategoria', async (data) => {
    let url = 'http://localhost:8000/categories'
    try {
        await axios.post(url,data) //RECORDAR QUE POST NO DEBERIA DEVOLVER EL OBJETO CREADO
        return { 
            success: true,
            response: data
        }
    } catch (error) {
        console.log(error)
        return {
            success: true,
            response: error.data.response
        }
    }
})

const categoryActions= { obtenerCategorias,crearCategoria }

export default categoryActions