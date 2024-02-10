class Personne {
    constructor(nom, prenom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
    }
  
    affiche() {
      console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}`);
    }
  
    static instancePersonne(people) {
      const recup = JSON.parse(people);
      const nom = recup.nom ;
      const prenom = recup.prenom ;
      const age = recup.age ;
      return new Personne(nom, prenom, age);
    }
  }
  const json = '{"nom": "Doe", "prenom": "John", "age": 30}';
  const personne = Personne.instancePersonne(json);
  personne.affiche();
  