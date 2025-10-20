/****************************
 * Day 2 — Advanced Array methods (tout-en-un)
 ****************************/

/* =========================
   🌟 Exercise 1 : Colors
   ========================= */
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// a) Affichage "1# choice is Blue." etc.
colors1.forEach((c, i) => console.log(`${i + 1}# choice is ${c}.`));

// b) Vérifier si au moins un élément === "Violet"
console.log(colors1.includes("Violet") ? "Yeah" : "No...");



/* =========================
   🌟 Exercise 2 : Colors #2
   ========================= */
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"]; // 1st, 2nd, 3rd, puis th

const suffix = (n) => {
  // 11th, 12th, 13th sont exceptions
  if (n % 100 >= 11 && n % 100 <= 13) return "th";
  // sinon selon le dernier chiffre
  return n % 10 === 1 ? "st" : n % 10 === 2 ? "nd" : n % 10 === 3 ? "rd" : "th";
};

colors2.forEach((c, i) => {
  const rank = i + 1;
  console.log(`${rank}${suffix(rank)} choice is ${c}.`);
});



/* =========================
   Exercise 3 : Analyzing
   (afficher les sorties demandées)
   ========================= */
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log("Ex3-1 output:", result); 
// Attendu: ["bread","carrot","potato","chicken","apple","orange"]

// ------2------
const country = "USA";
console.log("Ex3-2 output:", [...country]);
// Attendu: ["U","S","A"]

// ------Bonus------
let newArray = [...[,,]];
console.log("Ex3-bonus output:", newArray);
// Attendu: [undefined, undefined]



/* =========================
   🌟 Exercise 4 : Employees
   ========================= */
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1) map -> ["Hello Bradley", ...]
const welcomeStudents = users.map(u => `Hello ${u.firstName}`);
console.log("Ex4-1:", welcomeStudents);

// 2) filter -> uniquement Full Stack Residents
const fullStackResidents = users.filter(u => u.role === "Full Stack Resident");
console.log("Ex4-2:", fullStackResidents);

// 3) bonus: filter + map -> lastName des Full Stack Residents
const fsLastNames = users
  .filter(u => u.role === "Full Stack Resident")
  .map(u => u.lastName);
console.log("Ex4-3 (bonus):", fsLastNames);



/* =========================
   🌟 Exercise 5 : Star Wars (reduce)
   ========================= */
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, w) => acc === "" ? w : acc + " " + w, "");
console.log("Ex5:", sentence);
// Attendu: "a long time ago in a galaxy far far away"



/* =========================
   🌟 Exercise 6 : Employees #2
   ========================= */
const students = [
  {name: "Ray",      course: "Computer Science",        isPassed: true}, 
  {name: "Liam",     course: "Computer Science",        isPassed: false}, 
  {name: "Jenner",   course: "Information Technology",  isPassed: true}, 
  {name: "Marco",    course: "Robotics",                isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie",    course: "Big Data",                isPassed: false}
];

// 1) filter -> étudiants qui ont passé
const passedStudents = students.filter(s => s.isPassed);
console.log("Ex6-1:", passedStudents);

// 2) bonus: filter + forEach -> félicitations personnalisées
students
  .filter(s => s.isPassed)
  .forEach(s => console.log(`Good job ${s.name}, you passed the course in ${s.course}`));
