import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div>
                <h1>To do List</h1>
                <ul>To{this.props.itens.map(
                    item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>

            
            </div>
        )
    }
    handleChange = (e) =>{
        this.setState({text: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.handleChange.text.length){
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
}
export default TodoList;