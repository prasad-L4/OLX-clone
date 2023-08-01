
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import 'firebase/compat/storage'
import firebase from 'firebase/compat/app'
const firebaseConfig = {
    apiKey: "AIzaSyAhpu0G-tHdm1HWLtygA0BiElXwMx9UwkU",
    authDomain: "olx-clone-b4ab5.firebaseapp.com",
    projectId: "olx-clone-b4ab5",
    storageBucket: "olx-clone-b4ab5.appspot.com",
    messagingSenderId: "771871692097",
    appId: "1:771871692097:web:f3be1ef93e898ea856bdc0",
    measurementId: "G-T3WVL3GMKH"
  };
  const app=initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 firebase.initializeApp(firebaseConfig);
export const storage=firebase.storage();
  
  
  