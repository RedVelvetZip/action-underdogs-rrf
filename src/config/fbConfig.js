import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
export const fbConfig = {
    apiKey: "AIzaSyAeEFt2AOwT40AE_tfEuUv8HkUzR-Ef17k",
    authDomain: "action-underdog.firebaseapp.com",
    databaseURL: "https://action-underdog.firebaseio.com",
    projectId: "action-underdog",
    storageBucket: "action-underdog.appspot.com",
    messagingSenderId: "666726704005",
    appId: "1:666726704005:web:3086e31150300e12d4daec",
    measurementId: "G-D0SJCTRTNX"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;