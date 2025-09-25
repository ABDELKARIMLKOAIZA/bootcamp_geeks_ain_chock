// ==========================
// Exercise 1 : Scope
// ==========================

// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3; // a devient 3
  }
  alert(`inside the funcOne function ${a}`); // => 3
}
funcOne();

// #1.2
// Si on utilise const à la place de let :
// Erreur, car on essaye de réassigner une constante (a = 3).


// #2
let a = 0;
function funcTwo() {
  a = 5; // change la variable globale a en 5
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

funcThree(); // => 0 (avant funcTwo)
funcTwo();
funcThree(); // => 5 (après funcTwo)

// #2.2
// Si a est déclaré avec const :
// funcTwo() essaie de réassigner -> Erreur.


// #3
function funcFour() {
  window.a = "hello"; // crée/écrase une variable globale a
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive(); // => "hello"

// #3.2



// #4
let a4 = 1;
function funcSix() {
  let a4 = "test"; // variable locale masque la globale
  alert(`inside the funcSix function ${a4}`); // => "test"
}
funcSix();

// #4.2
// Avec const à la place de let : même résultat, car aucune réassignation.


// #5
let a5 = 2;
if (true) {
  let a5 = 5; // scope du if uniquement
  alert(`in the if block ${a5}`); // => 5
}
alert(`outside of the if block ${a5}`); // => 2



//exos2
// 1. Transform winBattle() en fonction fléchée
const winBattle = () => true;

// 2. Créer la variable experiencePoints
// 3. Utiliser l’opérateur ternaire
let experiencePoints = winBattle() ? 10 : 1;

// 4. Afficher la variable
console.log(experiencePoints); // => 10


//exos3 
// Fonction fléchée qui vérifie si c’est une string
const isString = (value) => typeof value === "string";

// Exemples d’utilisation
console.log(isString("hello"));       // true
console.log(isString([1, 2, 4, 0]));  // false
console.log(isString(123));           // false
console.log(isString("123"));         // true

//exos4
// Fonction fléchée en une ligne
const sum = (a, b) => a + b;

// Exemples d’utilisation
console.log(sum(2, 3));   // 5
console.log(sum(10, -4)); // 6
console.log(sum(7, 7));   // 14


//exos 5
// 1. Function declaration
function kgToGrams1(kg) {
  return kg * 1000;
}
console.log(kgToGrams1(5)); // 5000


// 2. Function expression
const kgToGrams2 = function(kg) {
  return kg * 1000;
};
console.log(kgToGrams2(3)); // 3000


// 3. Difference (one line comment)
// Function declaration is hoisted (can be called before its definition),
// while function expression is not hoisted.


// 4. Arrow function (one line)
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(7)); // 7000




//exos6
// Self-invoking function (IIFE)
(function(numChildren, partnerName, geoLocation, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
  
  // Affichage dans le DOM
  document.body.innerHTML += `<p>${sentence}</p>`;
})(3, "Sara", "Paris", "Engineer");



//exos7

// Self-invoking function (IIFE)
(function(userName) {
  const navbar = document.querySelector(".navbar");

  // Créer le conteneur user
  const userDiv = document.createElement("div");
  userDiv.classList.add("user-info");

  // Ajouter la photo de profil (exemple image placeholder)
  const profilePic = document.createElement("img");
  profilePic.src = "https://via.placeholder.com/40"; // tu peux remplacer par une vraie image

  // Ajouter le nom de l'utilisateur
  const nameSpan = document.createElement("span");
  nameSpan.textContent = `Welcome, ${userName}`;

  // Ajouter au div puis à la navbar
  userDiv.appendChild(profilePic);
  userDiv.appendChild(nameSpan);
  navbar.appendChild(userDiv);
})("John"); // tu passes le nom de l'utilisateur ici


//exos8
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  // appeler addIngredients une seule fois
  addIngredients("apple", "banana", "orange");
}

// invoquer la fonction externe dans le scope global
makeJuice("large");



//exos8
