import React from 'react'
import img from '../../imgs/illustration.svg'
import './style.css'

export const HomePage = ({setHome}) => {
  return (
    <div className='preto'>
      <div className='div-inicial'>
        <div className='flex'>
         <h2 className='h2-rosa'>Nu</h2>
         <h2 className='h2-branco'>Kenzie</h2>
        </div>
      <h3 className='texto-inicial'>Centralize o controle das suas finanças</h3>
      <p className='descricao-inicial'>de forma prática e segura</p>
      <button className='botao-inicial' onClick={() => setHome(true) }>Iniciar</button>
    </div>
    <img className='img-inicial' src={img} alt="" srcset="" />
    </div>
  )
}
