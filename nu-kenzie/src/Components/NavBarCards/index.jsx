import React from 'react'
import './style.css'
import { Filtro } from '../Lista/Cards/Filtro/index'

export const NavBarCards = ({arry, removerValor}) => {

  return (
    <div className='qualquer'>
        <h3 className='h3-navBar'>Resumo Financeiro</h3>
        <div className='div-button'>
            <button className='button' autoFocus onClick={() => Filtro(arry, 'Todos', removerValor={removerValor})}>Todos</button>
            <button className='button' onClick={() => Filtro(arry, 'Entrada', removerValor={removerValor})}>Entrada</button>
            <button className='button' onClick={() => Filtro(arry, 'Saída', removerValor={removerValor})}>Despesas</button>
        </div>
    </div>
  )
}
