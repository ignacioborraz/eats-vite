import { createReducer } from '@reduxjs/toolkit'
import categoryActions from './actions'

const { obtenerCategorias } = categoryActions
const initialState = { loaded: false, categories: [] }

const categoryReducers = createReducer(initialState,
    (builder) => {
        builder
        .addCase(obtenerCategorias.fulfilled, (state, action) => {
            console.log(action.payload)
            let newState = {
                //...state,
                loaded: true,
                categories: action.payload.response
            }
            return newState
        })})

export default categoryReducers