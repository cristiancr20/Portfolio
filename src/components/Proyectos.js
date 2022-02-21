import React from 'react'
import './Proyectos.css'
import fondo from '../images/fondo.jpeg'
import img_1 from '../images/emision.jpg'

function Proyectos() {
    return (
        <>
            <div className='content' style={{ background: `url(${fondo})no-repeat center center/cover` }}>
                <h1>Proyectos</h1>
                <div className='cont-proyectos'>
                    <div className='proyecto'>
                        <div className='title'>Semillas de amor</div>

                        <div className='informacion'>
                            <div className='imagen'>
                                <img src={img_1}></img>
                            </div>

                            <div className='info'>
                                <p>Pagina web para una emisora de radio</p>
                            </div>

                            <div  className='enlace'>
                                <a href='https://cristiancr20.github.io/Semillas-De-Amor/'>
                                    Visitar Página
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='proyecto'>
                        <div className='title'>Semillas de amor</div>

                        <div className='informacion'>
                            <div className='imagen'>
                                <img src={img_1}></img>
                            </div>

                            <div className='info'>
                                <p>Pagina web para una emisora de radio</p>
                            </div>

                            <div  className='enlace'>
                                <a href='https://cristiancr20.github.io/Semillas-De-Amor/'>
                                    Visitar Página
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Proyectos