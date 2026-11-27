
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
    // Charger les clients sauvegardés dans le navigateur
    try {
        const sauvegarde = localStorage.getItem("bat-expertise-clients");

        if (sauvegarde !== null) {
            const clientsSauvegardes = JSON.parse(sauvegarde);

            if (Array.isArray(clientsSauvegardes)) {
                clients = clientsSauvegardes;
            }
        }
    } catch (erreur) {
        console.warn(
            "Lecture de la sauvegarde impossible : clients initiaux conservés.",
            erreur
        );
    }

        // Sauvegarder le tableau complet des clients
    function sauvegarderClients() {
        try {
            const sauvegarde = JSON.stringify(clients);
            localStorage.setItem("bat-expertise-clients", sauvegarde);
        } catch (erreur) {
            console.warn("Sauvegarde des clients impossible.", erreur);

            alert(
                "La modification est appliquée pour cette session, " +
                "mais sa sauvegarde dans le navigateur a échoué."
            );
        }
    }
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

        // Créer la cellule des actions
        const celluleActions = document.createElement("td");

        // Ouvrir le formulaire avec les valeurs du client
        const boutonModifier = document.createElement("button");
        boutonModifier.type = "button";
        boutonModifier.textContent = "Modifier";

        boutonModifier.addEventListener("click", function() {
            idClientEnModification = client.id;

            document.getElementById("nom-client").value = client.nom;
            document.getElementById("email-client").value = client.email;
            document.getElementById("telephone-client").value =
                client.telephone;

            titreFormulaireClient.textContent = "Modifier un client";
            formulaireClient.hidden = false;
            document.getElementById("nom-client").focus();
        });

        celluleActions.appendChild(boutonModifier);

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.type = "button";
        boutonSupprimer.textContent = "Supprimer";

        // Demander confirmation avant la suppression
        boutonSupprimer.addEventListener("click", function() {
            const confirmation = confirm(
                "Supprimer le client « " + client.nom + " » ?"
            );

            if (!confirmation) {
                return;
            }

            // Conserver tous les clients sauf celui sélectionné
            clients = clients.filter(function(clientExistant) {
                return clientExistant.id !== client.id;
            });

            sauvegarderClients();
            actualiserListeClients();
        });

        celluleActions.appendChild(boutonSupprimer);
        ligne.appendChild(celluleActions);

        listeClients.appendChild(ligne);
    }

        // Récupérer le champ de recherche
    const rechercheClient =
        document.getElementById("recherche-client");

    // Actualiser le tableau selon le nom recherché
    function actualiserListeClients() {
        const recherche = rechercheClient.value.trim().toLowerCase();

        const clientsFiltres = clients.filter(function(client) {
            return client.nom.toLowerCase().includes(recherche);
        });

        // Vider les anciennes lignes avant de reconstruire l'affichage
        listeClients.textContent = "";

        clientsFiltres.forEach(function(client) {
            afficherClient(client);
        });
    }

    // Afficher les clients au chargement
    actualiserListeClients();

        // Actualiser les résultats quand la saisie change
    rechercheClient.addEventListener("input", function() {
        actualiserListeClients();
    });

        // Récupérer le bouton et le formulaire
    const boutonAjouterClient =
        document.getElementById("bouton-ajouter-client");

    const formulaireClient =
        document.getElementById("formulaire-client");

    const titreFormulaireClient =
        document.getElementById("titre-formulaire-client");

    const boutonAnnulerClient =
        document.getElementById("annuler-client");

    // null signifie qu'aucun client n'est en cours de modification
    let idClientEnModification = null;

    // Fermer le formulaire et revenir au mode ajout
    function fermerFormulaireClient() {
        formulaireClient.reset();
        formulaireClient.hidden = true;
        idClientEnModification = null;
        titreFormulaireClient.textContent = "Nouveau client";
        boutonAjouterClient.focus();
    }

    boutonAnnulerClient.addEventListener("click", function() {
        fermerFormulaireClient();
    });

    // Afficher le formulaire au clic
    boutonAjouterClient.addEventListener("click", function() {
        idClientEnModification = null;
        formulaireClient.reset();
        titreFormulaireClient.textContent = "Nouveau client";
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

        if (idClientEnModification !== null) {
            // Retrouver le client à modifier grâce à son identifiant
            const clientAModifier = clients.find(function(client) {
                return client.id === idClientEnModification;
            });

            // Le client peut avoir été supprimé pendant l'édition
            if (!clientAModifier) {
                alert("Ce client n'existe plus.");
                fermerFormulaireClient();
                return;
            }

            clientAModifier.nom = nom;
            clientAModifier.email = email;
            clientAModifier.telephone = telephone;
        } else {
            // Préparer l'identifiant du nouveau client
            let dernierId = 0;

            clients.forEach(function(client) {
                if (client.id > dernierId) {
                    dernierId = client.id;
                }
            });

            const nouveauClient = {
                id: dernierId + 1,
                nom: nom,
                email: email,
                telephone: telephone
            };

            clients.push(nouveauClient);
        }

        // Sauvegarder l'ajout ou la modification
        sauvegarderClients();
        actualiserListeClients();
        fermerFormulaireClient();
    });

}

