import React from 'react';
import TodoList from './TodoList';

/*
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';

import {DidUpdate,ShouldUpdate, BeforeUpdate}from './UpdFun';

*/

// import "./styleindex.css";
//  Passando parâmetros para classe - > 

// this.state={
//   itens:[],
//   text:''
// };


// let n = prompt("Informe um número", "5");

//-------------------------------------------------------------------------

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itens:[],
      text:''
    };
  }
  handleChange = (e) =>{
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    if(!this.state.text.length){
        return;
    }
  
    const item ={
        id: Date.now(),
        text: this.state.text
    }
    this.setState(state=>({
        itens:state.itens.concat(item),
        text:''
    }))
}
  render(){
    return(
      <div>
          <h3>Tarefas</h3>
          <TodoList itens={this.state.itens}/>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
            <button>Inserir</button>
          </form>
      </div>
    );
  }
}

//-------------------------------------------------------------------------





// function App() {
//   return (
//     <div>
//       {/* <Titulo />
//       <Titulo2 />
//       <Tabuada /> */}

//       {/* Passando parâmetros para função */}
//       <div class="meio">
//         <div class="coluna">

//           <Header favcol="Amarelo" />

//           <Mensagem />

//           <Cores />

//           <Titulo titulo="Fatec"
//             texto="Faculdade de Tecnologia de Presidente Prudente"
//             link="https://fatecpp.edu.br"
//           />

//           <Titulo2 />






//           <Tabuada numero={n} />
//           <ShouldUpdate />
//           <BeforeUpdate />
//           <DidUpdate />


//           <TodoList/>


//         </div>
//       </div>



//       {/* Passando parâmetros para Classe
//       <Titulo texto = "Componente Titulo com Classe!" />
//       <Titulo2 />
//       <Tabuada numero = {n}/> */}

//     </div>
//   );
// }

export default App;