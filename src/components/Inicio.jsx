import React from 'react'
import './Inicio.css'
import fondo from '../images/fondo.jpg'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaInstagram, FaTiktok, FaYoutube, FaCodepen } from "react-icons/fa";


function Inicio() {
  return (
    <>
      <div className='container'  style={{ background: `url(${fondo})no-repeat center center/cover` }}>

        <div className='typescript'>
          <Typewriter
            options={{
              strings: ['Developer', 'Designer', 'Programmer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className='inicio_cont'>
          <div className='inicio_info'>

            <h1>Hola, Soy Cristian Capa</h1>
            <h2>Estudiante de Computación</h2>

            <div className='red_social'>
              <div className='icon'>
                <a href='https://github.com/cristiancr20'><FaGithub /></a>
              </div>

              <div className='icon'>
                <a href='https://www.instagram.com/capita_cr/'><FaInstagram /></a>
              </div>

              <div className='icon'>
                <a href='https://www.tiktok.com/@capitacr'><FaTiktok /></a>
              </div>

              <div className='icon'>
                <a href='https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q'><FaYoutube /></a>
              </div>

              <div className='icon'>
                <a href='https://codepen.io/cristian-capa'><FaCodepen /></a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Inicio