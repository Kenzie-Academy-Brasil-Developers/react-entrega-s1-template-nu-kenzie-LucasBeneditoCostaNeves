import React from 'react'
import './style.css'
import img from '../../../imgs/Property 1=Default.png'

export const Card = (element,arry,removerValor) => {
  return (
    <li id={element.description} className={`${element.type}`}>
        <div >
            <h2 className='descricao-card'>{element.description}</h2>
            <p className='tipo-card'>{element.type}</p>
        </div>
        <div className='flex'>
            <span className='valor-card'>{element.value}</span>
            <img src={img} className='img-card' onClick={() => removerValor(element.description)} />
        </div>
    </li>
  )
}

 

 