import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            <h3>Smurf</h3>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Height: {props.height}</div>
        </div>
    )
}

export default Smurf;