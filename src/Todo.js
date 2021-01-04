import React from 'react';
import './Person.css';
 
const Todo = (props) => {
    return (
        <div className="Person">
            <b>{props.name} </b>
            <button onClick={props.deleteFunc}>Borrar</button>
            <button onClick={props.addPriority}>+ prioridad</button>
        </div>
    );
}

export default Todo;