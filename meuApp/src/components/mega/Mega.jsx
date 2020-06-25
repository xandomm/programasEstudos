import React, { useState } from 'react'

export default props=>{
    function gerarNumeros(qtde){
        return[1,2,3,4,5,6,7]
    }
    
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max+1 - min))+min
        return array.includes(aleatorio)? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums)=>{
            const novoNumero = gerarNumeroNaoContido(1,60, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2)=>n1-n2)
        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais =Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
   
    return(
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' | ')}</h3>
            <div><label>Qtde de numeros</label><input type="number" value={qtde}
            onChange={e=>setQtde(+e.target.value)}
            ></input></div>
            
            <button onClick={_=>setNumeros(gerarNumeros(qtde))} onChange={props.setQtde}> enviar</button>
        </div>
    )
}