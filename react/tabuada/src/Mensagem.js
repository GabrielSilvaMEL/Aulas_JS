import React from 'react';

class Mensagem extends React.Component{

    exibir = (mensagem) => {
        console.log(mensagem);
    }
    render(){
        return(
            <button onClick={()=>this.exibir("Olá mundo")}>Mensagem</button>
        );
    }
}

export default Mensagem;