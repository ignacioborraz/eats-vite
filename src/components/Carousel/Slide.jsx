import React from 'react'

export default function Slide(props) {
    const { foto,nombre } = props

    return (
        <div  className="slides-container">
            <img className="carousel-img" src={foto} alt={nombre} />
            <div className="carousel-text">{nombre}</div>
        </div>
    )
}

