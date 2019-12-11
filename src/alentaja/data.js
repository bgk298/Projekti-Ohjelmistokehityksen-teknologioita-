import {FETCH_TODOS} from '../toiminnot/tyypit.js';

//Hakee firebasesta todolist itemit
export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};