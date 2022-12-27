import React, {useState, useEffect} from 'react'
import './carousel.css'
import Slide from './Slide'

export default function Carousel() {
    const [numero, setNumero] = useState(0)
    const [id, setId] = useState(0)
    const [mangas, setMangas] = useState([])

    useEffect(() => {
        fetch('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(mangas)
    useEffect(
        ()=>{  
          let idInterval = setInterval(
            ()=> { //primer parametro la funcion que se va a ejecutar en cada intervalo de tiempo
                next()
                //console.log('pasaron 5 segundos')
            },
            5000 //segundo parametro es el intervalo en milisengudos
            //retorna un id asociado al intervalo (que es un numero)
            //acepta una funcion que resetea el intervalo/contador con ese id
          )
          setId(idInterval)
          return clearInterval(id)
          // eslint-disable-next-line
        },[numero]
    )

    const prev = () => {
        if (numero>0) {
          setNumero(numero-1)
        } else {
          setNumero(mangas.length-1)
        }
        //console.log('se ejecutó prev')
        clearInterval(id)
    }

    const next = () => {
        console.log(numero , mangas.length-1)
        if (numero<mangas.length-1) {
          setNumero(numero+1)
        } else {
          setNumero(0)
        }    
        //console.log('se ejecutó next')
        clearInterval(id)
      }    

    return (
        <div  className="carousel-container fade">
            {mangas.length > 0 && <>
                <a className="prev" onClick={prev}>&#10094;</a>
                <Slide nombre={mangas[numero].title} foto={mangas[numero].photo}/>
                <a className="next" onClick={next}>&#10095;</a>
            </>}
        </div>
    )
}
