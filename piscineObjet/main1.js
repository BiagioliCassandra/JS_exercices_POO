function Piscine(longueur, largeur, profondeur, debit) {
    this.longueur = longueur;
    this.largeur = largeur;
    this.profondeur = profondeur;
    this.debit = debit;

    this.methodRemplissage = function() {
        var result = (this.longueur*this.largeur*this.profondeur)/this.debit;
        return result;
    }
}

var piscine = new Piscine(8, 5, 3, 2);

document.getElementById("longueur").innerHTML = "Longueur : " + piscine.longueur;
document.getElementById("largeur").innerHTML = "Largeur : " + piscine.largeur;
document.getElementById("profondeur").innerHTML = "Profondeur : " + piscine.profondeur;
document.getElementById("debit").innerHTML = "Débit de remplissage : " + piscine.debit + " m3/min";
document.getElementById("result").innerHTML = "Résultat : " + piscine.methodRemplissage();
