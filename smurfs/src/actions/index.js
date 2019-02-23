/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETING_SMURFS = 'DELETING_SMURFS';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: FETCHING_SMURFS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'Smurfs Not Found :('
        })
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(response => {
        dispatch({
          type: ADDING_SMURFS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Could Not Add Smurf :(' })
      })
  }

}



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
