class Personne{

    constructor(nom,age){
        this.nom=nom
        this.age=age
    }
    affiche(){
        console.log(`Nom:${this.nom},Age:${this.age}`)
    }
}
class Etudiant extends Personne{
    constructor(nom,age,Specialisation){
        super(nom,age)
        this.Specialisation=Specialisation
    }
    affiche(){
        super.affiche()
        console.log(`Specialisation:${this.Specialisation}`);

    }
}
let person=new Etudiant("John",40,"Football");
person.affiche();