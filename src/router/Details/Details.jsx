import React, {useState, useEffect} from 'react'
import './details.css'
import { useParams } from 'react-router-dom'

export default function Details() {
    const [manga, setManga] = useState({})
    const { id } = useParams()
    //console.log(id)

    useEffect(() => {
        fetch('/manga.json')
            .then(res => res.json())
            .then(data => {
                let finded = data.find(manga => id===manga.id)
                setManga(finded)
                //console.log(finded)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <>
        <h1>DETALLE</h1>
        <h2>de cada comic/manga</h2>
        <div  className="details-container fade">
            <img className="details-img" src={manga?.photo} />
            <p className="details-title">{manga?.title?.toUpperCase()}</p>
            <p className="details-text">{manga?.description}</p>
        </div>
    </>
  )
}
