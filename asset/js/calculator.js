///////// CALCULATRICE //////////////////

// On récupère l'élément HTML qui affiche le résultat
let display = document.getElementById("display");

// Fonction appelée quand on appuie sur un chiffre ou un symbole (ex : 1, 2, +, -)
function press(value) {
  // Si l'affichage est encore à zéro, on le remplace par le nouveau chiffre/symbole
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    // Sinon, on ajoute ce qu'on a tapé à la suite (concaténation de texte)
    display.innerText += value;
  }
}

// Fonction qui remet l'affichage à zéro quand on clique sur "C"
function clearDisplay() {
  display.innerText = "0";
}

// Fonction qui calcule le résultat de l'opération affichée
function calculate() {
  try {
    console.log("calcul :", display.innerText);
    // eval() permet de calculer une expression écrite sous forme de texte
    // Exemple : "2+3" devient 5
    let result = eval(display.innerText);

    // On affiche le résultat sur l'écran
    display.innerText = result;
  } catch (e) {
    // Si une erreur se produit (ex: "2++"), on affiche "Erreur"
    display.innerText = "Erreur";
  }
}