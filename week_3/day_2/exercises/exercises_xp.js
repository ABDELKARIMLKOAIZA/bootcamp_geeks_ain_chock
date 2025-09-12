// ===== Exercise 1
// État initial
const people = ["Greg", "Mary", "Devon", "James"];

// 1) Retirer "Greg"
people.shift(); // -> ["Mary", "Devon", "James"]

// 2) Remplacer "James" par "Jason"
const j = people.indexOf("James");
if (j !== -1) people[j] = "Jason"; // -> ["Mary", "Devon", "Jason"]

// 3) Ajouter ton prénom à la fin
people.push("Karim"); // -> ["Mary", "Devon", "Jason", "Karim"]

// 4) Afficher l’index de "Mary"
console.log(people.indexOf("Mary")); // 0

// 5) Copier le tableau sans "Mary" ni ton prénom (utiliser slice)
const copy = people.slice(1, -1); // -> ["Devon", "Jason"]
console.log(copy);

// 6) Donner l’index de "Foo"
console.log(people.indexOf("Foo")); // -1 (car "Foo" n'est pas présent)

// 7) Variable 'last' = dernier élément du tableau
const last = people[people.length - 1]; // "Karim"
console.log(last);

// Rappel après (1)-(3), people = ["Mary", "Devon", "Jason", "Karim"]

// 1) Tableau de 5 couleurs
const colors = ["blue", "red", "green", "black", "purple"];

// 2) Boucle simple : "#1", "#2", ...
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// 3) Bonus : "1st", "2nd", "3rd", "4th", ...
// petite fonction d’ordinal correct (1st, 2nd, 3rd, 4th, 11th, 12th, 13th, etc.)
const ord = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

for (let i = 0; i < colors.length; i++) {
  const k = i + 1;
  console.log(`My ${k}${ord(k)} choice is ${colors[i]}`);
}

// ===== Exercise 2
// 1) Tableau des 5 couleurs
const colors = ["blue", "red", "green", "black", "purple"];

// 2) Afficher: "My #1 choice is blue", etc.
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// 3) Bonus: "My 1st/2nd/3rd/4th/5th choice ..."
const suffix = (n) => {
  // tableau de base et règles pour 11,12,13
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  return s[n % 10] || "th";
};

for (let i = 0; i < colors.length; i++) {
  const k = i + 1;
  console.log(`My ${k}${suffix(k)} choice is ${colors[i]}`);
}


// ===== Exercise 3
let num;

do {
  const raw = prompt("Enter a number (>= 10):"); // renvoie une string (ou null)
  console.log(typeof raw); // pour montrer le type reçu : "string" (ou "object" si Cancel)
  num = Number(raw);       // convertit la saisie en nombre
} while (!Number.isFinite(num) || num < 10);

console.log(`OK: ${num} ≥ 10`);

// ===== Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 2) Nombre d’étages
console.log(building.numberOfFloors); // 4

// 3) Nombre d’appartements aux 1er et 3e étages
console.log("1st:", building.numberOfAptByFloor.firstFloor, "3rd:", building.numberOfAptByFloor.thirdFloor);

// 4) Nom du 2e locataire et nb de pièces
const secondTenant = building.nameOfTenants[1]; // "Dan"
const roomsOfSecond = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(secondTenant, roomsOfSecond); // "Dan", 4

// 5) Si (loyer Sarah + David) > loyer Dan, passer Dan à 1200
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danInfo = building.numberOfRoomsAndRent.dan; // [rooms, rent]

if (sarahRent + davidRent > danInfo[1]) {
  danInfo[1] = 1200;
}
console.log("Dan rent:", building.numberOfRoomsAndRent.dan[1]); // 1200

// ===== Exercise 5

// 1) Objet family
const family = {
  father: "Karim",
  mother: "Nadia",
  son: "Yassine",
  daughter: "Sara",
  city: "Casablanca",
};

// 2) Afficher les clés (for...in)
for (const key in family) {
  if (Object.prototype.hasOwnProperty.call(family, key)) {
    console.log(key);
  }
}

// 3) Afficher les valeurs (for...in)
for (const key in family) {
  if (Object.prototype.hasOwnProperty.call(family, key)) {
    console.log(family[key]);
  }
}

// Option utile : clés + valeurs
for (const key in family) {
  if (Object.prototype.hasOwnProperty.call(family, key)) {
    console.log(`${key}: ${family[key]}`);
  }
}



// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = '';
for (const key in details) {
  if (Object.prototype.hasOwnProperty.call(details, key)) {
    sentence += key + ' ' + details[key] + ' ';
  }
}
console.log(sentence.trim()); // -> "my name is Rudolf the reindeer"
// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// trier les prénoms, prendre la 1re lettre de chacun, mettre en majuscules, concaténer
const secret = names
  .slice() // pour ne pas muter l’original
  .sort((a, b) => a.localeCompare(b))
  .map(n => n.trim()[0].toUpperCase())
  .join('');

console.log(secret); // "ABJKPS"

