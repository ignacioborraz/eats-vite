import React, {useState, useEffect} from 'react'
import './carousel.css'
import Slide from './Slide'
import Layout from '../../layouts/Layout'

export default function Carousel() {
    /**
     * Keep the current position in the array
     */
    const [index, setIndex] = useState(0)

    /**
     * ID of interval
     */
    const [intervalId, setIntervalId] = useState(0)

    /**
     * Current object to be read in render
     */
    const [manga, setManga] = useState({})

    /**
     * Collection of mangas
     */
    const [mangas, setMangas] = useState([])

    useEffect(() => {
            console.log('fetch')
            fetch('./manga.json')
                .then(res => res.json())
                .then(data => {
                    setMangas(data);
                    setManga(data[0])
                })
                .catch(err => console.log(err))
        }, []
    )

    useEffect(() => {
        let intervalId = setInterval(next, 3000)
        return () => clearInterval(Number(intervalId))
    }, [index])

    const slide = function (i) {
        setIndex(i)
        setManga(mangas[i])
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
        <Layout>
            <div className="carousel-container fade">
                {manga ? <>
                    <a className="prev" onClick={prev}>&#10094;</a>
                    <Slide nombre={manga.title} foto={manga.photo}/>
                    <a className="next" onClick={next}>&#10095;</a>
                </> : ""}
            </div>
        </Layout>
    )
}
