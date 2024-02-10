const Forme = {
    CalculerAire:function(){
        console.log("la méthode doit étre implémenter");
    }
}
class Cercle{
    constructor(rayon){
        this.rayon=rayon;
    }
    CalculerAire(){
        return Math.PI *(this.rayon *this.rayon)
    }
}
 class Rectangle {
    constructor(largeur,longeur){
        this.largeur=largeur;
        this.longeur=longeur;

    }
    CalculerAire(){
        return this.largeur* this.longeur;
    }
 }
  function CalculerFormeAire(forme){
    return forme.CalculerAire();
  }

  const circle = new Cercle(5);
  const rect = new Rectangle(2,8);
  console.log(`Aire du cercle:${CalculerFormeAire(circle)}`);
  console.log(`Aire du Rectangle:${CalculerFormeAire(rect)}`);

