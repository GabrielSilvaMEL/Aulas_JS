import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
// import "./styleindex.css";
//  Passando parâmetros para classe - > 
let n = prompt("Informe um número","5");


function App() {
  return (
    <div>
      {/* <Titulo />
      <Titulo2 />
      <Tabuada /> */}

      {/* Passando parâmetros para função */}
      <div class="meio">
        <div class="coluna">
          <div class="esquerda">
          <Header favcol="Amarelo"/>
            <Mensagem />
            
            <Cores />
            <Titulo titulo = "Fatec"
                    texto= "Faculdade de Tecnologia de Presidente Prudente"
                    link= "https://fatecpp.edu.br"
            />
            <Titulo2 />
          </div>
          <div class="direita">
            
            <Tabuada numero = {n}/>
          </div>  
        </div>
    </div>
      
      

      {/* Passando parâmetros para Classe
      <Titulo texto = "Componente Titulo com Classe!" />
      <Titulo2 />
      <Tabuada numero = {n}/> */}
      
    </div>
  );
}

export default App;