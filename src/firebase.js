import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVJyAXi_fuNTzI8h2stIhmcb_Feh5_YMg",
  authDomain: "imessage-clone-fd806.firebaseapp.com",
  databaseURL: "https://imessage-clone-fd806.firebaseio.com",
  projectId: "imessage-clone-fd806",
  storageBucket: "imessage-clone-fd806.appspot.com",
  messagingSenderId: "673876191044",
  appId: "1:673876191044:web:18e53104143dc4f0445911",
  measurementId: "G-674PT6YKFC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
