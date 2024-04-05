import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/NumeroAleatorio"
import Card from "./components/layout/Card";
import Cards from "./components/layout/Cards";
import Familia from "./components/familia/Familia";
import MembroFamilia from "./components/familia/MembroFamilia";

export default function App() {
    return (
        <div>
            <Cards>
                <Card titulo="Famílias">
                    <Familia>
                        <MembroFamilia nome="Pierre" familia="Brito"/>
                        <MembroFamilia nome="Caynam" familia="Pereira"/>
                        <MembroFamilia nome="Pollyana" familia="Brito"/>
                    </Familia>
                </Card>
                <Card titulo="Número Aleatório">
                    <NumeroAleatorio min={1} max={10}/>
                </Card>
                <Card titulo="Primeiro componente">
                    <Primeiro/>
                </Card>
                <Card titulo="Com parâmetro">
                    <ComParametro titulo="Título 1" subtitulo="Título 2" nota={7.1}/>
                </Card>
                <Card titulo="Fragmentos">
                    <Fragmento/>
                </Card>
            </Cards>  
        </div>
    )
}