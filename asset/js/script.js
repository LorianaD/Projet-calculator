///////// CALCULATRICE //////////////////

// On récupère l'élément HTML qui affiche le résultat
let display = document.getElementById("display");

// Fonction appelée quand on appuie sur un chiffre ou un symbole (ex : 1, 2, +, -)
function press(value) {

  // Si l'utilisateur appuie sur ".", on vérifie qu'on n'en a pas déjà mis un dans le nombre en cours
  if (value === ".") {
    let current = display.innerText;
    let parts = current.split(/[\+\-\*\/]/); // on découpe autour des opérateurs
    let lastPart = parts[parts.length - 1]; // on regarde le dernier nombre

    if (lastPart.includes(".")) {
      return; // si le dernier nombre a déjà un point, on ne fait rien
    }
  }

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

////////////// COMMANDE DU MODAL /////////////////////

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.querySelector(".close-button");

function showModal(modal) {

  modal.style.display = "flex"; // montre la modale

}

openBtn.addEventListener("click", () => showModal(modal));

function hideModal(modal) {

  modal.style.display = "none"; // cache la modale

}

closeBtn.addEventListener("click", () => hideModal(modal));

// Optionnel : ferme la modale si on clique en dehors

function closeModale(event) {

  if (event.target === modal) {
    
    modal.style.display = "none";
    
  }
}

window.addEventListener("click", (event) => closeModale(event));

////////////// QUESTIONAIRE //////////////////////////

let answear;

function s1q1(answear) {
  answear = document.getElementById("r1");
  if(answear == 12) {
    answear.document.innerText("Bravo ! Tu as réussi ! 👏");
  } else {
    answear.document.InnerText("Essai encore ☹️");
  }
}

s1q1(answear);