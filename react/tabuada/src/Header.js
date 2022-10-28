import React from 'react';

class Header extends React.Component{
    
    constructor(props){  
        super(props);
        this.state = {corfavorita: "Vermelho"};
    }

    static getDerivedStateFromProps(props, state){   
       if (props.corfavorita == "Vermelho"){
            return {corfavorita: props.favcol};    
       }
    }
    componentDidMount(props){
        setTimeout(()=>{
            this.setState({corfavorita:"Verde"})
            console.log(this.state.corfavorita);
        },1000);
    }

    render(){
        return(
            <h1>Minha cor favorita é {this.state.corfavorita}</h1>
        )
    }
}

export default Header;