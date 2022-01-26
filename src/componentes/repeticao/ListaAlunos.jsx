import React from "react";
import Alunos from '../../data/alunos.js'

export default props => {
    const alunosLI = Alunos.map((Alunos) => {
        return(
            <li key={Alunos.id}>
                {Alunos.id} {Alunos.nome} {"->"} {Alunos.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {alunosLI}
            </ul>
        </div>
    )
}