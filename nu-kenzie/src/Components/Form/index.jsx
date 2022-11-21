import React from 'react'
import './style.css'
import { useState } from 'react'
import { Option } from '../Select/Option'
import '../../Style/html.css'

export const Form = ({tipos,valores, addValor}) => {
  const [todosValores, setTodosValores] = useState({
        description: '',
        value: '',
        type: tipos[0]
    })

    function submit(event){
      event.preventDefault()
      let select = event.target.children[1].children[1].children[1].value
      let input = event.target.children[0].children[1]
      let input2 = event.target.children[1].children[0].children[1]
      if(input.value != '' && input2.value != ''){
        addValor(todosValores)
        setTodosValores({
          description: '',
          value: '',
          type: select
        })
      }
      input.value = ''
      input2.value = ''
    }

  return (
    <form onSubmit={submit}>
          <div className='div-descricao'>
            <p className='p-descricao'>Descrição</p>
            <input id='descricao' className='descricao' onChange={(event) => setTodosValores({...todosValores, description: event.target.value})} placeholder='Digite aqui sua descrição'></input>
            <span className='span-descricao'>Ex: Compra de roupas</span>
          </div>
          <div>
            <div className='column'>
              <span className='name-select'>Valor:</span>
              <input type='number' min='1' className='input' onChange={(event) => setTodosValores({...todosValores, value: event.target.value})} placeholder='Valor'>
              </input> 
            </div>
            <div className='column'>
              <span className='name-select'>Tipo de valor:</span>
              <select className='select' onChange={(event) => setTodosValores({...todosValores, type: event.target.value})}>
                <Option arry={tipos}/>
              </select>
            </div>
          </div>
          <button id='button-form' className='button-form'>Inserir Valor</button>
    </form>
  )
}
