import React from "react";

export default function ComParametro (props){
    return (
        <div>
            <h2> {props.materia} </h2>
            <p> {props.aluno} </p>
            <p> {props.nota} </p>
            <p>Informamos como parametro apenas o props, e recebemos ela com :   props.oQueInformarmosNaDeclaração</p>
        </div>
    )
}