import React from "react";

export default function Numero (props){
    const aleatorio = Math.ceil(Math.random() * props.max )
    return (
    <div>
        <h2>Valor aleatório</h2>
        <p>Valor Mínimo: {props.min}</p>
        <p>Valor Mínimo: {props.max}</p>
        <p>Valor Escolhido: {aleatorio}</p>
        
    </div>
    )
}