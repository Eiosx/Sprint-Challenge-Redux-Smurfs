import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            <h3>Smurf#{props.key + 1}</h3>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.height}</div>
        </div>
    )
}

export default Smurf;