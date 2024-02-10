
let logger= {
  log(){
    console.log("Hello",this.name);
  }
}
class Personne{        
  constructor(name){
    this.name=name;
  }
}
Object.assign(Personne.prototype,logger)
new Personne("Jonh").log();