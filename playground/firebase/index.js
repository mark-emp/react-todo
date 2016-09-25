import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAwPmlqQhoZ9UsdBSBhm9qpXykz2tG-WvQ",
  authDomain: "mark-todo-app.firebaseapp.com",
  databaseURL: "https://mark-todo-app.firebaseio.com",
  storageBucket: "mark-todo-app.appspot.com",
  messagingSenderId: "369300209650"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  isRunning: true,
  user: {
    name: 'Mark',
    age: 32
  },
  app: {
    name: 'TodoApp',
    version: '1.0.1'
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo added: ', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Todo 1'});
todosRef.push({text: 'Todo 2'});
