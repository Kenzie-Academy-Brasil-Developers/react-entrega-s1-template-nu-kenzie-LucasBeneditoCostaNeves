import "./style.css"
import React from 'react'

import { Card } from './Cards'
import { CardsVazio } from "../CardsVazio"

export const Lista = ({arry, removerValor}) => {
  return (
    <ul className='lista'>
        <CardsVazio arry={arry}/>
        {arry.map((element) => Card(element,arry,removerValor))}
    </ul>
  )
}
