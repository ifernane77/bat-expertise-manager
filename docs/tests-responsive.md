# Tests de navigation et responsive — Bat Expertise Manager

## 1. Objectif

Vérifier le bon fonctionnement de la navigation et l'adaptation des six pages de l'application aux différentes tailles d'écran.

## 2. Environnement de test

- Navigateur : Google Chrome
- Outil : DevTools (F12)
- Technologies : HTML5 et CSS3
- Résolutions : 1366 px, 768 px et 375 px

## 3. Tests de navigation

Les six pages de l'application ont été vérifiées :

- Tableau de bord (`dashboard.html`)
- Clients (`clients.html`)
- Dossiers (`dossiers.html`)
- Devis (`devis.html`)
- Factures (`factures.html`)
- Matériel (`materiel.html`)

**Résultat :** les liens du menu fonctionnent et permettent de naviguer entre les différentes pages.

## 4. Tests responsive

| Largeur | Résultat |
|---|---|
| 1366 px — Ordinateur | Conforme |
| 768 px — Tablette | Conforme |
| 375 px — Mobile | Conforme |

L'utilisation d'une media query CSS permet d'adapter l'affichage aux écrans de petite taille.

Sur mobile :
- Le menu s'adapte à la largeur disponible.
- Les éléments s'affichent verticalement lorsque nécessaire.
- Les tableaux peuvent défiler horizontalement.
- Les textes et les boutons restent accessibles.

## 5. Corrections CSS

Les règles CSS responsive ont été ajoutées dans `css/style.css`.

Les propriétés utilisées sont notamment :

- `@media (max-width: 768px)`
- `flex-direction: column`
- `flex-wrap: wrap`
- `overflow-x: auto`
- `box-sizing: border-box`

## 6. Preuve

Capture d'écran :

`docs/preuves/J10-dashboard-responsive.png`

## 7. Conclusion

Les six pages de Bat Expertise Manager disposent d'une navigation fonctionnelle et d'un affichage adapté aux ordinateurs, tablettes et smartphones.

La structure HTML/CSS est prête pour l'intégration progressive des fonctionnalités JavaScript à partir de la journée 11.