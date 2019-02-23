import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfsForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: ''

        }
    }
    inputChange = event => {
        event.preventDefault;
        this.setState({[event.target.name]: event.target.value})
    }

    handleAddSmurf = event => {
        event.preventDefault;
        const newSmurf = {...this.state};
        this.props.addSmurf(newSmurf);
        this.setState({name: '', age: null, height: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleAddSmurf}>
              <input onChange={this.inputChange} type="text" placeholder="Name" name="name" value={this.state.name}/>
              <input onChange={this.inputChange} type="text" placeholder="Age" name="age" value={this.state.age}/>
              <input onChange={this.inputChange} type="text" placeholder="Height" name="height" value={this.state.height}/>
              <input type="submit" value="Submit"/>
            </form>
        )
    }
}


export default connect(null, { addSmurf })(SmurfsForm);