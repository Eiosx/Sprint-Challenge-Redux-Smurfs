import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsForm />
        <SmurfsList />

      </div>
    );
  }
}


export default connect()(App);
