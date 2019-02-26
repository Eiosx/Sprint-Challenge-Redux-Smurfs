import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.fetchingSmurfs ?
                    <h2>LOADING...</h2>
                    :
                    this.props.smurfs.map((smurf, index) => {
                        return <Smurf key={index} name={smurf.name} age={smurf.age} height={smurf.height} />
                    }
                    )
                }
                {this.props.error ?
                    <h2>Error Fetching Smurfs!</h2>:
                null}

            </div>
        )
    }
}




const mstp = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.fetchingError
    }
}

export default connect(mstp, { getSmurfs })(SmurfsList);