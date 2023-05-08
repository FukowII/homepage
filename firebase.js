const firebaseConfig = {
    apiKey: "AIzaSyDbi-MNWtwuELsFBU0HhB-cPwqEpeQTSCk",
    authDomain: "ece-finale.firebaseapp.com",
    projectId: "ece-finale",
    storageBucket: "ece-finale.appspot.com",
    messagingSenderId: "317408960080",
    appId: "1:317408960080:web:5803c57c18e9a793377b55"
  };
  
  const app = initializeApp(firebaseConfig);
  import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
  
  const db = getFirestore(app);
  let collectionUtilisateur;
  
  function ajouterUtilisateur(nouvelUtilisateur) {   
    if (!collectionUtilisateur) {
      collectionUtilisateur = collection(db, 'Utilisateur');
      setDoc(doc(db, 'Utilisateur', { '__collection__': 'Utilisateur' }), {}).then(() => {
        console.log('Collection Utilisateur créée avec succès');
      }).catch((erreur) => {
        console.error('Erreur lors de la création de la collection Utilisateur : ', erreur);
      });
    }
    
    addDoc(collectionUtilisateur, nouvelUtilisateur)
      .then(() => {
        console.log('Utilisateur ajouté avec succès : ', nouvelUtilisateur);
      })
      .catch((erreur) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', erreur);
      });
  }
  
  document.getElementById('cree').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const motDePasse = document.getElementById('password').value;
    
    const nouvelUtilisateur = {
      nom: nom,
      prenom: prenom,
      email: email,
      motDePasse: motDePasse
    };
    
    console.log('Nouvel utilisateur : ', nouvelUtilisateur);
    
    ajouterUtilisateur(nouvelUtilisateur);
  });

  