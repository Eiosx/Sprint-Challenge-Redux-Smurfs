
import {FETCHING_SMURFS, ADDING_SMURFS, UPDATING_SMURFS, DELETING_SMURFS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


const smurfsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true, smurfs: action.payload}
    case ADDING_SMURFS:
      return {...state, addingSmurf: true, smurfs: action.payload}
    case UPDATING_SMURFS:
      return {...state, updatingSmurf: true}
    case DELETING_SMURFS:
      return {...state, deletingSmurf: true}
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}


export default smurfsReducer;