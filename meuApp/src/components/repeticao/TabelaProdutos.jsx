import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css'
export default props=>{
    const id = produtos.map((produto,i)=>{
        return(
            <tr style={{ listStyle:'none'}} key={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                <td> {produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
                </tr>
        );})

   
    return(
        <div className="TabelaProdutos">
        <table >
            <thead style={{ listStyle:'none'}}>
            <tr>
            <th> Id </th>
            <th>Nome</th>
            <th>Preco</th>
            </tr>
            </thead>
            <tbody>
                {id}
            </tbody>
        </table>
        
            
        </div>
    )
}