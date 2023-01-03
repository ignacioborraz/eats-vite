import { createReducer } from '@reduxjs/toolkit'
import categoryActions from './actions'

const { obtenerCategorias,crearCategoria } = categoryActions
const initialState = {
    loaded: false,
    categories: []
}

const categoryReducers = createReducer(initialState,
    (builder) => { builder
        .addCase(obtenerCategorias.fulfilled, (state, action) => {
            //console.log(action.payload)
            let newState = {
                ...state,
                //ahora estamos trabajando con pocos datos y estados
                //se recomienda COPIAR TODOS los estados y modificar el que necesitemos
                loaded: true,
                categories: action.payload.response
            }
            return newState
        })
        .addCase(obtenerCategorias.rejected, (state, action) => {
            //console.log(action.payload)
            let newState = {
                ...state,
                loaded: true,
                categories: [{name: "all categories"}]
            }
            return newState
        })
        .addCase(crearCategoria.fulfilled, (state, action) => {
            //cuando hay que agregar algo, conviene directamente
            //pushear lo que corresponda donde corresponda
            console.log(action.payload.response)
            if (action.payload.success) {
                state.categories.push(action.payload.response)
            } else {
                alert(action.payload.response.response)
            }
            
        })
    }
)

export default categoryReducers