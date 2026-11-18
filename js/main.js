
 // ===== TABLEAU DE BORD =====

// Vérifier si nous sommes sur le tableau de bord
if (document.getElementById("total-dossiers")) {

    const total = dossiers.length;

    const enCours = dossiers.filter(function(dossier) {
        return dossier.statut === "En cours";
    }).length;

    const termines = dossiers.filter(function(dossier) {
        return dossier.statut === "Terminé";
    }).length;

    document.getElementById("total-dossiers").textContent = total;
    document.getElementById("dossiers-en-cours").textContent = enCours;
    document.getElementById("dossiers-termines").textContent = termines;
}


// ===== GESTION DES CLIENTS =====

// Récupérer le tableau HTML des clients
const listeClients = document.getElementById("liste-clients");

// Vérifier si nous sommes sur la page Clients
if (listeClients) {

        // Construire et afficher la ligne d'un client
    function afficherClient(client) {
        const ligne = document.createElement("tr");

        const valeurs = [
            client.id,
            client.nom,
            client.email,
            client.telephone
        ];

        valeurs.forEach(function(valeur) {
            const cellule = document.createElement("td");
            cellule.textContent = valeur;
            ligne.appendChild(cellule);
        });

        listeClients.appendChild(ligne);
    }

    // Afficher les clients présents au chargement
    clients.forEach(function(client) {
        afficherClient(client);
    });

        // Récupérer le bouton et le formulaire
    const boutonAjouterClient =
        document.getElementById("bouton-ajouter-client");

    const formulaireClient =
        document.getElementById("formulaire-client");

    // Afficher le formulaire au clic
    boutonAjouterClient.addEventListener("click", function() {
        formulaireClient.hidden = false;
        document.getElementById("nom-client").focus();
    });

        // Réagir à la validation du formulaire
    formulaireClient.addEventListener("submit", function(evenement) {
        // Empêcher le rechargement de la page
        evenement.preventDefault();

        // Lire les valeurs saisies
        const nom =
            document.getElementById("nom-client").value.trim();

        const email =
            document.getElementById("email-client").value.trim();

        const telephone =
            document.getElementById("telephone-client").value.trim();

        // Refuser les champs contenant uniquement des espaces
        if (nom === "" || email === "" || telephone === "") {
            alert("Merci de remplir tous les champs.");
            return;
        }

        // Préparer le nouveau client
        const nouveauClient = {
            id: clients.length + 1,
            nom: nom,
            email: email,
            telephone: telephone
        };

        // Ajouter le client aux données et à l'affichage
        clients.push(nouveauClient);
        afficherClient(nouveauClient);

        // Vider et masquer le formulaire
        formulaireClient.reset();
        formulaireClient.hidden = true;

        // Revenir au bouton d'ajout
        boutonAjouterClient.focus();
    });

}

