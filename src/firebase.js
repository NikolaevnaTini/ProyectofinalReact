import firebase from "firebase/app";
import "firebase/firestore";

const firebaseC = {
    
  apiKey: "AIzaSyAw4U0iEr65iiriQrMZlKvGKUKWM8iRvlQ",
  authDomain: "reactlarastore.firebaseapp.com",
  projectId: "reactlarastore",
  storageBucket: "reactlarastore.appspot.com",
  messagingSenderId: "627311543031",
  appId: "1:627311543031:web:f90c2c89cb89c217be49f2"
}

const app = firebase.initializeApp(firebaseC);


export const firestore = firebase.firestore(app)