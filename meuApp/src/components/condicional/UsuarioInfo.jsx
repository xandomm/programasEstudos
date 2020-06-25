import React from 'react';
import If, {Else} from './it'

export default props=>{
    const usuario = props.usuario || {}
    return (
        <div>
        <If test={usuario && usuario.nome}>
        Seja bem vindo { props.usuario.nome }</If>
        <If test={!usuario || !usuario.nome}>
        Seja bem vindo amigao</If>
        </div>
    )
}