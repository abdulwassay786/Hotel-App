import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBr4E8VBA6jgILt5AX7SKYTwGAhDB7VLdg",
    authDomain: "stopwatch-624a1.firebaseapp.com",
    projectId: "stopwatch-624a1",
    storageBucket: "stopwatch-624a1.appspot.com",
    messagingSenderId: "414874267525",
    appId: "1:414874267525:web:311741581d0cde7f625eec"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);