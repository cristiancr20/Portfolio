import React from 'react'
import './Proyectos.css'
import fondo from '../images/fondo.jpeg'
import img_1 from '../images/emision.jpg'
import img_2 from '../images/Store_apple.jpg'
import img_3 from '../images/Audifonos_store.jpg'

function Proyectos() {
    return (
        <>
            <div className='content' style={{ background: `url(${fondo})no-repeat center center/cover` }}>
                <h1>Proyectos</h1>
                <div className='cont-proyectos'>

                    <h2 className='titulo_proyect'>Proyecto Sitio Web</h2>
                    <div className='proyecto'>
                        <div className='title'>Semillas de amor</div>

                        <div className='informacion'>
                            <div className='imagen'>
                                <img src={img_1} alt='img'></img>
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

                    <h2 className='titulo_proyect'>Proyectos GitHub</h2>

                    <div className='proyecto'>
                        <div className='title'>Apple Store</div>

                        <div className='informacion'>
                            <div className='imagen'>
                                <img src={img_2} alt='img'></img>
                            </div>

                            <div className='info'>
                                <p>Pagina web para una tienda de Apple</p>
                            </div>

                            <div  className='enlace'>
                                <a href='https://github.com/cristiancr20/Iphone_Store_React'>
                                    Visitar GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='proyecto'>
                        <div className='title'>Headphones Store</div>

                        <div className='informacion'>
                            <div className='imagen'>
                                <img src={img_3} alt='img'></img>
                            </div>

                            <div className='info'>
                                <p>Pagina web para una tienda de Apple</p>
                            </div>

                            <div  className='enlace'>
                                <a href='https://github.com/cristiancr20/Audifonos'>
                                    Visitar GitHub
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