
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAbyv1kVEzRCgzVHHecLW04auYvixmJqrM",
    authDomain: "react-project-930a3.firebaseapp.com",
    databaseURL: "https://react-project-930a3.firebaseio.com",
    projectId: "react-project-930a3",
    storageBucket: "react-project-930a3.appspot.com",
    messagingSenderId: "837583080483",
    appId: "1:837583080483:web:84006b3ac993cd96ddf596",
    measurementId: "G-V102M12F6C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
