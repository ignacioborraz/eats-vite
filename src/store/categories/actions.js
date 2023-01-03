import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = process.env.REACT_APP_URL //la url de nuestra API es sensible, conviene protegerla

const obtenerCategorias = createAsyncThunk('obtenerCategorias', async (obj,{ rejectWithValue }) => {
    //debe cargar TODAS categorias para que no sea necesario refetchear las categorias CADA VEZ que se monta el componente
    //la asincrona solo admite dos parámetros (datos y métodos=>de toolkit por defecto)
    try {
        let res = await axios.get(url+'categories')
        return { //IMPORTANTE: estandarizar los payloads
            success: true,
            response: res.data.response
        }
    } catch (error) {
        //console.log(error)
        return rejectWithValue({ //envío el el objeto rechazado
            success: false,
            response: error.response.data //objeto definido en el manejador de errores del back
        })
    }
})

const crearCategoria = createAsyncThunk('crearCategoria', async (data) => {
    //debe agregar la categoria CREADA al estado con todas las categorias para que no sea necesario refetchear las categorias
    try {
        await axios.post(url+'categories',data) //RECORDAR QUE POST NO DEBERIA DEVOLVER EL OBJETO CREADO
        return { 
            success: true,
            response: data
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const categoryActions= { obtenerCategorias,crearCategoria }

export default categoryActions