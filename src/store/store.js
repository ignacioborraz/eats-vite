import { configureStore } from '@reduxjs/toolkit'
import categoryReducers from './categories/reducers'

export const store = configureStore({
    reducer: {
        categories: categoryReducers
    }
})

//primer paso VACIO