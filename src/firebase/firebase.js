import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/analytics"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRoDkpYoqnaFsal42-LncXTD3LjkLVcf8",
  authDomain: "datahouse-bowbow.firebaseapp.com",
  projectId: "datahouse-bowbow",
  storageBucket: "datahouse-bowbow.appspot.com",
  messagingSenderId: "520239034761",
  appId: "1:520239034761:web:0ef9c70bcd9290be157158",
  measurementId: "G-GD64XMDEVK",
}

firebase.initializeApp(firebaseConfig)

export default firebase
