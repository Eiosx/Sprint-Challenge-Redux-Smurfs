
import { FETCHING_SMURFS, FETCHING_SUCCESS, FETCHING_ERROR, ADDING_SMURFS, ADDING_SUCCESS, ADDING_ERROR, UPDATING_SMURFS, DELETING_SMURFS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchingError: false,
  addingSmurf: false,
  addingError: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: false
}


const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state, fetchingSmurfs: true, fetchingError: false, addingSmurf: false,
        addingError: false
      }
    case FETCHING_SUCCESS:
      return {
        ...state, smurfs: [...action.payload], fetchingSmurfs: false, fetchingError: false, addingSmurf: false,
        addingError: false
      };
    case FETCHING_ERROR:
      return {
        ...state, fetchingSmurfs: false, fetchingError: true, addingSmurf: false,
        addingError: false
      };
    case ADDING_SMURFS:
      return {
        ...state, addingSmurf: true, addingError: false, fetchingSmurf: false,
        fetchingError: false
      }
    case ADDING_SUCCESS:
      return {
        ...state, smurfs: [...action.payload], addingSmurf: false, addingError: false, fetchingSmurf: false,
        fetchingError: false
      };
    case ADDING_ERROR:
      return {
        ...state, addingSmurf: false, addingError: true, fetchingSmurf: false,
        fetchingError: false
      };
    // case UPDATING_SMURFS:
    //   return { ...state, updatingSmurf: true }
    // case DELETING_SMURFS:
    //   return { ...state, deletingSmurf: true }
    // case ERROR:
    //   return { ...state, error: action.payload }
    default:
      return state;
  }
}


export default smurfsReducer;