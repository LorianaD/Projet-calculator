///////// CALCULATRICE //////////////////

// On récupère l'élément HTML qui affiche le résultat
let display = document.getElementById("display");

// Fonction quand on appuie sur un chiffre, un symbole ou un point
function press(value) {
  let current = display.innerText;
  let lastChar = current.charAt(current.length - 1);

  // Si l'affichage est 0 et qu'on tape un chiffre
  if (current === "0" && "0123456789".includes(value)) {
    display.innerText = value;
  }
  // Si on appuie sur un opérateur (+ - * /)
  else if ("+-*/".includes(value)) {
    // On empêche deux opérateaurs d'affilée
    if (!"+-*/".includes(lastChar)) {
      display.innerText += value;
    }
  }
  // Si on appuie sur un point
  else if (value ===".") {
    // Permet d'eviter deux points d'affilée
    if (lastChar !== ".") {
      display.innerText += value;
    }
  }

  // Sinon on ajoute la valeur normalement
  else {
    display.innerText += value;
  }
}

// Fonction pour effacer
function clearDisplay() {
  display.innerText = "0";
}

// Fonction pour calculer le résultat
function calculate() {
  let expression = display.innerText;
  let result = eval (expression); // eval permet de faire un calcul. Il permet de transformer afin de faire 1+1=2, au lieu de 1+1=11.
  
  // On arrondit le résultat à 2 chiffres après la virgule
  // Puis on convertit en nombre pour éviter que ce soit une chaîne
  result = Number(result.toFixed(2));

  display.innerText = result;
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

// Optionnel : ferme la modale si on clique en dehors de la fenêtre

function closeModale(event) {

  if (event.target === modal) {
    
    modal.style.display = "none";
    
  }
}

window.addEventListener("click", (event) => closeModale(event));

////////////// QUESTIONAIRE //////////////////////////

/* question = reponse juste,
  s1q1: 12,
  s1q2: 16,
  s1q3: 15,
  s1q4: 40,
  s1q5: 24,
  s1q6: 28,
  s1q7: 12,
  s1q8: 3.75,

  s2q1: 16,
  s2q2: 15,
  s2q3: 12,
  s2q4: 4,
  s2q5: 49,
  s2q6: 24,
  s2q7: 30,
  s2q8: 4,
*/

function btnCheck(idChamp, goodAnswer) { /* idChamp = à l'id que l'on doit vérifier ex. 's1q1' pour la premiere question */
  let champ = document.getElementById(idChamp);
  let msg = document.getElementById("msg-" + idChamp);
  let valeur = champ.value.trim(); /* trim() permet d'effacer les espaces, et ainsi evité des fause erreur.*/

  if (valeur === goodAnswer) {
    msg.textContent = "✅ Bravo ! Tu as réussi ! 👏";
    msg.style.color = "green";
  } else {
    msg.textContent = "❌ Essaie encore 🙁";
    msg.style.color = "crimson";
  }
}

// vrai ou faux //

function btnCheckvf(questionName, correctAnswer) {
  const radios = document.getElementsByName(questionName);
  const message = document.getElementById("msgvf-" + questionName); // ex: msgvf-s1a1
  let selectedValue = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].id.includes("true") ? "vrai" : "faux";
      break;
    }
  }

  if (selectedValue === "") {
    message.textContent = "S'il te plaît, choisis une option.";
    message.style.color = "orange";
  } else if (selectedValue === correctAnswer) {
    message.textContent = "✅ Bravo ! Tu as réussi ! 👏";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Essaie encore 🙁";
    message.style.color = "crimson";
  }
}
