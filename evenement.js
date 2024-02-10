// class ÉditeurDeTexte {
//     constructor() {
//         this.texte = '';
//         this.écouteurs = [];
//     }

//     ajouterÉcouteur(écouteur) {
//         this.écouteurs.push(écouteur);
//     }

//     retirerÉcouteur(écouteur) {
//         this.écouteurs = this.écouteurs.filter(e => e !== écouteur);
//     }

//     notifierÉcouteurs() {
//         this.écouteurs.forEach(écouteur => {
//             écouteur(this.texte);
//         });
//     }

//     setTexte(nouveauTexte) {
//         this.texte = nouveauTexte;
//         this.notifierÉcouteurs();
//     }
// }

// // Exemple d'utilisation
// const monÉditeur = new ÉditeurDeTexte();

// // Ajouter un écouteur
// const écouteur1 = nouveauTexte => {
//     console.log(`Écouteur 1 : Le texte a été modifié - Nouveau texte : ${nouveauTexte}`);
// };
// monÉditeur.ajouterÉcouteur(écouteur1);

// // Ajouter un autre écouteur
// const écouteur2 = nouveauTexte => {
//     console.log(`Écouteur 2 : Le texte a été modifié - Nouveau texte : ${nouveauTexte}`);
// };
// monÉditeur.ajouterÉcouteur(écouteur2);

// // Modifier le texte (ce qui déclenchera l'événement texteModifié)
// monÉditeur.setTexte("Nouveau contenu du texte");









// class ÉditeurDeTexte {
//    constructor(écouteurs,texte) {
//      this.texte = texte;
//      this.écouteurs =écouteurs;
//    }
 
//    ajouterÉcouteur() {
//     return `${this.écouteurs}`
//    }
//    notifierTexteModifié() {
//     return `${this.écouteurs}`

//    }
//    modifierTexte(nouveauTexte) {
//      this.ecouteurs = nouveauTexte;
//      this.notifierTexteModifié();
//    }
//  }
//  const monÉditeur = new ÉditeurDeTexte("Texte modifié");
//  const monÉditeur1 = new ÉditeurDeTexte("nouveau texte");
//  console.log(`${monÉditeur.ajouterÉcouteur()}`);
//  console.log(monÉditeur1.notifierTexteModifié());

 
// class EditeurDeTexte {
  // constructor(ecouteurs) {
    // this.ecouteurs = ecouteurs;
  // }
// 
  // ajouterEcouteur() {
  //  return this.ecouteurs;
  // }
  // 
  // notifierTexteModifié() {
    // return `${this.ecouteurs}`
// }
// }
// const monEditeur = new EditeurDeTexte("Texte modifié");
// const monEditeur1 = new EditeurDeTexte("Nouveau texte");
// console.log(monEditeur.ajouterEcouteur());
// console.log(monEditeur1.notifierTexteModifié());
// 
// 
// 



// class Téléchargement {
//     constructor() {
//         this.enCours = false;
//         this.promesse = null;
//     }

//     démarrerTéléchargement() {
//         if (this.enCours) {
//             return Promise.reject(new Error("Le téléchargement est déjà en cours."));
//         }

//         this.enCours = true;

//         this.promesse = new Promise((resolve, reject) => {
//             // Simulons un téléchargement asynchrone
//             setTimeout(() => {
//                 const téléchargementRéussi = Math.random() < 0.8; // Simule le succès dans 80% des cas

//                 if (téléchargementRéussi) {
//                     resolve("Téléchargement réussi");
//                 } else {
//                     reject(new Error("Échec du téléchargement"));
//                 }

//                 this.enCours = false;
//             }, 2000); // Simule une durée de téléchargement de 2 secondes
//         });

//         return this.promesse;
//     }

//     arrêterTéléchargement() {
//         if (!this.enCours) {
//             return Promise.reject(new Error("Aucun téléchargement en cours à arrêter."));
//         }

//         // Simulons l'arrêt du téléchargement
//         this.enCours = false;
//         this.promesse = Promise.reject(new Error("Le téléchargement a été arrêté"));

//         return this.promesse;
//     }
// }

// // Exemple d'utilisation
// const téléchargementInstance = new Téléchargement();

// téléchargementInstance.démarrerTéléchargement()
//     .then(message => console.log(message))
//     .catch(error => console.error(`Erreur: ${error.message}`));

// // Arrêter le téléchargement après 1.5 secondes (simulé)
// setTimeout(() => {
//     téléchargementInstance.arrêterTéléchargement()
//         .catch(error => console.error(`Erreur: ${error.message}`));
// }, 1500);
