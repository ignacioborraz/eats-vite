import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import Carousel from "../components/Carousel/Carousel"
import Comics from "./Comics/Comics"
import Details from "./Details/Details"
import Form from '../components/Form/Form'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Carousel />
      },{
        path: "/comics",
        element: <Comics />
      },{
        path: "/comic/:id",
        element: <Details />
      },
      {
        path:"/newcategory",
        element:<Form/>
      }
    ]
  },

])