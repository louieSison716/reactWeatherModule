import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch(action.type){
   case FETCH_WEATHER:
    // generated a new array state every onFormSubmit
    // never manipulate the state array
    return [ action.payload.data, ...state ];

  }
  return state;
}
