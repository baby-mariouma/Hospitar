// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClTUXS-DwC588L1c78f1wbzFKGpK0c1Gc",
  authDomain: "registrationform-7fec1.firebaseapp.com",
  projectId: "registrationform-7fec1",
  storageBucket: "registrationform-7fec1.firebasestorage.app",
  messagingSenderId: "802022052684",
  appId: "1:802022052684:web:1cab0d2d74276139c1b5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get reference to database service
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
  e.preventDefault();
  const username = document.getElementById("username").value; // Ajout de cette ligne
  const nom = document.getElementById("Nom").value;
  const prenom = document.getElementById("Prenom").value;
  const date_naissance = document.getElementById("date_naissance").value;
  const num_carnet = document.getElementById("num_carnet").value;
  const specialty = document.getElementById("specialty").value;
  const email = document.getElementById("email").value;
  const desc = document.getElementById("desc").value;
  
  // Simple validation
  if (!username || !nom || !prenom || !date_naissance || !num_carnet || !specialty || !email || !desc) {
    alert("Tous les champs sont obligatoires !");
    return;
  }

  if (!validateEmail(email)) {
    alert("Veuillez entrer une adresse email valide !");
    return;
  }
  
  set(ref(db, 'user/' + username), {
    nom: nom,
    prenom: prenom,
    date_naissance: date_naissance,
    num_carnet: num_carnet,
    specialty: specialty,
    email: email,
    desc: desc
  });
  
  alert("Demande envoyée avec succès !");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
