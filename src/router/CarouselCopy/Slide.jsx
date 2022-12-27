import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export default function Slide(props) {
    const {foto, nombre, id} = props

    return (
        <div  className="slides-container">
            <img className="carousel-img" src={foto} />
            <LinkRouter to={`/comic/${id}`} className="carousel-text">{nombre}</LinkRouter>
        </div>
    )
}

