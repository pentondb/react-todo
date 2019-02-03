import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9rNBnwWrPNRegps-5TM9-EelmQHS1-AQ",
  authDomain: "penton-todo-app.firebaseapp.com",
  databaseURL: "https://penton-todo-app.firebaseio.com",
  projectId: "penton-todo-app",
  storageBucket: "penton-todo-app.appspot.com",
  messagingSenderId: "114125447064"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// firebaseRef.set({
//   appName: 'Todo App',
//   isRunning: true,
//   user: {
//     name: 'Derek',
//     age: 57
//   }
// }).then(() => {
//   console.log('Set worked');
// }, (e) => {
//   console.log('Set failed');
// });

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Derek',
    age: 57
  }
}).then(() => {
  console.log('Set worked');
}, (e) => {
  console.log('Set failed');
});

firebaseRef.update({
  isRunning: false,
  'app/name': 'Todo Application',
  'app/version': '1.0.1'
}).then(() => {
  console.log('Update worked');
}, (e) => {
  console.log('Update failed');
});

firebaseRef.child('app').update({
  version: '1.0.2'
});

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('user/age').remove();

firebaseRef.once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.val());
}, (e) => {
  console.log('Unable to fetch data', e);
});

firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('Got data for: ', snapshot.key, snapshot.val());
}, (e) => {
  console.log('Unable to fetch data', e);
});

var logData = (snapshot) => {
  console.log('Got value: ', snapshot.val());
};

firebaseRef.on('value', logData); /* We et the output once when the listener is set */

firebaseRef.off(); /* This removes the listener */

/* So we do not see the listner output here */
firebaseRef.update({
  isRunning: true
});

firebaseRef.child('user').on('value', logData); /* Adding a listener on the user property, and we get the initial output */
/* We get the listener output for the user name update */
firebaseRef.child('user').update({
  name: 'Vernon'
});
/* We do not get any listener output for the app name update  */
firebaseRef.child('app').update({
  name: 'Wonka'
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('Child added: ', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('Child changed: ', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('Child removed: ', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
});
console.log("Note ID: ", newNoteRef.key);

newNoteRef = notesRef.push({
  text: 'Walk the iguana!'
});
console.log("Note ID: ", newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todos child added: ', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('Todos child changed: ', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('Todos child removed: ', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({text: 'Learn about firebase'});
console.log('Todo ID: ', newTodoRef.key);
newTodoRef = todosRef.push({
  text: 'Learn about SAFe for Teams'
});
console.log('Todo ID: ', newTodoRef.key);
