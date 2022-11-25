import React from 'react'
import './style.css'

export const Saldo = (valores) => {
    let total = valores.arry
    let saida = total.filter((element) => element.type == 'Saída')
    let saidaValor = saida.map((element) => element.value)
    let entrada = total.filter((element) => element.type == 'Entrada')
    let entradaValor = entrada.map((element) => element.value)
    let saldo = Number(0)

    if(saidaValor.length > 0){
        let reduceSaida = saidaValor.reduce((valor,valorAtual) => Number(valor) + Number(valorAtual))
        saldo += -reduceSaida
    }
    if(entradaValor.length > 0){
        let reduceEntrada = entradaValor.reduce((valor,valorAtual) => Number(valor) + Number(valorAtual))
        saldo += Number(reduceEntrada)
    }
    console.log(saldo)

    if(total.length > 0){
        return (
            <div className='caixa-saldo'>
            <div className='div-saldo'>
              <p className='p-saldo'>Valor Total:</p>
              <span className='rosa'>${saldo}</span>
            </div>
            <span className='span-saldo'>O valor se refere ao saldo</span>
            </div>
          )
    }

}
