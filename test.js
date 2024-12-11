
      // Liste des dossiers prêts
const dossiersPrets = ["12345","001234","001111","000257","56789","00147", "67890", "11223", "54321" , "123588"];

// Récupérer le formulaire et les éléments nécessaires
const form = document.getElementById('form');
const messageDiv = document.getElementById('message');

// Gestionnaire d'événement pour la soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs
    const nomPrenom = document.getElementById('nomPrenom').value.trim();
    const numeroDossier = document.getElementById('numeroDossier').value.trim();
    // Vérifier si les champs sont remplis
    if (!nomPrenom || !numeroDossier) {
        afficherMessage("Veuillez remplir tous les champs.", "error");
    } else if (dossiersPrets.includes(numeroDossier)) {
        afficherMessage(`✔️ Bonjour ${nomPrenom}, le dossier ${numeroDossier} : les analyses sont prêtes.`, "success");
    } else {
        afficherMessage(`❌ Bonjour ${nomPrenom}, le dossier ${numeroDossier} : les analyses ne sont pas prêtes.`, "error");
    }
});

// Fonction pour afficher un message
function afficherMessage(texte, type) {
    messageDiv.textContent = texte;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = "block";
}
