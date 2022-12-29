import React, {useState, useEffect} from 'react'
import './carousel.css'
import Slide from './Slide'

export default function Carousel() {
    const [index, setIndex] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [manga, setManga] = useState({})
    const [mangas, setMangas] = useState([])

    useEffect(() => {
            fetch('./manga.json')
                .then(res => res.json())
                .then(data => {
                    setMangas(data)
                    setManga(data[index])
                })
                .catch(err => console.log(err))
        }, []
    )

    useEffect(() => {
        let id = setInterval(next, 3000)
        setIntervalId(id)
        return () => clearInterval(Number(id))
    }, [index])

    const slide = (i) => {
        setIndex(i)
        console.log(index)
        setManga(mangas[i])
        console.log(mangas[i])
        clearInterval(intervalId)
    }

    const prev = () => {
        let i = index - 1
        if (i < 0) {
            i = mangas.length - 1
        }
        slide(i)
    }

    const next = () => {
        let i = index + 1
        if (i === mangas.length) {
            i = 0
        }
        slide(i)
    }

    return (
        <div className="carousel-container fade">
            {manga && <>
                <a className="prev" onClick={prev}>&#10094;</a>
                <Slide nombre={manga.title} foto={manga.photo}/>
                <a className="next" onClick={next}>&#10095;</a>
            </>}
        </div>
    )
}
