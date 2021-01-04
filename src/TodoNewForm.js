import React from 'react';
import './Person.css';
 
const TodoNewForm = (props) => {
    return (
        <div>
            <input
                onChange={props.changeFunc}
            ></input>
            <button onClick={props.addFunc}>Nueva</button>
        </div>
    );
}

export default TodoNewForm;