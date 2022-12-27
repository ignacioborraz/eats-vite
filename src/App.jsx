import './App.css';
import Layout from './layouts/Layout'

import { router } from './router';
import { RouterProvider } from "react-router-dom"


function App() {
  return (
      <Layout>
        <RouterProvider router={router} />
      </Layout>
  )
}

export default App