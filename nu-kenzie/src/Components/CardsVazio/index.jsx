import React from 'react'
import './style.css'
import img from '../../imgs/NoCard.svg'

export const CardsVazio = ({arry}) => {
  if(arry.length == 0){
    return (
      <div>
          <h3 className='h3-vazio'></h3>
          <img className='cards-vazio' src={img} alt="ss" />
      </div>
    )
  }

}
