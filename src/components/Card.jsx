import React from 'react'
import { FaGithub } from "react-icons/fa";
import './Card.css'
function Card(props) {
    return (
        <>
            <div className='proyecto_card'>
                <div className='title'>{props.title}</div>

                <div className='informacion_card'>
                    <div className='imagen_card'>
                        <img src={props.img} alt='img'></img>
                    </div>

                    <div className='info_card'>
                        <p>{props.info}</p>
                    </div>

                    <div className='enlace_card'>
                        <a href={props.enlace}>
                            Visitar GitHub <FaGithub />
                        </a>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Card