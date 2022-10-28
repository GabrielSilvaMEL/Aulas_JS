import React from 'react';

// class Titulo extends React.Component{  
//     render(){
//       return <h2>Componente Título com Classe</h2>;
//     }
// }
// Quando usamos classes, não
// precisamos receber props pois quando estendemos o componente React, o props já é
// disponibilizado em nossas classes. Então, basta usar: this.props.nome_props
// dentro da classe.
class Titulo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:this.props.titulo,
            texto: this.props.texto,
            link: this.props.link
        }
    }
    render(){
      return (
        <div>
            <h1>{this.state.titulo}</h1>
            <p>{this.state.texto}</p>
            <a href={this.state.link}>{this.state.link}</a>
        </div>
        );
    };
}

export default Titulo;