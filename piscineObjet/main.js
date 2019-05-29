function Piscine (longueur, largeur, profondeur, debit) {
  //Properties
  this.longueur = longueur;
  this.largeur = largeur;
  this.profondeur = profondeur;
  this.debit = debit;

  //Methodes
  this.remplissage= function() {
      var result = (this.longueur*this.largeur*this.profondeur)/this.debit;
      return result;
    };
  this.displayInformation = function() {

    var longueur = document.getElementById("longueur");
    longueur.innerHTML = "Longueur : " + this.longueur + " m";
    var largeur = document.getElementById("largeur");
    largeur.innerHTML = "Largeur : " + this.largeur + " m";
    var profondeur = document.getElementById("profondeur");
    profondeur.innerHTML = "Profondeur : " + this.profondeur + " m";
    var debit = document.getElementById("debit");
    debit.innerHTML = "Debit : " + this.debit + " m3/minute";

    var result = document.getElementById("result");
    result.innerHTML = "Votre piscine se remplit en " + this.remplissage() + " minutes";
  }
}

var psn = new Piscine(8, 10, 3, 2);

psn.displayInformation();
