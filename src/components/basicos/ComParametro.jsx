import React from "react"

export default function({titulo, subtitulo, nota}) {
    const status = nota >= 7 ? 'Aprovado!' : 'Reprovado'

    return (
    <div>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{status}</p>
    </div>
    )
}