import firebase from "firebase/compat/app";
import {addDoc, collection,getFirestore,getDocs,deleteDoc,doc,updateDoc,where,query} from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence,ReactNativeAsyncStorage } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAUN2XW9EQ-7nqBxXAxMjRjXBA8Rzgv6Tk",
    authDomain: "listastarefa.firebaseapp.com",
    projectId: "listastarefa",
    storageBucket: "listastarefa.appspot.com",
    messagingSenderId: "591152262075",
    appId: "1:591152262075:web:83cb7d77f2d473c039729e"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  const storage = getStorage(app);
  export  {db,addDoc,collection,getDocs,deleteDoc,doc,updateDoc,auth,storage,where,query};