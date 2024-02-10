class Adresse{
    constructor(rue,ville,codePostal){
        this.rue=rue;
        this.ville=ville;
        this.codePostal=codePostal;
    }
}
class Personne{
    constructor(nom,prenom,adresse){
        this.nom=nom;
        this.prenom=prenom;
        this.adresse=adresse;
    }
    composition(){
        return `${this.adresse.rue},${this.adresse.ville},${this.adresse.codePostal}`;
    }
}
const compo1=new Adresse("rue 123","Dakar","00000");
const compo2=new Personne("John","Doe",compo1);
console.log((`${compo2.nom},${compo2.prenom},${compo2.composition()}`));

