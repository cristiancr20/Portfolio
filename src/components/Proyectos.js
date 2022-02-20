import React from 'react'
import './Proyectos.css'
import fondo from '../images/fondo.jpeg'
import img_1 from '../images/emision.jpg'

function Proyectos() {
    return (
        <>
            <div className='content' style={{ background: `url(${fondo})no-repeat center center/cover` }}>
                <div className='content-proyects'>
                    <h1>Proyectos</h1>
                    <div className='cont-proyectos'>
                        <a href="https://cristiancr20.github.io/Semillas-De-Amor/" className='enlace'>
                            <h3>Semillas de Amor fm</h3>

                            <div className='cont'>
                                <div className='imagen'>
                                    <img src={img_1} alt='imagen proyecto 1'></img>
                                </div>
                                <div className='cont-info'>
                                    <p>Realice una página para que pueda funcionar una radio</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Proyectos