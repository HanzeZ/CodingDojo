import React from 'react';
export default props => (
    <div>
        <div style={{
            //check if complete is true. If it is, show a line-through, if not, empty string
            textDecoration: props.todo.complete ? 'line-through' : ""
        }}
            onClick={props.toggleComplete}>{props.todo.text}
            
            </div>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    
);
