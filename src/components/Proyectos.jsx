import React from 'react'
import './Proyectos.css'
import fondo from '../images/fondo.jpg'
import img_1 from '../images/emision.jpg'
import img_2 from '../images/Store_apple.jpg'
import img_3 from '../images/Audifonos_store.jpg'
import img_4 from '../images/cinePlus.jpg'
import img_5 from '../images/juegocalamar.jpg'
import img_6 from '../images/tatto.jpg'

import Card from './Card'

function Proyectos() {
    return (
        <>
            <div className='content' style={{ height: '100%', background: `url(${fondo})no-repeat center center/cover` }}>
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

                            <div className='enlace'>
                                <a href='https://cristiancr20.github.io/Semillas-De-Amor/'>
                                    Visitar Página
                                </a>
                            </div>
                        </div>
                    </div>

                    <h2 className='titulo_proyect'>Proyectos GitHub</h2>

                    <div className='proyectos_gh'>
                        <Card title="Apple Store"
                            img={img_2}
                            info="Página web para una tienda de apple"
                            enlace="https://github.com/cristiancr20/Iphone_Store_React" />

                        <Card title="Headphone Store"
                            img={img_3}
                            info="Página web para una tienda de audifonos"
                            enlace="https://github.com/cristiancr20/Audifonos" />

                        <Card title="Headphone Store"
                            img={img_4}
                            info="Página web para una ver peliculas"
                            enlace="https://github.com/cristiancr20/CinePlus" />

                        <Card title="Squid Game"
                            img={img_5}
                            info="Página web sobre Squid Game"
                            enlace="https://github.com/cristiancr20/Juego_Calamar.git" />

                        <Card title="Tatto Salon"
                            img={img_6}
                            info="Página web para un salon de tatuajes"
                            enlace="https://github.com/cristiancr20/Tatto_Salon.git" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Proyectos