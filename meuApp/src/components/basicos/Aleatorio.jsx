import React from 'react'


export default function Aleatorio(props) {

    var num = (Math.random()*(props.max - props.min)) +props.min
    
    return(
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor minimo: </strong> {props.min} </p>
            <p><strong>Valor Maximo: </strong> {props.max}</p>
            <p><strong>Valor Escolhido: </strong> {num.toFixed(2).replace('.', ',')}</p>
            
        </div>
    )
}