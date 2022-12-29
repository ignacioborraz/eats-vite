import './App.css'

import { router } from './router'
import { RouterProvider } from "react-router-dom"

import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={ store }>
            <RouterProvider router={ router } />
        </Provider>
    )
}

export default App

//segundo paso inyecto el store