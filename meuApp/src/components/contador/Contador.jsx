import React from 'react';
import "./contador.css"

import PassoForm from './PassoForm'
import Botoes from './Botoes'
import Display from './Display'
export default class Contador extends React.Component {
    state= {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 0
    };
    soma = ()=>{
        this.setState({
            numero: this.state.numero+this.state.passo
        });
    }
    diminuir = ()=>{
        this.setState({
            numero: this.state.numero-this.state.passo
        })
    }
    setPasso = (novoPasso)=> {
        this.setState({
            passo: novoPasso,
        })
    }
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo}  setPasso={this.setPasso}/>
                <Botoes incrementar={this.soma} decrementar={this.diminuir}/>
            </div>
        )
    }
}