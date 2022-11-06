import React from "react";
//update functions from

//shouldComponenteUpdate
class ShouldUpdate extends React.Component {
    constructor(){
        super();
        this.state = { color: "#262626" };
    }
    render(){
        return(
            <div>
                <hr></hr>
                <h3>Exemplo de 'shouldComponenteUpdate'</h3>
                <h4 style={{color:this.state.color}}>Segunda-Feira</h4>
                <button onClick={()=>this.setState({color:'#66999D'})}>Mudar Cor</button>
                <MeuComp/>
            </div>
        );
    }
}
class MeuComp extends React.Component{
    render(){
        console.log('A função foi chamada')
        return(
            <h1>Está funcionando</h1>
        );
    }
}

// |-------------------------------------------------------------------------------------|

// getSnapshotBeforeUpdate
class BeforeUpdate extends React.Component {
    state = {
        name: 'Ana',
    };

    componentDidMount(){
        setTimeout(()=>{
            this.setState({name: 'Joao'});
        },1000)
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('prev').innerHTML = 'Nome Anterior: ' + prevState.name;
    }

    componentDidUpdate(){
        document.getElementById('new').innerHTML = 'Nome Atual: ' + this.state.name;
    }

    render(){
        return(
            <div>
                <br></br>
                <h3>Exemplo de 'getSnapshotBeforeUpdate'</h3>
                <h4 id="prev"></h4>
                <h4 id="new"></h4>
            </div>
        );
    }
}

// |-------------------------------------------------------------------------------------|

// componentDidUpdate
class DidUpdate extends React.Component {
    state = {
        nome: 'Pedro',
    };

    componentDidMount(){
        setTimeout(()=>{
            this.setState({nome:"Guilherme"});
        },3000);
    }

    componentDidUpdate(){
        document.getElementById('informacao').innerHTML = 'Nome:' + this.state.nome;
    }

    render(){
        return(
            <div>
                <br></br>
                <h3>Exemplo de 'componentDidUpdate'</h3>
                <h4>Nome: {this.state.nome}
                    <div id="informacao"></div>
                </h4>
            </div>
        );
    }
}

export {ShouldUpdate,BeforeUpdate,DidUpdate};