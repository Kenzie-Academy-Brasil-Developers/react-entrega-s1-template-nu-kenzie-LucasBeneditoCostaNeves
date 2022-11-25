import React from 'react'
import './style.css'
import img from '../../../../imgs/NoCard.svg'
import lixeira from '../../../../imgs/Property 1=Default.png'

export const Filtro = (arry, titulo,removerValor) => {
    let ul = document.querySelector('.lista')
    console.log(arry)
    console.log(titulo)
    console.log(ul)

    let filtro = arry.filter((element) => element.type == titulo)
    if(titulo == 'Todos' && arry.length > 0){
      ul.innerHTML = ''
      arry.map((element) => render(element,ul,removerValor))
    }
    console.log(filtro)
    if(filtro.length > 0){
      ul.innerHTML = ''
      filtro.map((element) => render(element,ul,removerValor))
    }else if(filtro.length == 0 && titulo != 'Todos'){
      ul.innerHTML = ''
      ul.insertAdjacentHTML('beforeend',`
      <img src=${img} class='img-card' />
      `
      )
    }
  
}

 export const render = (element,ul,remover) => {
  let apagar = remover.removerValor.removerValor

  ul.insertAdjacentHTML('beforeend',`
  <li id=${element.description} class="${element.type}">
        <div >
            <h2 class='descricao-card'>${element.description}</h2>
            <p class='tipo-card'>${element.type}</p>
        </div>
        <div class='flex'>
            <span class='valor-card'>${element.value}</span>
            <img class='img-card' src=${lixeira} id=${element.description} onclick="${() => apagar(element.description)}"/>
        </div>
    </li>` 
  )
 }