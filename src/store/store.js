import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import categoryReducers from './categories/reducers'

const store = configureStore({
    reducer: {
        categories: categoryReducers,
        auth: authReducer
    }
})

export default store