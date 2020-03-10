import React from 'react';

import TodoForm from '../components/TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component{

    state ={
        todos:[]
    };

    addTodo =(todo) =>{
        this.setState({
            todos: [todo,...this.state.todos]
        })
    }

    toggleComplete = (id) =>{
        this.setState({
            todos: this.state.todos.map(todo =>{
                if (todo.id === id){
                    //supposed to update
                    return{
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else{
                    return todo;
                }
            })
        })
    }

    handleDelete =(id) =>{
        this.setState({
            todos: this.state.todos.filter(x => x.id !==id)
            })
    }

    render(){
        return(
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => 
                    (<Todo key={todo.id} onDelete={()=>this.handleDelete(todo.id)} toggleComplete={()=> this.toggleComplete(todo.id)} id={todo.id} todo={todo}/>))}
            </div>
        )
    }
}
