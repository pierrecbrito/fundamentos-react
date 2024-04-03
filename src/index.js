import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="Título 1" subtitulo="Título 2" nota={7.1}/>
    </div>, 
element)