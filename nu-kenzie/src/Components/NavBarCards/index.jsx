import React from 'react'
import './style.css'
import { Filtro } from '../Lista/Cards/Filtro/index'

export const NavBarCards = ({arry, removerValor}) => {
  console.log(removerValor)
  return (
    <div className='qualquer'>
        <h3>Resumo Financeiro</h3>
        <div className='div-button'>
            <button className='button-rosa' onClick={() => Filtro(arry, 'Todos', removerValor={removerValor})}>Todos</button>
            <button className='button' onClick={() => Filtro(arry, 'Entrada', removerValor={removerValor})}>Entrada</button>
            <button className='button' onClick={() => Filtro(arry, 'Saída', removerValor={removerValor})}>Despesas</button>
        </div>
    </div>
  )
}
