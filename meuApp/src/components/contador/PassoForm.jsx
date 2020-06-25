import React from 'react'
 
export default props=>{
    return(
        <div>
           
                
                <div><label htmlFor="passoInput">Passo:</label>
                <input id="passoInput" type="number" value={props.passo} onChange={e=>props.setPasso(+e.target.value)}></input></div>
        </div>
    )
 }