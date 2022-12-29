import React, { useState, useEffect } from 'react'
import './carousel.css'
import Slide from './Slide'
import axios from 'axios'

export default function Carousel() {
    const [numero, setNumero] = useState(0)
    const [id, setId] = useState(0)
    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])

    const traerData = async () => {
        try {
            const res = await fetch('../manga.json')
            const data = await res.json()

            setMangas(data)
            console.log(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {


        fetch('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
                // console.log(mangas)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/categories')
            .then(response => {
                // funcion para manejar la respuesta, por ejemplo
                console.log('axios', response.data.response)
                let myCategories = response.data.response
                setCategories(myCategories)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(mangas)
    useEffect(() => {

        let idInterval = setInterval(() => {
            next()
        }, 5000)

        setId(idInterval)

        return clearInterval(id)

    }, [numero])

    // useEffect(() => {
    //     console.log('Se monto el componente y/o se actualizó')

    //     return () => {
    //         console.log('Se desmonto el componente')
    //     }
    // }, [numero])

    const prev = () => {
        if (numero > 0) {
            setNumero(numero - 1)
        } else {
            setNumero(mangas.length - 1)
        }
        clearInterval(id)
        console.log('prev')
    }

    const next = () => {
        if (numero < mangas.length - 1) {
            setNumero(numero + 1)
        } else {
            setNumero(0)
        }
        clearInterval(id)
        console.log('next')
    }

    return (
        <>
            <h1>este es el carousel 2</h1>
            <h2>cada slide tiene un link hacia la página de detalle</h2>
            {
                categories?.map(category => <p>{category.name}</p>)
            }
            <div className="carousel-container fade">
                <a className="prev" onClick={prev}>&#10094;</a>
                <Slide nombre={mangas[numero]?.title} foto={mangas[numero]?.photo} id={mangas[numero]?.id} />
                <a className="next" onClick={next}>&#10095;</a>
            </div>
        </>
    )
}
