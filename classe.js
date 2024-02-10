class Personne {
    constructor(nom,age){
        this.nom = nom
        this.age = age
    }
    affichedetail(){
        return "Nom:"+ this.nom+' '+ "Age:"+this.age;
    }
    
}
let person = new Personne("John",30);
console.log(person.affichedetail());






















// class Fruits{
//     constructor(noun,color){
//         this.noun= noun
//         this.color=color
//     }

//     recupFruits(){
//         return this.noun+' '+this.color

//     }

// }

// let fruit = new Fruits('Banane','Yellow')
// console.log(fruit.recupFruits());





// class Voiture{
//     constructor(marque,color){
//         this.marque=marque
//         this.color=color
//     }
//     // afficheVoiture(){
//     //     return `${this.marque},${this.color}`
//     // }
// }
// let voiture = new Voiture('Nissan','Blanc')
// console.log(voiture.marque);