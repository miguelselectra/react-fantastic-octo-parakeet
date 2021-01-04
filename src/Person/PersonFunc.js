import React from 'react';
import './Person.css';

const PersonFunc = (props) => {
    return (
        <div className="Person">
            <h1>- {props.name}</h1>
            <h4>{props.children}</h4>
            <button onClick={props.func}>test</button>
            <input
                onChange={props.changeFunc}
                value={props.name}
            ></input>
        </div>
    );
}

export default PersonFunc;


   /*
   import React, { useState } from 'react';

    const [customState, setNameState] = useState({
        property: 'pasame la hooka',
    })

    const pruebaJok = () => {
        setNameState({
            property: 'mierda'
        })
    }

    { customState.property }
    <button onClick={pruebaJok}>test hook</button>

    */