# Suivi des tests — Bat Expertise Manager

## J13 — Ajout de clients par formulaire JavaScript

Date de consignation : 18 novembre 2026 (Indian/Mauritius).
Date d’exécution des tests : 18 novembre 2026 (Indian/Mauritius), selon la confirmation de l’utilisateur indiquant les avoir réalisés à l’instant.

Ce relevé repose sur la capture, la sortie du terminal et la confirmation
de réussite de tous les tests de l’étape 7 transmises par l’utilisateur. Les tests n’ont pas été exécutés par Codex.

### Résultats observés

| Vérification | Résultat constaté | Source |
|---|---|---|
| Affichage après ajout de deux clients fictifs | Huit lignes visibles : les six clients initiaux, Client Test (ID 7) et Client Exemple (ID 8), sans duplication visible des lignes initiales. | Capture fournie dans le chat. |
| Conservation du zéro initial des téléphones | Les deux nouveaux numéros affichés sont 0600000099 et 0600000088. | Capture fournie dans le chat. |
| État du formulaire après les ajouts | Aucun formulaire visible sur la capture finale. Le masquage automatique est également confirmé par l’utilisateur. | Capture fournie dans le chat. |
| Publication Git | Envoi de main vers origin/main réussi : 184af32 → 0b28e69. Aucun décalage signalé ensuite par git status -sb. | Sortie du terminal transmise par l’utilisateur. |
| État du fichier pédagogique | AGENTS.md reste non suivi (?? AGENTS.md). | Sortie du terminal transmise par l’utilisateur. |

### Tests confirmés réussis par l’utilisateur

Confirmation reçue le 18 novembre 2026 : tous les tests de l’étape 7
ont réussi. Les résultats suivants sont déclarés par l’utilisateur ;
ils n’ont pas été directement testés par Codex.

| Test | Résultat confirmé |
|---|---|
| Chargement de la page | Six clients et formulaire masqué. |
| Clic sur Ajouter un client | Formulaire visible et curseur dans le nom. |
| Champ vide | Validation bloquée par le navigateur. |
| Email invalide | Validation bloquée par le navigateur. |
| Nom contenant uniquement des espaces | Message d’erreur et aucune ligne ajoutée. |
| Premier ajout valide | ID 7, téléphone conservé, formulaire masqué et aucun rechargement. |
| Deuxième ajout avec Entrée | ID 8 et aucune duplication des clients initiaux. |
| Rechargement | Retour aux six clients initiaux, conformément au fonctionnement sans stockage. |
| Tableau de bord | Six dossiers, trois en cours et deux terminés. |
| Console sur les deux pages | Aucune erreur JavaScript. |
| Largeur mobile | Champs et boutons utilisables. |

### Preuves disponibles

Fichiers présents dans le dépôt au moment du relevé :
- docs/preuves/J13-formulaire-client.png
- docs/preuves/J13-client-ajoute.png

Leur présence a été vérifiée. La réussite des tests est confirmée par
l’utilisateur ; elle ne constitue pas à elle seule une validation de compétence E5.

### Corrections et validation

Aucune correction à la suite d’un échec de test n’a été signalée dans
le retour reçu. Ne pas en déduire qu’aucune correction n’a été nécessaire.
J13 est terminée sur la base des résultats visibles et de la confirmation
de réussite de l’ensemble des tests par l’utilisateur. Le stockage et la
suppression restent réservés à une prochaine journée.
