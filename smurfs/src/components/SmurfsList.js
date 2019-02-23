import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfsList = props => {

    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs!</button>
            {console.log(props.smurfs)}
            {this.state.smurfs.map(smurf, index => {
                return <Smurf key={index} name={smurf.name} age={smurf.age} height={smurf.height} />
            })}
        </div>
    )
}




const mstp = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mstp, { getSmurfs })(SmurfsList);