import React from "react";

import Primeiro from "./componentes/basicos/Primeiro";
import Seg from "./componentes/basicos/Segundo";
import Props from "./componentes/basicos/ComParametroJSX";
import Fragmento from "./componentes/basicos/Fragmento";
import Numero from "./componentes/basicos/NumeroAleatorio";
import Card from "./componentes/layout/card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import TabelaProdutos from "./componentes/repeticao/TabelaProdutos";

export default (props) => {
  return (
    <div id="app">
      <h1>Fundamentos de React </h1>

      <Card title="Desafio de repetição com produtos" color="#ff0000">
          <TabelaProdutos/>
      </Card>

      <div className="Cards">
      <Card title="Repetição" color="#000ff8">
          <ListaAlunos/>
      </Card>

      <Card title="Componentes com filhos" color="#00c8f8">
          <Familia sobrenome = "Ferreira" />
          <FamiliaMembro/>
      </Card>

        <Card title="Número Aleatório" color="#00ff00">
          <Numero min={0} max={100} />
          <Numero min={0} max={-100} />
        </Card>

        <Card title="Teste de Fragmento" color="#ffff00">
          <Fragmento />
        </Card>

        <Card title="Situação do aluno" color="#00ffff">
          <Props materia="Matemática" aluno="Victor Castro" nota={8} />
        </Card>

        <Card title="Primeiros componentes" color="#ff00ff">
          <Primeiro></Primeiro>
          <Seg></Seg>
        </Card>
      </div>
    </div>
  );
};
