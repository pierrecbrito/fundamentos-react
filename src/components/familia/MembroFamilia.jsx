import React from "react"
import './MembroFamilia.css'

export default (props) => {
    return (
        <div className="MembroFamilia">
            {props.nome} da família {props.familia}
        </div>
    )
}