import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    
  apiKey: "AIzaSyAw4U0iEr65iiriQrMZlKvGKUKWM8iRvlQ",
  authDomain: "reactlarastore.firebaseapp.com",
  projectId: "reactlarastore",
  storageBucket: "reactlarastore.appspot.com",
  messagingSenderId: "627311543031",
  appId: "1:627311543031:web:f90c2c89cb89c217be49f2"
}

 firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore()
export const storage = firebase.storage()