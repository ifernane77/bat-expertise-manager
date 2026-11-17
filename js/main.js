
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

    // Parcourir tous les clients
    clients.forEach(function(client) {

        // Créer une ligne dans le tableau
        const ligne = document.createElement("tr");

        // Créer les quatre cellules
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

        // Ajouter la ligne au tableau HTML
        listeClients.appendChild(ligne);

    });
}

