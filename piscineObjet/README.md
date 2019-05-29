# Exercice de programmation orientée objet en JavaScript : La piscine

Il s'agit d'un exercice que j'ai produit dans le cadre de mon poste de formateur en développement web à Simplon Roubaix. Cet exercice est donné aux apprenants lorsqu'ils maîtrisent l'algorithmie en JavaScript et la manipulation avancée du DOM. L'objectif de cet exercice et de leur faire découvrir la POO JS et comment elle peut leur permettre de mieux organiser leur code.

Au travers de cet exercice, ils apprennent à :
- déclarer des attributs
- déclarer des méthodes
- utiliser le constructeur d'objet en JavaScript
- instancier un objet
- réaliser des calculs au travers d'un objet
- manipuler l'arbre HTML via un objet

## Consignes

Lors de votre apprentissage du JavaScript vous aviez réalisé un exercice d'algorithmie consistant à créer une fonction qui calculait le temps de remplissage d'une piscine.

Ici vous allez refaire un exercice similaire mais en programmation orientée objet !

Pour ce faire, vous allez créer le constructeur d'un objet piscine. Cet objet piscine aura besoin de 4 informations stockées dans des attributs : la longueur, la largeur, la hauteur de la piscine et le débit de remplissage en m3 par minute.

A cette étape vous pouvez déja instancier un objet piscine basique en lui passant 4 valeurs en argument. Le problème c'est que cet objet ne fait rien pour le moment. Vous allez donc lui ajouter une méthode remplissage.

La fonction remplissage calcul le temps de remplissage de la piscine grâce aux attributs de l'objet et retourne ce résultat. A ce stade votre objet est fonctionnel et fait ce qu'on lui demande, il prend des valeurs et calcul un débit.

Allons plus loin, créez une méthode pour afficher sur une page HTML toutes ces informations. Cette méthode affiche donc à l'écran la longueur, la largeur, la profondeur et le débit. Elle affiche également le temps de remplissage.

Astuce : la méthode pour afficher les informations devra faire appel à la méthode remplissage.  
