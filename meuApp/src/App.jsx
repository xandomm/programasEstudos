import React from 'react';
import './App.css'

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador';
import Input from './components/formulario/input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
export default function App(props){
    return(
        <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        
        <Card titulo="Mega"  color="#424242">
        <Mega/>
      </Card>
        <Card titulo="Componente Controlado (input)"  color="#099BAC">
        <Contador numeroInicial={0}/>
      </Card>
        <Card titulo="Componente Controlado (input)"  color="#e6e6fa">
        <Input/>
      </Card>
        <Card titulo="Comunicacao indireta"  color="#808000">
        <IndiretaPai/>
      </Card>
        <Card titulo="Comunicacao direta"  color="#2E4053">
        <DiretaPai/>
      </Card>
        <Card titulo="Renderizacao Condicional"  color="#4A235A">
      <ParOuImpar numero={203}/>
      <UsuarioInfo usuario={{email: 'Fernando@shit'}}/>
      <UsuarioInfo usuario={{nome: 'Fernando'}}/>
      </Card>
        <Card titulo="Tabela de produtos"  color="gray">
      <TabelaProdutos/>
      </Card>
        <Card titulo="Repeticao"  color="pink">
      <ListaAlunos/>
      </Card>
        <Card titulo="Componentes com filhos"  color="cadetblue">
      <Familia sobrenome="Silva">
      <FamiliaMembro nome="alexandre" sobrenome={props.sobrenome} ></FamiliaMembro>
      <FamiliaMembro nome="Jardexpunhetinha" {...props}></FamiliaMembro>
      <FamiliaMembro nome="filip"  sobrenome={props.sobrenome}></FamiliaMembro>
      </Familia>
      </Card><Card titulo="Desafio Aleatorio" color="#090">
      <Aleatorio max={8} min={4}/>
      </Card>
      <Card titulo="Desafio Aleatorio" color="orange">
      <Fragmento/>
      </Card>
      <Card titulo="Desafio Aleatorio">
      <ComParametro titulo="Segundo Componente" Subtitulo="Muito maneiro"/>
      </Card>
      </div>
      
      
      
    </div>
    )
}