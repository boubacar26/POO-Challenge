class Configuration {
  constructor(){
    this.config="Je suis Madjiguéne Diop"
  }
  configurer(){
    return this.config;
  }
 }
 const config1= new Configuration();
console.log(`${config1.configurer()}`);