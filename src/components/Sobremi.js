import React from 'react'
import './Sobremi.css'
import fondo from '../images/fondo.jpg'
import Cristian from '../images/yo.jpg'

function Sobremi() {
    return (
        <>
            <div className='content_me' style={{ background: `url(${fondo})no-repeat center center/cover` }}>
                <h1>Sobre Mi</h1>

                <div className='content_me__info'>
                    <div className='imagen_me'>
                        <img src={Cristian} alt='imagen del creador'></img>
                    </div>

                    <div className='info__me'>
                        <p>Hola, soy Cristian Capa</p>
                        <p>Estudiante de Computación</p>
                        <p>Tengo 21 años </p>
                        <p>Soy de Catamayo, Loja - Ecuador</p>
                        <p>Me gusta el desarrollo web</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Sobremi