class Personne {
  constructor(nom, age) {
      this._nom = nom;
      this._age = age;
  }
  get nom() {
      return this._nom;
  }
  set nom(nom) {
      this._nom = nom;
  }
  get age() {
      return this._age;
  } 
  set age(age) {
          this._age = age;
  }
}
const person = new Personne("Messi", 25);
console.log(person.nom);
console.log(person.age);

person.nom = "John";
person.age = 20;

console.log(person.nom); 
console.log(person.age); 

