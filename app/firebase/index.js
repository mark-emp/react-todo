import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAwPmlqQhoZ9UsdBSBhm9qpXykz2tG-WvQ",
    authDomain: "mark-todo-app.firebaseapp.com",
    databaseURL: "https://mark-todo-app.firebaseio.com",
    storageBucket: "mark-todo-app.appspot.com",
    messagingSenderId: "369300209650"
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
