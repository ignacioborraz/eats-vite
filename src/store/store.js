import { configureStore } from '@reduxjs/toolkit'
import categoryReducers from './categories/reducers'

const store = configureStore({
    reducer: {
        categories: categoryReducers
    }
})

export default store

//en el store configuro TODOS los reductores
//la propiedad categories contendrá todos los estados reducidos de categoryReducers