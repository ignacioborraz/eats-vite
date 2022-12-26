import React, {useState, useEffect} from 'react'
// import mangas from '../manga'
import Slide from './Slide'

export default function Carousel() {
    const [numero, setNumero] = useState(0)
    const [id, setId] = useState(0)
    const [mangas, setMangas] = useState([])

    const traerData = async () => {
        try {
            const res = await fetch('../manga.json')
            const data = await res.json()
    
            setMangas(data)
            console.log(data)

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetch('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
                console.log(mangas)
            })
            .catch(err => console.log(err))
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
        if(numero > 0) {
            setNumero(numero - 1)
        } else {
            setNumero(mangas.length - 1)
        }
        clearInterval(id)
        console.log('prev')
    }

    const next = () => {
        if(numero < mangas.length - 1) {
            setNumero(numero + 1)
        } else {
            setNumero(0)
        }
        clearInterval(id)
        console.log('next')
    }


  return (
    <div  className="slideshow-container">
        <Slide nombre={mangas[numero]?.title} foto={mangas[numero]?.photo}/>
        <a className="prev" onClick={prev}>&#10094;</a>
        <a className="next" onClick={next}>&#10095;</a>
    </div>
  )
}
