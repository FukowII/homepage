const firebaseConfig = {
    apiKey: "AIzaSyDbi-MNWtwuELsFBU0HhB-cPwqEpeQTSCk",
    authDomain: "ece-finale.firebaseapp.com",
    projectId: "ece-finale",
    storageBucket: "ece-finale.appspot.com",
    messagingSenderId: "317408960080",
    appId: "1:317408960080:web:921e9b82ac8ccfad377b55"
  };
  
  const app = initializeApp(firebaseConfig);
  import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
  
  const db = getFirestore(app);
