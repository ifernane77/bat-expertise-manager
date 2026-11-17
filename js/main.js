
 // Nombre total de dossiers
const total = dossiers.length;

// Nombre de dossiers en cours
const enCours = dossiers.filter(function(dossier) {
    return dossier.statut === "En cours";
}).length;

// Nombre de dossiers terminés
const termines = dossiers.filter(function(dossier) {
    return dossier.statut === "Terminé";
}).length;

// Affichage des statistiques dans le HTML
document.getElementById("total-dossiers").textContent = total;
document.getElementById("dossiers-en-cours").textContent = enCours;
document.getElementById("dossiers-termines").textContent = termines;
