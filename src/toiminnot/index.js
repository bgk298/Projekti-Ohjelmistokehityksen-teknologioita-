//Import required modules
import {todosRef} from '../konfigurointi/firebase.js';
import {FETCH_TODOS} from './tyypit.js';

//Exports addToDo, completeToDo and FetchToDo modules
export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
    todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};