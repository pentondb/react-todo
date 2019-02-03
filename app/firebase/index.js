import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyC9rNBnwWrPNRegps-5TM9-EelmQHS1-AQ",
    authDomain: "penton-todo-app.firebaseapp.com",
    databaseURL: "https://penton-todo-app.firebaseio.com",
    projectId: "penton-todo-app",
    storageBucket: "penton-todo-app.appspot.com",
    messagingSenderId: "114125447064"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;