import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/NumeroAleatorio"
import Card from "./components/layout/Card";

export default function App() {
    return (
        <div>
            <Card titulo="Número Aleatório">
                <NumeroAleatorio min={1} max={10}/>
            </Card>
           
            <Primeiro/>
            <ComParametro titulo="Título 1" subtitulo="Título 2" nota={7.1}/>
            <Fragmento />
        </div>
    )
}