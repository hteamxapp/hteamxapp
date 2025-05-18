// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOEVoX3Ko93N6Ym3_icWv8czveiZTrLE8",
  authDomain: "hteamxapp-2d851.firebaseapp.com",
  projectId: "hteamxapp-2d851",
  storageBucket: "hteamxapp-2d851.firebasestorage.app",
  messagingSenderId: "908005015956",
  appId: "1:908005015956:web:71b97111f378401b660f81",
  measurementId: "G-6JYMBH8Q11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };