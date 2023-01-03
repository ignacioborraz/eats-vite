import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './comics.css'
import { useSelector, useDispatch } from 'react-redux'
import categoryActions from '../../store/categories/actions'
const { obtenerCategorias } = categoryActions

export default function Comics() {
    const [mangas, setMangas] = useState([])
    const { loaded,categories } = useSelector((state) => state.categories)
    //del reductor categories desestructuro los estados que necesito
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('./manga.json')
            .then(res => res.json())
            .then(data => setMangas(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (!loaded) {
            dispatch(obtenerCategorias())
        }
    }, [])

    return (
        <>
            <h1>todos los comics</h1>
            <h2>con un link hacia la página de detalle</h2>
            <div className="comics-categories">
                {categories?.map((category,index) => <button className='comics-buttons' key={index}>{category.name}</button>)}
            </div>
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