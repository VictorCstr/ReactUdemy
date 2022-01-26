import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const ProdutosTable = produtos.map((produtos) => {
        return(
            <tr key={produtos.id}>
                <td>{produtos.id}</td>
                <td >{produtos.nome}</td>
                <td>R$ {produtos.preco}</td>
            </tr>
        )
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {ProdutosTable}
            </tbody>
        </table>
    )
}