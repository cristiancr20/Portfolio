import React from 'react'
import './Inicio.css'
import fondo from '../images/fondo.jpeg'

function Inicio() {
  return (
    <>
      <div className='container' style={{background: `url(${fondo})no-repeat center center/cover`}}>
        <h1>Hola, Soy Cristian Capa</h1>
        <h2>Estudiante de Computacion</h2>
      </div>
    </>
  )
}

export default Inicio