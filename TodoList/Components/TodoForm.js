import React from 'react';
import Shortid from 'shortid'
export default class TodoForm extends React.Component{
    state = {
        text:""
    };

    handleChange =(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit =(event) =>{
        event.preventDefault();
        //submit the form
        this.props.onSubmit({
            id: Shortid.generate(),
            text:this.state.text,
            complete:false
        });
        this.setState({
            text:""
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter your task"/>
                    <button onClick={this.handleSubmit}>Add</button>
                </div>
            </form>
        )
    }
}
