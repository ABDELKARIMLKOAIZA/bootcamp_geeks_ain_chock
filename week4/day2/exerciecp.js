//exos1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Afficher les couleurs avec leur numéro
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});



// 2. Vérifier si "Violet" est présent dans le tableau
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
//exos2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// 1. Afficher les couleurs avec l'ordre correct (1st, 2nd, 3rd, 4th, etc.)
colors.forEach((color, index) => {
  const pos = index + 1;
  // ternary pour choisir le bon suffixe
  const suffix = pos === 1 ? ordinal[1] 
                : pos === 2 ? ordinal[2] 
                : pos === 3 ? ordinal[3] 
                : ordinal[0];

  console.log(`${pos}${suffix} choice is ${color}.`);
});
 //exos3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//exos4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
//exos5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//exos6
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true},
  {name: "Liam", course: "Computer Science", isPassed: false},
  {name: "Jenner", course: "Information Technology", isPassed: true},
  {name: "Marco", course: "Robotics", isPassed: true},
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
  {name: "Jamie", course: "Big Data", isPassed: false}
];
//exos7
