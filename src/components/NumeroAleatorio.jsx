import React from "react";

export default function({min, max}) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
    return (
        <h4>{numeroAleatorio}</h4>
    )
}