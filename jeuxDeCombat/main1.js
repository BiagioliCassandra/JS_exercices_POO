//function
function Guerrier (nom, att, def, sante) {
    this.nom = nom;
    this.valeurAttaque = att;
    this.valeurDefense = def;
    this.valeurSante = sante;

    this.methodCombat = function(adversaire) {
        alert(this.nom + " attaque " + adversaire.nom);
        adversaire.valeurSante = adversaire.valeurSante - this.valeurAttaque;
        alert("Il reste " + adversaire.valeurSante + " pv à " + adversaire.nom);
    }
}

function Magicien (nom, att, def, sante, mana) {
    this.nom = nom;
    this.valeurAttaque = att;
    this.valeurDefense = def;
    this.valeurSante = sante;
    this.valeurMana = mana;

    this.methodCombat = function(adversaire) {
        alert(this.nom + " attaque " + adversaire.nom);
        adversaire.valeurSante = adversaire.valeurSante - this.valeurAttaque;
        alert("Il reste " + adversaire.valeurSante + " pv à " + adversaire.nom);
    }
    this.methodSoin = function() {
        if(this.valeurMana > 10) {
            alert(this.nom + " utilise soin et se régénère de 10 pv")
            this.valeurMana -= 10;
            this.valeurSante += 10;
            alert(this.nom + " possède maintenant " + this.valeurSante + " pv et " + this.valeurMana + " points de mana");
        }
        else {
            alert(this.nom + " a essayé de se soigner mais n'a pas assez de mana");
        }
    }
}

//variable
var guerrier1 = new Guerrier("Thomas", 10, 5, 30);
var guerrier2 = new Guerrier("Hanane", 15, 5, 30);
var magicien1 = new Magicien("Cassandra", 5, 5, 35, 25);

//logique
guerrier1.methodCombat(magicien1);
guerrier2.methodCombat(magicien1);
magicien1.methodSoin();
magicien1.methodCombat(guerrier1);
