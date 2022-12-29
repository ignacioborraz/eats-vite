import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './comics.css'
//import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import categoryActions from '../../store/categories/actions'
const { obtenerCategorias } = categoryActions

export default function Carousel() {
    const [mangas, setMangas] = useState([])
    //const [categories, setCategories] = useState([])
    const { loaded,categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
                //console.log(mangas)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
/*         axios.get('http://localhost:8000/categories')
            .then(response => {
                // funcion para manejar la respuesta, por ejemplo
                console.log('axios', response.data.response)
                let myCategories = response.data.response
                setCategories(myCategories)
            })
            .catch(err => console.log(err)) */
            if (!loaded) {
                dispatch(obtenerCategorias())
            }
    }, [])

    return (
        <>
            <h1>todos los comics</h1>
            <h2>con un link hacia la página de detalle</h2>
            {categories?.map(category => <p>{category.name}</p>)}
            <div className="comics-container fade">
                {mangas?.map(manga =>
                <div key={manga.id} className="comics-card">
                    <img className="comics-img" src={manga.photo} alt={manga.id} />
                    <LinkRouter to={`/comic/${manga.id}`} className="comics-text">{manga.title}</LinkRouter>
                </div> )}
            </div>
        </>
    )
}
