import { createBrowserRouter } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
import CarouselCopy from "./CarouselCopy/Carousel"
import Details from "./Details/Details"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Carousel />
  },
  {
    path: "/comics",
    element: <CarouselCopy />
  },
  {
    path: "/comic/:id",
    element: <Details />
  },
])