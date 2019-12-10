//Import firebase
import * as firebase from 'firebase'

// Your web app's Firebase configuration
import {FirebaseConfig} from './avaimet.js';
// Initialize Firebase
firebase.initializeApp(FirebaseConfig)

//Creates constans and exports them for use
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")