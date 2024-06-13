import React from 'react'
import ImageProfile from '../img/portifolio.jpg'
const Nome = () => {
  return (
    <div className='nome-image-container'>
        <img src={ImageProfile} alt="" id='image-profile'/>
        <div className='texto-sobre'>
            <p id='nome'>I'm Edilson Ricardo</p>
            <p id='profissao'>WEB Developer</p>
        </div>
    </div>
  )
}

export default Nome